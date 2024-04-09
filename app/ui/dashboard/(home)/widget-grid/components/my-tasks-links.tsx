'use client';

import Link from 'next/link';
import { useSearchParams, useRouter, usePathname } from 'next/navigation';
import { useEffect } from 'react';

export default function MyTaskLinks() {
	const searchParams = useSearchParams();
	const pathname = usePathname();
	const { replace } = useRouter();
	const params = new URLSearchParams(searchParams);

	useEffect(() => {
		params.set('my-tasks', 'upcoming');
		replace(`${pathname}?${params.toString()}`);
	}, []);

	const linkLists = [
		{ text: 'Upcoming', destination: 'upcoming' },
		{ text: 'Overdue', destination: 'overdue' },
		{ text: 'Completed', destination: 'completed' },
	];

	const renderedLinkLists = linkLists.map((link) => {
		return (
			<Link href={{ pathname: pathname, query: { 'my-tasks': link.destination } }}>
				{link?.text}
			</Link>
		);
	});
	return <div className='flex gap-x-4 ml-14 text-black-dimata'>{renderedLinkLists}</div>;
}
