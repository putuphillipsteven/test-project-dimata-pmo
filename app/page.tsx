import Link from 'next/link';

export default function Home() {
	return (
		<main className='flex min-h-screen flex-col items-center justify-center p-24'>
			<h1 className='font-bold uppercase'>Test Project Dimata IT Solutions</h1>
			<Link href={'/dashboard'} className='text-blue-500 underline'>
				Dashboard
			</Link>
		</main>
	);
}
