'use client';

import { TaskField } from '@/app/lib/definition';
import { useFormState } from 'react-dom';
import Link from 'next/link';
import { createTask } from '@/app/lib/action';

export default function CreateTaskForm() {
	return (
		<div className='flex flex-col items-center justify-center w-[398px] max-w-[398px] gap-y-4'>
			<h2 className='text-3xl self-start'>New Tasks</h2>
			<form className='flex flex-col gap-y-4 w-full' action={createTask}>
				{/* Task Name */}
				<div className='flex flex-col gap-y-2 items-stretch'>
					<label htmlFor='name' className=''>
						Task Name
					</label>
					<input
						id='name'
						name='name'
						type='text'
						placeholder='Enter Task Name'
						className='w-full rounded-md border border-black-dimata p-1'
					/>
				</div>
				{/* Assignee */}
				<div className='flex flex-col gap-y-2 items-stretch'>
					<label htmlFor='assignee' className=''>
						Assignee
					</label>
					{/* <input
						id='assignee'
						name='assignee'
						type='text'
						placeholder='Enter Assignee Name'
						className='w-full rounded-md border border-black-dimata p-1'
					/> */}
				</div>
				{/* Due Date */}
				<div className='flex flex-col gap-y-2 items-stretch'>
					<label htmlFor='dueDate' className=''>
						Due Date
					</label>
					<input
						id='dueDate'
						name='dueDate'
						type='date'
						placeholder='Enter Due Date'
						className='w-full rounded-md border border-black-dimata p-1'
					/>
				</div>
				{/* Description Name */}
				<div className='flex flex-col gap-y-2 items-stretch'>
					<label htmlFor='description' className=''>
						Description
					</label>
					<textarea
						id='description'
						name='description'
						placeholder='Enter Description'
						className='w-full rounded-md border border-black-dimata p-1 h-[134px]'
					/>
				</div>
				{/* Priority */}
				<div className='flex flex-col gap-y-2 items-stretch'>
					<label htmlFor='priority' className=''>
						Priority
					</label>
					<select
						id='priority'
						name='priority'
						className='w-full rounded-md border border-black-dimata p-1'
					>
						<option value='Low'>Low</option>
						<option value='Medium'>Medium</option>
						<option value='High'>High</option>
					</select>
				</div>
				<button className='w-full bg-blue-500 p-1 rounded-md text-white' type='submit'>
					Save
				</button>
			</form>
		</div>
	);
}
