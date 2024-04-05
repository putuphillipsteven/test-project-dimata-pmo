import { Tasks } from '@/app/lib/definition';
import { extractDate } from '@/app/lib/utils';
import capitalize from 'capitalize';

export default function MyTasksList({ tasks }: { tasks: Tasks }) {
	return (
		<div className='p-4'>
			<div className='grid grid-cols-3 text-sm font-bold border-b pb-1 mb-1 border-dark-gray-dimata'>
				<p>Title</p>
				<p>Status</p>
				<p>Final Date</p>
			</div>
			{tasks?.map((task) => {
				return (
					<div key={task?.taskId} className='grid grid-cols-3 text-sm'>
						<p>{capitalize(task?.title)}</p>
						<p>{capitalize(task?.taskStatus)}</p>
						<p>{extractDate(task?.planFinishDate)}</p>
					</div>
				);
			})}
		</div>
	);
}
