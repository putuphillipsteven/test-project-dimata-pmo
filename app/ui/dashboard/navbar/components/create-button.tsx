import { FaPlus } from 'react-icons/fa6';

export default function CreateButton() {
	return (
		<div className='flex items-center gap-x-2 bg-[#F1F1F1] border border-black p-2 rounded-3xl'>
			<div className='bg-[#625FFB] text-white text-xl p-1 rounded-full'>
				<FaPlus />
			</div>
			<p>Create</p>
		</div>
	);
}
