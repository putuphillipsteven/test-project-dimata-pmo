import Link from 'next/link';
import { FaArrowLeft } from 'react-icons/fa6';
export default function BackButton() {
	return (
		<button className='flex items-center gap-x-2'>
			<FaArrowLeft />
			<Link href={'/dashboard/project/list'}>Back</Link>
		</button>
	);
}
