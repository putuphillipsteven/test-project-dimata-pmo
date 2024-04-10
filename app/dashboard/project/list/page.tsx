import AddTaskButton from '@/app/ui/dashboard/(overview)/add-task-button';
import TableList from '@/app/ui/dashboard/(overview)/list/table-list';
import MyTasksLists from '@/app/ui/dashboard/(overview)/my-tasks-lists';

export default function Page() {
	return (
		<div className='flex flex-col gap-y-4 px-4'>
			<div>
				<AddTaskButton />
			</div>
			<TableList />
		</div>
	);
}
