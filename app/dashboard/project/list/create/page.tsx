import BackButton from '@/app/ui/dashboard/(overview)/list/create/back-button';
import CloseButton from '@/app/ui/dashboard/(overview)/list/create/close-button';

export default function Page() {
	return (
		<div className='p-8'>
			<div className='flex items-center justify-between'>
				<BackButton />
				<CloseButton />
			</div>
		</div>
	);
}
