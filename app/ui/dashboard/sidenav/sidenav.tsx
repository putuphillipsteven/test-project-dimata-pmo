import Insights from './components/insights';
import NavLinks from './components/nav-links';
export default function SideNav() {
	return (
		<div className='flex h-full flex-col items-start'>
			<NavLinks />
			<Insights />
		</div>
	);
}
