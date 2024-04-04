'use client';

import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { RiHome2Line } from 'react-icons/ri';
import { FaRegCheckCircle } from 'react-icons/fa';
import { IoNotificationsOutline } from 'react-icons/io5';
// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
	{ name: 'Home', href: '/dashboard', icon: RiHome2Line },
	{
		name: 'My Tasks',
		href: '/dashboard/my-tasks',
		icon: FaRegCheckCircle,
	},
	{ name: 'Inbox', href: '/dashboard/inbox', icon: IoNotificationsOutline },
];

export default function NavLinks() {
	const pathname = usePathname();
	return (
		<>
			{links.map((link) => {
				const LinkIcon = link.icon;
				return (
					<Link
						key={link.name}
						href={link.href}
						className={clsx(
							'flex items-center justify-center gap-2 rounded-md p-2 text-black-dimata md:flex-none',
							{
								'font-bold': pathname === link.href,
							},
						)}
					>
						<LinkIcon className='w-6' />
						<p className='hidden md:block'>{link.name}</p>
					</Link>
				);
			})}
		</>
	);
}