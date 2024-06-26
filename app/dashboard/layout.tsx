import Navbar from '../ui/dashboard/navbar/navbar';
import SideNav from '../ui/dashboard/sidenav/sidenav';

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<div className='flex flex-col w-screen min-h-screen'>
			<Navbar />
			<div className='flex' style={{ minHeight: `calc(100vh - 70px)` }}>
				<div className='w-full flex-none md:w-[16em]'>
					<SideNav />
				</div>
				<div className='w-full md:overflow-y-auto bg-light-gray-dimata'>{children}</div>
			</div>
		</div>
	);
}
