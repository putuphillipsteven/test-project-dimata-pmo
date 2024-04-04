import { CiLight } from 'react-icons/ci';
export default function ThemeToggle() {
	return (
		<div className='flex items-center gap-x-2 bg-[#F1F1F1] p-1 rounded-3xl'>
			<div className='p-1 bg-white rounded-full'>
				<CiLight />
			</div>
			<p className='text-xs mr-1'>Light</p>
		</div>
	);
}
