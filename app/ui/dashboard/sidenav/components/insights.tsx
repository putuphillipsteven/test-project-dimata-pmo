'use client';

import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { IoMdAdd } from 'react-icons/io';
import { ImStatsDots } from 'react-icons/im';
import { PiFolderLight } from 'react-icons/pi';
import { TbTargetArrow } from 'react-icons/tb';
export default function Insights() {
	const pathname = usePathname();

	const links = [
		{ name: 'Reporting', href: '/dashboard/reporting', icon: ImStatsDots },
		{
			name: 'Portfolios',
			href: '/dashboard/portofolios',
			icon: PiFolderLight,
		},
		{ name: 'Goals', href: '/dashboard/goals', icon: TbTargetArrow },
	];

	// Check link is not on home or /dashboard
	const checkLink = (href: string, pathname: string) => {
		if (href === `/dashboard` && pathname === href) {
			return `pathname === href`;
		} else if (href !== `/dashboard` && pathname.includes(href)) {
			return `pathname.includes(href)`;
		}
	};

	const renderedFirstSectionLink = links.map((link) => {
		const LinkIcon = link.icon;
		return (
			<Link
				key={link.name}
				href={link.href}
				className={clsx(
					'flex items-center justify-center gap-x-2 rounded-md p-2 text-black-dimata',
					{
						'font-bold': checkLink(link.href, pathname),
					},
				)}
			>
				<LinkIcon className='w-6' />
				<p className='hidden md:block'>{link.name}</p>
			</Link>
		);
	});
	return (
		<div className='flex flex-col w-full items-start'>
			<div className='flex items-center justify-between w-full p-4'>
				<p>Insights</p>
				<IoMdAdd />
			</div>
			{renderedFirstSectionLink}
		</div>
	);
}
