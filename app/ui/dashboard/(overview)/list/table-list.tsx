import MyTasksLists from '../my-tasks-lists';

export default function TableList() {
	return (
		<div className=''>
			<table className='min-w-full border-collapse'>
				<thead className='h-[33px]  border-2 border-dark-gray-dimata border-l-0 border-r-0'>
					<tr>
						<th
							scope='col'
							className='px-2 text-left text-xs font-medium text-gray-500  tracking-wider border-2 border-dark-gray-dimata border-l-0'
						>
							Task Name
						</th>
						<th
							scope='col'
							className='px-2 text-left text-xs font-medium text-gray-500  tracking-wider  border-2 border-dark-gray-dimata border-l-0'
						>
							Assignee
						</th>
						<th
							scope='col'
							className='px-2 text-left text-xs font-medium text-gray-500  tracking-wider  border-2 border-dark-gray-dimata border-l-0'
						>
							Due Date
						</th>
						<th
							scope='col'
							className='px-2 text-left text-xs font-medium text-gray-500  tracking-wider  border-2 border-dark-gray-dimata border-l-0'
						>
							Description
						</th>
						<th
							scope='col'
							className='px-2 text-left text-xs font-medium text-gray-500  tracking-wider  border-2 border-dark-gray-dimata border-l-0'
						>
							Priority
						</th>
						<th
							scope='col'
							className='px-2 text-left text-xs font-medium text-gray-500  tracking-wider  border-2 border-dark-gray-dimata border-l-0 border-r-0'
						>
							Status
						</th>
					</tr>
				</thead>
				<MyTasksLists />
			</table>
		</div>
	);
}
