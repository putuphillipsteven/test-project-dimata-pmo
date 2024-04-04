'use client';

import { getDateAsString } from '@/app/lib/utils';
import WidgetGrid from '@/app/ui/dashboard/(home)/widget-grid/widget-grid';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

export default function Page() {
	const searchParams = useSearchParams();
	const pathname = usePathname();
	const { replace } = useRouter();
	const params = new URLSearchParams(searchParams);
	console.log(`pathname`, pathname);
	console.log(`params`, params);

	useEffect(() => {
		params.set('tasks', 'upcoming');
		params.set('project', 'recent');
		params.set('people', 'frequentCollaborators');
		replace(`${pathname}?${params.toString()}`);
	}, []);

	const currentDate: string = getDateAsString();
	return (
		<main className='h-full flex flex-col justify-center items-center p-8 gap-y-8'>
			<div className='flex flex-col justify-center items-center gap-y-4'>
				<p>{currentDate}</p>
				<h2 className='text-2xl'>Good Morning, User</h2>
			</div>
			<WidgetGrid />
		</main>
	);
}
