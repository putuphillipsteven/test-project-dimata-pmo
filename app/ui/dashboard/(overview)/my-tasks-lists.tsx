import { fetchTasks } from '@/app/lib/data';
import { Tasks } from '@/app/lib/definition';
import { capitalizeFirstLetter, extractDate } from '@/app/lib/utils';
import capitalize from 'capitalize';

export default async function MyTasksLists() {
	const tasks: Tasks = await fetchTasks({ page: 0, size: 10 });
	const renderedTasks = tasks.map((task) => {
		return (
			<tr
				key={task?.title}
				className='border-2 border-dark-gray-dimata border-l-0 border-r-0 border-collapse h-[33px]'
			>
				<td className='px-2 text-xs whitespace-nowrap  border-2 border-dark-gray-dimata border-l-0'>
					{capitalize.words(task.title)}
				</td>
				<td className='px-2 text-xs whitespace-nowrap border-2 border-dark-gray-dimata border-l-0'>
					N.A
				</td>
				<td className='px-2 text-xs whitespace-nowrap border-2 border-dark-gray-dimata border-l-0'>
					{extractDate(task?.realFinishDate)}
				</td>
				<td className='px-2 text-xs whitespace-nowrap border-2 border-dark-gray-dimata border-l-0'>
					{capitalize.words(task?.description)}
				</td>
				<td className='px-2 text-xs whitespace-nowrap border-2 border-dark-gray-dimata border-l-0'>
					{capitalizeFirstLetter(task?.taskStatus)}
				</td>
				<td className='px-2 text-xs whitespace-nowrap border-2 border-dark-gray-dimata border-l-0 border-r-0'>
					{capitalizeFirstLetter(task?.project?.status)}
				</td>
			</tr>
		);
	});
	return <tbody className='divide-y fake-tbody'>{renderedTasks}</tbody>;
}
