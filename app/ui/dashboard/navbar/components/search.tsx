import { FiSearch } from 'react-icons/fi'; // Assuming FiSearch is the magnifier icon from react-icons

export default function Search() {
	return (
		<div className='relative'>
			<div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
				<FiSearch />
			</div>
			<input
				className='pl-10 bg-[#F1F1F1] w-[18em] md:w-[39em] p-2 border border-black rounded-3xl placeholder-black placeholder-opacity-100'
				placeholder='Search'
			/>
		</div>
	);
}
