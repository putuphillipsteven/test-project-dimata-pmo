import Link from 'next/link';
import { IoMdClose } from 'react-icons/io';
export default function CloseButton() {
	return (
		<button className='flex items-center gap-x-2'>
			<Link href={'/dashboard/project/list'}>
				<IoMdClose />
			</Link>
		</button>
	);
}
