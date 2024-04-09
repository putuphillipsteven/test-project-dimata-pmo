import { fetchTasks } from '@/app/lib/data';
import TasksLogo from '@/app/ui/dashboard/my-tasks/component/tasks-logo';
import { TiStarOutline } from 'react-icons/ti';
import { MdOutlineCircle } from 'react-icons/md';
import TaskNav from '@/app/ui/dashboard/my-tasks/component/tasks-nav';
import AddTaskButton from '@/app/ui/dashboard/my-tasks/component/add-task-button';
import MyTasksLists from '@/app/ui/dashboard/my-tasks/component/my-tasks-lists';
export default async function Page() {
	const tasks = await fetchTasks({ page: 0, size: 10 });
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
			<TaskNav />
			{/* <div className='px-2'>
				<AddTaskButton />
			</div>
			<div className='px-2'>
				<MyTasksLists />
			</div> */}
		</div>
	);
}
