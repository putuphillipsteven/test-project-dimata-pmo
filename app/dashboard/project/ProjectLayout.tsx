'use client';

import ProjectNav from '@/app/ui/dashboard/(overview)/project-nav';
import ProjectsLogo from '@/app/ui/dashboard/(overview)/projects-logo';
import { Fragment } from 'react';
import { MdOutlineCircle } from 'react-icons/md';
import { TiStarOutline } from 'react-icons/ti';

export default function ProjectLayout({ children }: { children: React.ReactNode }) {
	return (
		<Fragment>
			<div className='flex items-center gap-x-4 p-4'>
				<ProjectsLogo />
				<select className='bg-transparent'>
					<option>New Project</option>
				</select>
				<TiStarOutline className='text-2xl text-dark-gray-dimata' />
				<div className='flex items-center gap-x-1 text-dark-gray-dimata'>
					<MdOutlineCircle />
					<p className='text-dark-gray-dimata text-sm'>Set Status</p>
				</div>
			</div>
			<ProjectNav />
			<div>{children}</div>
		</Fragment>
	);
}
