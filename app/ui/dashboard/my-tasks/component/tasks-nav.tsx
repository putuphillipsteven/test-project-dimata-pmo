import { LuLayoutList } from 'react-icons/lu';
import { TfiList } from 'react-icons/tfi';
import { RiLayout4Line } from 'react-icons/ri';
import { IoCalendarOutline } from 'react-icons/io5';
import { TbLayoutGrid } from 'react-icons/tb';
import { HiPaperClip } from 'react-icons/hi2';
import TasksNavButton from './tasks-nav-button';
import { FaPlus } from 'react-icons/fa6';
export default function TaskNav() {
	return (
		<div className='flex items-center gap-x-4 px-4 border-b-2 border-dark-gray-dimata'>
			<TasksNavButton icon={<LuLayoutList />} text={'Overview'} />
			<div className='border-b-2 border-dark-gray-dimata'>
				<TasksNavButton icon={<TfiList />} text={'List'} />
			</div>
			<TasksNavButton icon={<RiLayout4Line />} text={'Board'} />
			<TasksNavButton icon={<IoCalendarOutline />} text={'Calendar'} />
			<TasksNavButton icon={<TbLayoutGrid />} text={'Dashboard'} />
			<TasksNavButton icon={<HiPaperClip />} text={'Files'} />
			<TasksNavButton icon={<FaPlus />} text={''} />
		</div>
	);
}
