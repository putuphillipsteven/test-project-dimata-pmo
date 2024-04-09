'use client';

import { LuLayoutList } from 'react-icons/lu';
import { TfiList } from 'react-icons/tfi';
import { RiLayout4Line } from 'react-icons/ri';
import { IoCalendarOutline } from 'react-icons/io5';
import { TbLayoutGrid } from 'react-icons/tb';
import { HiPaperClip } from 'react-icons/hi2';
import TasksNavButton from './tasks-nav-button';
import { FaPlus } from 'react-icons/fa6';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
export default function TaskNav() {
	const searchParams = useSearchParams();
	const pathname = usePathname();
	const { replace } = useRouter();
	const params = new URLSearchParams(searchParams);

	const filter = params.get('filter') || '';
	useEffect(() => {
		params.set('filter', 'list');
		replace(`${pathname}?${params.toString()}`);
	}, []);

	const taskNavLinks = [
		{
			text: 'Overview',
			destination: 'overview',
			icon: <LuLayoutList />,
		},
		{
			text: 'List',
			destination: 'list',
			icon: <TfiList />,
		},
		{
			text: 'Board',
			destination: 'board',
			icon: <RiLayout4Line />,
		},
		{
			text: 'Calendar',
			destination: 'calendar',
			icon: <IoCalendarOutline />,
		},
		{
			text: 'Dashboard',
			destination: 'dashboard',
			icon: <TbLayoutGrid />,
		},
		{
			text: 'Files',
			destination: 'files',
			icon: <HiPaperClip />,
		},
		{
			text: ``,
			destination: ``,
			icon: <FaPlus />,
		},
	];

	const renderedTaskNavLinks = taskNavLinks.map((link) => {
		return (
			<TasksNavButton
				filter={filter}
				icon={link.icon}
				text={link.text}
				destination={link.destination}
				pathname={pathname}
			/>
		);
	});
	return (
		<div className='flex items-center gap-x-4 px-4 border-b-2 border-dark-gray-dimata'>
			{renderedTaskNavLinks}
		</div>
	);
}
