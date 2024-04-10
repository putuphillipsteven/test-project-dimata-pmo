import { fetchTasks } from '@/app/lib/data';

export default async function MyTasksLists() {
	const tasks = await fetchTasks({ page: 0, size: 10 });
	console.log(`tasks`, tasks);
	return (
		<div>
			<p>Test</p>
		</div>
	);
}
