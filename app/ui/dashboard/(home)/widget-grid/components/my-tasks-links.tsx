import Link from 'next/link';

export default function MyTaskLinks() {
	return (
		<div className='flex gap-x-4 ml-14 text-black-dimata'>
			<Link href={'/my-tasks/upcoming'} className='border-b-4 border-dark-gray-dimata pb-2'>
				Upcoming
			</Link>
			<Link href={'/my-tasks/overdue'}>Overdue</Link>
			<Link href={'/my-tasks/completed'}>Completed</Link>
		</div>
	);
}
