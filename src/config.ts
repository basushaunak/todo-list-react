export const DB_NAME ="TodoDatabase"
export const DB_VERSION = 1


export interface User{
	userId: string,
	userName: string,
	firstName: string,
	middleName: string,
	lastName: string,
	country: string,
	mailId: string,
	creationDate: Date,
	dateOfBirth: Date,
}

export interface Project{
	projectId: string,
	userId: string,
	projectName: string,
	projectDetails: string,
	priority: string, //(Hi, Low, Normal)
	color: string,
	startDate: Date,
	endDate: Date,
	completed: boolean
}

export interface Task{
	taskId: string
	projectId: string,
	taskName: string,
	taskDetails: string,
	participants: string[],
	accessories: string[],
	location: string,
	startDate: Date,
	endDate: Date,
	completed: boolean
}
