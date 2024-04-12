import { FaRegStar } from 'react-icons/fa';
export default function Starred() {
	return (
		<div className='flex flex-col w-full items-start'>
			<div className='flex items-center justify-between w-full p-4'>
				<p>Starred</p>
			</div>
			<div className='flex items-center px-4 gap-x-2'>
				<FaRegStar className='text-dark-gray-dimata text-2xl' />
				<p className='text-dark-gray-dimata text-sm'>Starred items appear here</p>
			</div>
		</div>
	);
}
