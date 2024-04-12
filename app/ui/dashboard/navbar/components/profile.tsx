import { IoMdPerson } from 'react-icons/io';
import clsx from 'clsx';
interface ProfileProps {
	size?: string;
}
export default function Profile({ size }: ProfileProps) {
	return (
		<div
			className={clsx('flex items-center p-2 bg-orange-dimata rounded-full text-white text-2xl', {
				'text-sm': size,
			})}
		>
			<IoMdPerson />
		</div>
	);
}
