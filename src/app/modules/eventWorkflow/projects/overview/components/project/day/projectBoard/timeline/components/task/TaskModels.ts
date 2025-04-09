export interface IUpdateTask {
    deadlineTime: string
    title: string
    subTitle: string
    description: string
    startDate: string
    completionDate: string
    phase: string
    creator: string 
    assignees: string
    viewers: string
  }


  export const updateTask: IUpdateTask = {
    deadlineTime: '8:42PM',
    title: 'Outlines keep you honest. And keep structure',
    subTitle: 'Atica Banking',
    description: 'CRM App application to HR efficiency',
    startDate: 'Mar 14, 2021',
    completionDate: 'Mar 14, 2021',
    phase: 'Getting Started',
    creator: 'Asley',
    assignees: 'Asley, Paul, Janet',
    viewers: 'Asley, Paul, Janet',
  }