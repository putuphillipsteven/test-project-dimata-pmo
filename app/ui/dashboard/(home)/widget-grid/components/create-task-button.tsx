import { FaPlus } from 'react-icons/fa6';

export default function CreateTaskButton() {
	return (
		<div className='px-4 py-2'>
			<div className='flex items-center gap-x-2 pb-2 text-dark-gray-dimata border-b border-dark-gray-dimata'>
				<FaPlus />
				<p className='text-dark-gray-dimata text-sm'>Create Tasks</p>
			</div>
		</div>
	);
}
