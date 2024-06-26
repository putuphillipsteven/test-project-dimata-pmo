import axios, { AxiosInstance } from 'axios';
import { unstable_noStore as noStore } from 'next/cache';
const taskStatus = [
	'DRAFT',
	'TOBEAPPROVED',
	'APPROVED',
	'INPROGRESS',
	'FINISHED',
	'CLOSED',
	'CANCEL',
	'VOID',
];

const token = process.env.NEXT_PUBLIC_API_TOKEN;

const axiosInstance: AxiosInstance = axios.create({
	baseURL: process.env.NEXT_PUBLIC_API_ROUTE || '',
	headers: {
		Accept: '*/*', // Accept header
		Authorization: `Bearer ${token}`, // Authorization header
	},
});

export default axiosInstance;

interface FetchTasks {
	page: number;
	size: number;
}

export const fetchTasks = async ({ page, size }: FetchTasks) => {
	try {
		noStore();
		const data = await axiosInstance.get(`pmo-tasks`, {
			params: {
				page,
				size,
				sort: `taskId,desc`,
			},
		});
		return data?.data;
	} catch (err) {
		throw err;
	}
};
