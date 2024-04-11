import React, { Fragment } from 'react';

export default function NonProjectLayout({ children }: { children: React.ReactNode }) {
	return <div className='flex flex-col'>{children}</div>;
}
