interface WorkType {
	pmoTypeId: number;
	typeGroup: string;
	title: string;
	description: string;
	sequence: number;
}

interface ChargeType {
	pmoTypeId: number;
	typeGroup: string;
	title: string;
	description: string;
	sequence: number;
}

interface Project {
	projectId: number;
	title: string;
	description: string;
	customerId: number;
	startDate: string; // Adjust the type if you need to parse it as a Date object
	finishDate: string; // Adjust the type if you need to parse it as a Date object
	docContractDate: string; // Adjust the type if you need to parse it as a Date object
	docContractNo: string;
	maxManHours: number;
	status: string;
	regDate: string; // Adjust the type if you need to parse it as a Date object
	updateDate: string; // Adjust the type if you need to parse it as a Date object
	baselineIndex: number;
	totalValue: number;
}

interface Task {
	taskId: number;
	title: string;
	description: string;
	docNoRequest: string;
	docStatus: number;
	persentase: number;
	customerId: number;
	planStartDate: string; // Adjust the type if you need to parse it as a Date object
	planFinishDate: string; // Adjust the type if you need to parse it as a Date object
	planManHours: number;
	taskStatus: string;
	regDate: string; // Adjust the type if you need to parse it as a Date object
	updateDate: string; // Adjust the type if you need to parse it as a Date object
	baselineIndex: number;
	totalValue: number;
	currencyId: number;
	fixedType: string;
	realStartDate: string; // Adjust the type if you need to parse it as a Date object
	realFinishDate: string; // Adjust the type if you need to parse it as a Date object
	realManHours: number;
	serviceType: any; // Adjust the type if you have specific data structure
	requirementType: any; // Adjust the type if you have specific data structure
	kanban: any; // Adjust the type if you have specific data structure
	workType: WorkType;
	chargeType: ChargeType;
	project: Project;
	pmoActivities: any; // Adjust the type if you have specific data structure
	pmoChecklists: any; // Adjust the type if you have specific data structure
	pmoFiles: any; // Adjust the type if you have specific data structure
	pmoNotes: any; // Adjust the type if you have specific data structure
	pmoRecurrings: any; // Adjust the type if you have specific data structure
	pmoTaskAccounts: any; // Adjust the type if you have specific data structure
	pmoTaskLinks: any; // Adjust the type if you have specific data structure
	pmoTaskLinkOfReferencingTasks: any; // Adjust the type if you have specific data structure
	pmoTaskProducts: any; // Adjust the type if you have specific data structure
	pmoTaskResources: any; // Adjust the type if you have specific data structure
}

export type Tasks = Task[];

export type TaskField = {
	name: string;
	assignee: string;
	dueDate: Date;
	description: string;
	priority: string;
};
