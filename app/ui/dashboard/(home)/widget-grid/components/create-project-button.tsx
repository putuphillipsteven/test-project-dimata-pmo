import { FaPlus } from 'react-icons/fa6';
export default function CreateProjectButton() {
	return (
		<div className='flex items-center gap-x-2 p-4'>
			<div className='flex items-center justify-center rounded-md border border-dashed border-dark-gray-dimata w-10 h-10'>
				<FaPlus className='text-dark-gray-dimata' />
			</div>
			<p className='text-sm text-dark-gray-dimata'>Create Project</p>
		</div>
	);
}
