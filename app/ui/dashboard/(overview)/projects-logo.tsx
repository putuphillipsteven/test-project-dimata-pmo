import Image from 'next/image';

export default function ProjectsLogo() {
	return (
		<div className='flex items-center justify-center rounded-md w-[3em] h-[3em] bg-cream-dimata border border-black-dimata'>
			<Image src='/task-logo.png' width={24} height={24} alt='project-dimata-logo' />
		</div>
	);
}
