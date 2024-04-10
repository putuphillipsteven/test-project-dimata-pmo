'use client';

import Link from 'next/link';
import { useSearchParams, useRouter, usePathname } from 'next/navigation';
import { useEffect } from 'react';
import clsx from 'clsx';

export default function MyTaskLinks() {
	const searchParams = useSearchParams();
	const pathname = usePathname();
	const { replace } = useRouter();
	const params = new URLSearchParams(searchParams);

	const myTasksParams = params.get('my-tasks') || 'upcoming';

	useEffect(() => {
		params.set('my-tasks', myTasksParams);
		replace(`${pathname}?${params.toString()}`);
	}, []);

	const linkLists = [
		{ text: 'Upcoming', destination: 'upcoming' },
		{ text: 'Overdue', destination: 'overdue' },
		{ text: 'Completed', destination: 'completed' },
	];

	const renderedLinkLists = linkLists.map((link) => {
		return (
			<Link
				key={link.destination}
				href={{ pathname: pathname, query: { 'my-tasks': link.destination } }}
				className={clsx(
					'',
					{
						'font-bold text-black-dimata pb-2 border-b-2 border-dark-gray-dimata':
							myTasksParams === link.destination,
					},
					{
						'text-dark-gray-dimata': myTasksParams !== link.destination,
					},
				)}
			>
				{link?.text}
			</Link>
		);
	});
	return <div className='flex gap-x-4 ml-14 text-black-dimata'>{renderedLinkLists}</div>;
}
