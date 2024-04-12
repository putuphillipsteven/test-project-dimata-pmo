import Link from 'next/link';
import { FaPlus } from 'react-icons/fa6';

export default function CreateTaskButton() {
	return (
		<div className='px-4 py-2'>
			<div className='flex items-center gap-x-2 pb-2 text-dark-gray-dimata border-b border-dark-gray-dimata'>
				<FaPlus />
				<Link href={'/dashboard/project/list/create'} className='text-dark-gray-dimata text-sm'>
					Create Tasks
				</Link>
			</div>
		</div>
	);
}
