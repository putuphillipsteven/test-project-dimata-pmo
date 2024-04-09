import ProjectNav from '@/app/ui/dashboard/(overview)/project-nav';
import TasksLogo from '@/app/ui/dashboard/my-tasks/component/tasks-logo';
import TaskNav from '@/app/ui/dashboard/my-tasks/component/tasks-nav';
import { MdOutlineCircle } from 'react-icons/md';
import { TiStarOutline } from 'react-icons/ti';

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<div className='flex flex-col gap-y-4'>
			<div className='flex items-center gap-x-4 p-4'>
				<TasksLogo />
				<select className='bg-transparent'>
					<option>New Project</option>
				</select>
				<TiStarOutline className='text-2xl text-dark-gray-dimata' />
				<div className='flex items-center gap-x-1 text-dark-gray-dimata'>
					<MdOutlineCircle />
					<p className='text-dark-gray-dimata text-sm'>Set Status</p>
				</div>
			</div>
			<ProjectNav />
			<div>{children}</div>
		</div>
	);
}
