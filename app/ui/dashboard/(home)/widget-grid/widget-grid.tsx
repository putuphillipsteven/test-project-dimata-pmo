import MyProjects from './components/my-projects';
import MyTasks from './components/my-tasks';

export default async function WidgetGrid() {
	return (
		<div className='grid grid-cols-2 gap-2 auto-rows-auto'>
			<MyTasks />
			<MyProjects />
		</div>
	);
}