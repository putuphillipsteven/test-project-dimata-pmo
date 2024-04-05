import CreateProjectButton from './create-project-button';

export default function MyProjects() {
	return (
		<div className='bg-white rounded-xl w-[30em] h-[20em] overflow-hidden'>
			<div className='flex  flex-col items-start p-4 pb-0 gap-x-2'>
				<div className='flex items-center gap-x-4'>
					<p>Projects</p>
					<select className='text-dark-gray-dimata text-xs'>
						<option>Recents</option>
					</select>
				</div>
			</div>
			<CreateProjectButton />
		</div>
	);
}
