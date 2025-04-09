export interface IProjectCategory {
    projectName: string
    templateName: string
    projectType: 'Wedding' | 'Corporate' | 'Other'
}

export interface IProjectDetails {
    eventDate: string
    guestCount: string
    budget: string
    country: string
    city: string
    state: string
    time: string
    duration: string
}

export interface ICreateProjectData {
    projectCategory: IProjectCategory
    projectDetails: IProjectDetails
}

export const defaultCreateProjectData: ICreateProjectData = {
    projectCategory: {
        projectName: '',
        templateName: 'Wedding template',
        projectType: 'Wedding'
    },
    projectDetails: {
        eventDate: '06/09/2022',
        guestCount: '150',
        budget: '25,000',
        country: 'USA',
        city: 'Brooklyn',
        state: 'NY',
        time: '7:00PM',
        duration: '12 Hrs'
    }
}