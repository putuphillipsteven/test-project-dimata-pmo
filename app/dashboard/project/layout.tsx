'use client';

import ProjectNav from '@/app/ui/dashboard/(overview)/project-nav';
import ProjectsLogo from '@/app/ui/dashboard/(overview)/projects-logo';
import { usePathname } from 'next/navigation';
import { MdOutlineCircle } from 'react-icons/md';
import { TiStarOutline } from 'react-icons/ti';
import NonProjectLayout from './NonProjectLayout';
import ProjectLayout from './ProjectLayout';
export default function Layout({ children }: { children: React.ReactNode }) {
	const pathname = usePathname();

	// Check if the current URL matches the specified path

	const handlePathname = (pathname: string) => {
		// Regular expressions for matching specific patterns
		const isNonProjectPage = /^\/dashboard\/project\/list\/(create|edit)$/;

		// Check the pathname against the regular expressions
		if (isNonProjectPage.test(pathname)) {
			return <NonProjectLayout>{children}</NonProjectLayout>;
		} else {
			return <ProjectLayout>{children}</ProjectLayout>;
		}
	};

	const renderedLayout = handlePathname(pathname);
	return <div className='flex flex-col gap-y-4'>{renderedLayout}</div>;
}
