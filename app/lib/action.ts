'use server';

import { z } from 'zod';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import axiosInstance from './data';

const TaskSchema = z.object({
	name: z.string({
		invalid_type_error: 'Please input task name',
	}),
	dueDate: z.string({ invalid_type_error: 'Please input due date' }),
	description: z.string({ invalid_type_error: 'Please input description' }),
	priority: z.string({
		invalid_type_error: 'Please input priority level',
	}),
});

const CreateTask = TaskSchema;

export type State = {
	errors?: {
		name?: string[];
		dueDate?: string[];
		description?: string[];
		priority?: string[];
	};
	message?: string | null;
};

export async function createTask(formData: FormData) {
	const { name, dueDate, description, priority } = CreateTask.parse({
		name: formData.get('name'),
		assignee: formData.get('assignee'),
		dueDate: formData.get('dueDate'),
		description: formData.get('description'),
		priority: formData.get('priority'),
	});
	try {
		const response = await axiosInstance.post(`pmo-tasks`, {
			planStartDate: '2024-04-10T17:00:00.000Z',
			planFinishDate: '2024-04-10T17:00:00.000Z',
			regDate: '2024-04-10T17:00:00.000Z',
			updateDate: '2024-04-10T17:00:00.000Z',
			realStartDate: '2024-04-10T17:00:00.000Z',
			realFinishDate: new Date(dueDate).toISOString(),
			title: name,
			description: description,
			docNoRequest: 'Test',
			docStatus: 1,
			persentase: 1,
			customerId: 1,
			planManHours: 1,
			taskStatus: 'DRAFT',
			baselineIndex: null,
			totalValue: null,
			currencyId: 1,
			fixedType: 'Period',
			realManHours: 1,
			serviceType: {
				jobTypeId: 1,
				jobTypeName: 'multimedia brr ferociously',
				description: 'difficult',
				status: 26244,
				jobRole: {
					jobRoleId: 1,
					title: 'yahoo accessory citrus',
					description: 'samurai gall-bladder',
				},
				pmoTasks: null,
			},
			requirementType: {
				pmoTypeId: 1,
				typeGroup: 'WORKTYPE',
				title: 'trounce',
				description: 'the',
				sequence: 29360,
				pmoGoalTypes: null,
				pmoTasks: null,
				pmoTaskOfWorkTypes: null,
				pmoTaskOfChargeTypes: null,
				pmoVehicles: null,
			},
			kanban: {
				kanbanId: 1,
				title: 'potential officially',
				sequence: true,
				project: {
					projectId: 1,
					title: 'rectangular',
					description: 'atop spite',
					customerId: 14422,
					startDate: '2024-02-06T09:57:30Z',
					finishDate: '2024-02-06T06:57:40Z',
					docContractDate: '2024-02-06',
					docContractNo: 'certainly',
					maxManHours: 21473.7,
					status: 'CANCEL',
					regDate: '2024-02-06T07:31:51Z',
					updateDate: '2024-02-06T00:09:26Z',
					baselineIndex: 9724,
					totalValue: 16873.5,
				},
				pmoTasks: null,
			},
			workType: {
				pmoTypeId: 1,
				typeGroup: 'WORKTYPE',
				title: 'trounce',
				description: 'the',
				sequence: 29360,
				pmoGoalTypes: null,
				pmoTasks: null,
				pmoTaskOfWorkTypes: null,
				pmoTaskOfChargeTypes: null,
				pmoVehicles: null,
			},
			chargeType: {
				pmoTypeId: 1,
				typeGroup: 'WORKTYPE',
				title: 'trounce',
				description: 'the',
				sequence: 29360,
				pmoGoalTypes: null,
				pmoTasks: null,
				pmoTaskOfWorkTypes: null,
				pmoTaskOfChargeTypes: null,
				pmoVehicles: null,
			},
			project: {
				projectId: 1,
				title: 'rectangular',
				description: 'atop spite',
				customerId: 14422,
				startDate: '2024-02-06T09:57:30Z',
				finishDate: '2024-02-06T06:57:40Z',
				docContractDate: '2024-02-06',
				docContractNo: 'certainly',
				maxManHours: 21473.7,
				status: 'CANCEL',
				regDate: '2024-02-06T07:31:51Z',
				updateDate: '2024-02-06T00:09:26Z',
				baselineIndex: 9724,
				totalValue: 16873.5,
				projectType: {
					projectTypeId: 1,
					title: 'hurricane',
					typeGroup: 'Workgroup',
				},
				currency: null,
				pmoCustomerTeams: null,
				pmoFiles: null,
				pmoKanbans: null,
				pmoNotes: null,
				pmoProjectAccounts: null,
				pmoProjectGoals: null,
				pmoProjectJobRoles: null,
				pmoProjectLinks: null,
				pmoProjectLinkOfReferencingProjects: null,
				pmoProjectProducts: null,
				pmoProjectResources: null,
				pmoProjectTeams: null,
				pmoRecurrings: null,
				pmoTasks: null,
			},
		});
		console.log(`response`, response);
	} catch (err) {
		console.error('Error creating task:', err);
		throw err;
	}
	revalidatePath('/dashboard/project/list');
	redirect('/dashboard/project/list');
}
