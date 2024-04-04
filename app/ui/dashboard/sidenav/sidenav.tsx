import NavLinks from './components/nav-links';
export default function SideNav() {
	return (
		<div className='flex h-full flex-col md:px-2 items-start py-4 border border-b-black-dimata'>
			<NavLinks />
		</div>
	);
}
