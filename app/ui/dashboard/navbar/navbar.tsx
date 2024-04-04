import { GiHamburgerMenu } from 'react-icons/gi';
import CreateButton from './components/create-button';
import Search from './components/search';
import ThemeToggle from './components/theme-toggle';
import Profile from './components/profile';

export default function Navbar() {
	return (
		<div className='p-4 flex items-center justify-between border border-b-black'>
			<div className='flex items-center gap-x-4'>
				<GiHamburgerMenu className='text-2xl' />
				<CreateButton />
			</div>
			<div>
				<Search />
			</div>
			<div className='flex items-center gap-x-4'>
				<ThemeToggle />
				<Profile />
			</div>
		</div>
	);
}
