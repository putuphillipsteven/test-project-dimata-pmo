'use client';

import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { RiHome2Line } from 'react-icons/ri';
import { FaRegCheckCircle } from 'react-icons/fa';
import { IoNotificationsOutline } from 'react-icons/io5';
import { IoMdAdd } from 'react-icons/io';

const links = [
	{ name: 'Home', href: '/dashboard', icon: RiHome2Line },
	{
		name: 'My Tasks',
		href: '/dashboard/my-tasks',
		icon: FaRegCheckCircle,
	},
	{ name: 'Inbox', href: '/dashboard/inbox', icon: IoNotificationsOutline },
];

const secondSectionLinks = [
	{ name: 'Project', href: '/dashboard/project', icon: IoNotificationsOutline },
];
export default function NavLinks() {
	const pathname = usePathname();

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
					'flex items-center justify-center gap-2 rounded-md p-2 text-black-dimata md:flex-none',
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

	const renderedSecondSectionLink = secondSectionLinks?.map((link) => {
		const LinkIcon = link.icon;
		return (
			<Link
				key={link.name}
				href={link.href}
				className={clsx(
					'flex items-center justify-center gap-2 rounded-md p-2 text-black-dimata md:flex-none',
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
		<div className='flex flex-col gap-y-4 w-full'>
			<div className='flex flex-col items-start border-b border-dark-gray-dimata w-full py-4'>
				{renderedFirstSectionLink}
			</div>
		</div>
	);
}
