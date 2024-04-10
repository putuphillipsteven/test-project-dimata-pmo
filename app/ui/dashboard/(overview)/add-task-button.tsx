import Link from 'next/link';
import { FaPlus } from 'react-icons/fa6';

export default function AddTaskButton() {
	return (
		<button className='flex items-center gap-x-2 px-2 py-1 border border-black-dimata rounded-xl'>
			<FaPlus />
			<Link href={'/dashboard/project/list/create'}>Add Task</Link>
		</button>
	);
}
