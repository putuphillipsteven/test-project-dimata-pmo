'use client';

import { LuLayoutList } from 'react-icons/lu';
import { TfiList } from 'react-icons/tfi';
import { RiLayout4Line } from 'react-icons/ri';
import { IoCalendarOutline } from 'react-icons/io5';
import { TbLayoutGrid } from 'react-icons/tb';
import { HiPaperClip } from 'react-icons/hi2';
import { FaPlus } from 'react-icons/fa6';
import { usePathname, useRouter } from 'next/navigation';
import ProjectNavButton from './project-nav-button';
export default function ProjectNav() {
	const pathname = usePathname();
	console.log(`projectNav`, pathname);
	const router = useRouter();
	console.log(`projectNav`, router);

	const projectNavLinks = [
		{
			text: 'Overview',
			href: `/dashboard/project`,
			icon: <LuLayoutList />,
		},
		{
			text: 'List',
			href: `/dashboard/project/list`,
			icon: <TfiList />,
		},
		{
			text: 'Board',
			href: `/dashboard/project/board`,
			icon: <RiLayout4Line />,
		},
		{
			text: 'Calendar',
			href: `/dashboard/project/calendar`,
			icon: <IoCalendarOutline />,
		},
		{
			text: 'Dashboard',
			href: `/dashboard/project/dashboard`,
			icon: <TbLayoutGrid />,
		},
		{
			text: 'Files',
			href: `/dashboard/project/files`,
			icon: <HiPaperClip />,
		},
		{
			text: ``,
			href: `/dashboard/project/`,
			icon: <FaPlus />,
		},
	];

	const renderedProjectNavLinks = projectNavLinks.map((link) => {
		return (
			<ProjectNavButton icon={link.icon} text={link.text} href={link.href} pathname={pathname} />
		);
	});
	return (
		<div className='flex items-center gap-x-4 px-4 border-b-2 border-dark-gray-dimata'>
			{renderedProjectNavLinks}
		</div>
	);
}
