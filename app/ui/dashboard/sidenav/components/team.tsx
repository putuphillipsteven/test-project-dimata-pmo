import Link from 'next/link';
import { BsFillPeopleFill } from 'react-icons/bs';
import { FaAngleRight } from 'react-icons/fa6';
export default function Team() {
	return (
		<div className='flex flex-col w-full items-start'>
			<div className='flex items-center justify-between w-full p-4'>
				<p>Team</p>
			</div>
			<div className='flex items-center justify-between w-full px-4 '>
				<div className='flex items-center gap-x-2'>
					<BsFillPeopleFill className='text-dark-gray-dimata text-2xl' />
					<span style={{ cursor: 'not-allowed', textDecoration: 'none', color: 'inherit' }}>
						<p className='text-sm'>My Work Space</p>
					</span>
				</div>
				<FaAngleRight />
			</div>
		</div>
	);
}
