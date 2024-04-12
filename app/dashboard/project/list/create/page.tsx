import BackButton from '@/app/ui/dashboard/(overview)/list/create/back-button';
import CloseButton from '@/app/ui/dashboard/(overview)/list/create/close-button';
import CreateTaskForm from '@/app/ui/dashboard/(overview)/list/create/create-task-form';

export default function Page() {
	return (
		<div className='p-8 flex flex-col gap-y-4 items-center'>
			<div className='flex items-center justify-between min-w-full'>
				<BackButton />
				<CloseButton />
			</div>
			<CreateTaskForm />
		</div>
	);
}
