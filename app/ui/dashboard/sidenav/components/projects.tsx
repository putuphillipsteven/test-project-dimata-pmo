'use client';

import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { IoMdAdd } from 'react-icons/io';
import { MdOutlineCheckBoxOutlineBlank } from 'react-icons/md';

export default function Project() {
	const pathname = usePathname();
	const links = [
		{ name: 'New Project', href: '/dashboard/project', icon: MdOutlineCheckBoxOutlineBlank },
	];

	// Check link is not on home or /dashboard
	const checkLink = (href: string, pathname: string) => {
		if (href === `/dashboard` && pathname === href) {
			return `pathname === href`;
		} else if (href !== `/dashboard` && pathname.includes(href)) {
			return `pathname.includes(href)`;
		}
	};

	const renderedProjectLinks = links?.map((link) => {
		const LinkIcon = link.icon;
		return (
			<Link
				key={link.name}
				href={link.href}
				className={clsx(
					'flex items-center justify-center gap-x-2 rounded-md text-black-dimata md:flex-none',
					{
						'font-bold': checkLink(link.href, pathname),
					},
				)}
			>
				<div className='bg-cream-dimata w-6 h-6 border border-black-dimata rounded-md'></div>
				<p className='hidden md:block'>{link.name}</p>
			</Link>
		);
	});
	return (
		<div className='flex flex-col w-full items-start'>
			<div className='flex items-center justify-between w-full p-4'>
				<p>Projects</p>
				<IoMdAdd />
			</div>
			<div className='px-4'>{renderedProjectLinks}</div>
		</div>
	);
}
