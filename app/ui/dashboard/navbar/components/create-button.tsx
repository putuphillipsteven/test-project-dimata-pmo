import { FaPlus } from 'react-icons/fa6';

export default function CreateButton() {
	return (
		<div className='flex items-center gap-x-2 bg-light-gray-dimata border border-dark-gray-dimata p-2 rounded-3xl'>
			<div className='bg-purple-dimata text-white text-xl p-1 rounded-full'>
				<FaPlus />
			</div>
			<p>Create</p>
		</div>
	);
}
