import Profile from '../../../navbar/components/profile';
import RemoveAssigneeButton from './remove-assignee-button';

export default function AssigneeProfile() {
	return (
		<div className='flex items-center gap-x-2'>
			<Profile size='sm' />
			<div>
				<p className='text-sm'>User</p>
				<p className='text-xs text-dark-gray-dimata'>Project Owner</p>
			</div>
			<RemoveAssigneeButton />
		</div>
	);
}
