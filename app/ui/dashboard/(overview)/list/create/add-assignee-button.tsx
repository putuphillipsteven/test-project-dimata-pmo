import { IoMdAdd } from 'react-icons/io';

export default function AddAssigneeButton() {
	return (
		<div className='flex gap-x-2 items-center'>
			<div className='flex items-center p-2 rounded-full text-dark-gray-dimata text-2xl border border-dashed border-dark-gray-dimata'>
				<IoMdAdd className='text-sm' />
			</div>
			<p className='text-sm text-dark-gray-dimata'>Add More</p>
		</div>
	);
}
