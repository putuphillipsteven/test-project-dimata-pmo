import Profile from '../../../navbar/components/profile';
import CreateTaskButton from './create-task-button';
import MyTaskLinks from './my-tasks-links';

export default function MyTasks() {
	return (
		<div className='bg-white rounded-xl w-[30em] h-[14em] overflow-hidden'>
			<div className='flex  flex-col items-start p-4 pb-0 gap-x-2 border-b-2 border-dark-gray-dimata'>
				<div className='flex items-center gap-x-4'>
					<Profile />
					<p>My Tasks</p>
				</div>
				<MyTaskLinks />
			</div>
			<CreateTaskButton />
		</div>
	);
}
