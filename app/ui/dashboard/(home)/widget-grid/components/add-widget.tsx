import { FaPlus } from 'react-icons/fa6';
export default function AddWidget() {
	return (
		<div className='border border-dashed flex items-center justify-center border-dark-gray-dimata rounded-xl w-[30em] h-[14em] overflow-hidden'>
			<button className='flex items-center px-1 py-2 gap-x-2 border border-black-dimata rounded-md'>
				<FaPlus />
				<p>Add Widget</p>
			</button>
		</div>
	);
}
