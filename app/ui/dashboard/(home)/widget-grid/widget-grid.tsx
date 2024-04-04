import MyTasks from './components/my-tasks';

export default async function WidgetGrid() {
	return (
		<div className='grid grid-cols-2 gap-2 auto-rows-auto'>
			<MyTasks />
			<div>
				<p>Widget Grid</p>
			</div>
		</div>
	);
}
