import React, { ReactNode } from 'react';

interface TaskNavButtonProps {
	icon: ReactNode;
	text: string;
}

export default function TasksNavButton({ icon, text }: TaskNavButtonProps): React.ReactElement {
	return (
		<div className='pb-2 flex items-center gap-x-2 text-dark-gray-dimata'>
			{icon}
			<p className='text-dark-gray-dimata text-sm'>{text}</p>
		</div>
	);
}
