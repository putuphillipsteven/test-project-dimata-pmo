import React, { ReactNode } from 'react';
import clsx from 'clsx';
import Link from 'next/link';

interface TaskNavButtonProps {
	icon: ReactNode;
	text: string;
	href: string;
	pathname: string;
}

export default function TasksNavButton({
	icon,
	text,
	href,
	pathname,
}: TaskNavButtonProps): React.ReactElement {
	return (
		<div
			className={clsx(
				'flex items-center gap-x-2 pb-2',
				// {
				// 	'text-black border-b-2 border-dark-gray-dimata': filter === destination,
				// },
				// {
				// 	'text-dark-gray-dimata': filter !== destination,
				// },
			)}
		>
			{icon}
			<Link
				href={{ pathname: `${href}` }}
				className={clsx(
					'text-sm',
					// {
					// 	'text-black': filter === destination,
					// },
					// {
					// 	'text-dark-gray-dimata': filter !== destination,
					// },
				)}
			>
				{text}
			</Link>
		</div>
	);
}
