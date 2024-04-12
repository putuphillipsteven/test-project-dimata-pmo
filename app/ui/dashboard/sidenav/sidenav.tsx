import Insights from './components/insights';
import NavLinks from './components/nav-links';
import Project from './components/projects';
import Starred from './components/starred';
export default function SideNav() {
	return (
		<div className='flex h-full flex-col items-start'>
			<NavLinks />
			<Insights />
			<Starred />
			<Project />
		</div>
	);
}
