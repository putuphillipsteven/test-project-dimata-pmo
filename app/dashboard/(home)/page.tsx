import { getDateAsString } from '@/app/lib/utils';
import WidgetGrid from '@/app/ui/dashboard/(home)/widget-grid/widget-grid';

export default async function Page() {
	const currentDate: string = getDateAsString();
	return (
		<main className='h-full flex flex-col justify-start items-center p-8 gap-y-8'>
			<div className='flex flex-col justify-center items-center gap-y-4'>
				<p>{currentDate}</p>
				<h2 className='text-2xl'>Good Morning, User</h2>
			</div>
			<WidgetGrid />
		</main>
	);
}
