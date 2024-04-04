import Navbar from '../ui/dashboard/navbar/navbar';

export default function () {
	return (
		<main className='flex flex-col gap-y-2'>
			<Navbar />
			<div className='p-4'>
				<p>Dashboard</p>
			</div>
		</main>
	);
}
