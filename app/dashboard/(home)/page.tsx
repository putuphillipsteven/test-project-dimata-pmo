import { getDateAsString } from '@/app/lib/utils';

export default async function Page() {
	const currentDate: string = getDateAsString();
	return (
		<main className='h-full flex flex-col justify-center items-center gap-y-8'>
			{currentDate}
			<h2 className='text-2xl'>Good Morning, User</h2>
		</main>
	);
}
