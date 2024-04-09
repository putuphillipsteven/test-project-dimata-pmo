import React, { ReactNode } from 'react';
import clsx from 'clsx';
import Link from 'next/link';

interface ProjectNavButtonProps {
	icon: ReactNode;
	text: string;
	href: string;
	pathname: string;
}

export default function ProjectNavButton({
	icon,
	text,
	href,
	pathname,
}: ProjectNavButtonProps): React.ReactElement {
	return (
		<div
			className={clsx(
				'flex items-center gap-x-2 pb-2',
				{
					'text-black border-b-2 border-dark-gray-dimata': `${href}` === pathname,
				},
				{
					'text-dark-gray-dimata': href !== pathname,
				},
			)}
		>
			{icon}
			<Link
				href={{ pathname: `${href}` }}
				className={clsx(
					'text-sm',
					{
						'text-black': href === pathname,
					},
					{
						'text-dark-gray-dimata': href !== pathname,
					},
				)}
			>
				{text}
			</Link>
		</div>
	);
}
