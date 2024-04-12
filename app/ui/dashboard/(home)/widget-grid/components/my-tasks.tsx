import { Tasks } from '@/app/lib/definition';
import Profile from '../../../navbar/components/profile';
import CreateTaskButton from './create-task-button';
import MyTaskLinks from './my-tasks-links';
import { fetchTasks } from '@/app/lib/data';
import MyTasksList from './my-tasks-list';
import { Suspense } from 'react';

export default async function MyTasks() {
	const tasks = await fetchTasks({ page: 0, size: 5 });
	return (
		<div className='bg-white rounded-xl w-[30em] h-[20em] overflow-hidden'>
			<div className='flex  flex-col items-start p-4 pb-0 gap-x-2 border-b-2 border-dark-gray-dimata'>
				<div className='flex items-center gap-x-4'>
					<Profile />
					<p>My Tasks</p>
				</div>
				<Suspense fallback={<div>Loading...</div>}>
					<MyTaskLinks />
				</Suspense>
			</div>
			<MyTasksList tasks={tasks} />
			<CreateTaskButton />
		</div>
	);
}
