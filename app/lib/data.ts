import { Tasks } from './definition';

import axios, { AxiosInstance } from 'axios';

const axiosInstance: AxiosInstance = axios.create({
	baseURL: process.env.NEXT_PUBLIC_API_ROUTE || '',
	headers: {
		Accept: '*/*', // Accept header
		Authorization:
			'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImV4cCI6MTcxNDcwNDI0NywiYXV0aCI6IlJPTEVfQURNSU4gUk9MRV9VU0VSIiwiaWF0IjoxNzEyMTEyMjQ3fQ.UgpzsdrOrfb6cfdlQ71TmzgLQxLQRFl0ALVrUbUTup9me6QaSaY7lQe4Kxt7LmP5o1gxbZcpVAeaVD11L4E25w', // Authorization header
	},
});

export default axiosInstance;

export const fetchTasks = async () => {
	try {
		const data = await axiosInstance.get(`pmo-tasks`, {
			params: {
				page: 0,
				size: 5,
			},
		});
		return data?.data;
	} catch (err) {
		throw err;
	}
};
