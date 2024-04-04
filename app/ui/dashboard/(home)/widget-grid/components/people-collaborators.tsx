import Profile from '../../../navbar/components/profile';

export default function PeopleCollaborators() {
	return (
		<div className='bg-white rounded-xl w-[30em] h-[14em] overflow-hidden'>
			<div className='flex flex-col justify-between items-start p-4 gap-y-4 h-full'>
				<div className='flex flex-col gap-y-4'>
					<div className='flex items-center gap-x-4'>
						<p>People</p>
						<select className='text-dark-gray-dimata text-xs'>
							<option>Frequent Collaborators</option>
						</select>
					</div>
					<div className='flex items-center gap-x-4'>
						<Profile />
						<p>User</p>
					</div>
				</div>
				<div className='flex flex-col items-center justify-center w-full gap-y-4 place-self-end'>
					<p className='text-dark-gray-dimata'>
						Invite your teammates to collaborate in Dimata PMO
					</p>
					<button className='border border-black-dimata px-1 py-2 rounded-md'>
						Invite teammates
					</button>
				</div>
			</div>
		</div>
	);
}
