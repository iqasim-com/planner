import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {
  initialMeetingMinutesState,
  RequiredParticipantsProps,
  ImportantDocuments,
  Agenda,
  PrevActionPoint,
  Discussions,
  FormFieldProps,
  MeetingMinutesProps,
} from './meetingMinutesModels'

const meetingMinutesSlice = createSlice({
  name: 'meetingMinutes',
  initialState: initialMeetingMinutesState,
  reducers: {
    addRequiredParticipants: (state, action: PayloadAction<RequiredParticipantsProps>) => {
      state.requiredParticipants.push(action.payload)
    },
    addOptionalParticipants: (state, action: PayloadAction<RequiredParticipantsProps>) => {
      state.optionalParticipants.push(action.payload)
    },
    deleteRequiredParticipant: (state, action: PayloadAction<number>) => {
      const id = action.payload
      const index = state.requiredParticipants.findIndex((participant) => participant.id === id)
      if (index !== -1) {
        state.requiredParticipants.splice(index, 1)
      }
    },
    deleteOptionalParticipant: (state, action: PayloadAction<number>) => {
      const id = action.payload
      const index = state.optionalParticipants.findIndex((participant) => participant.id === id)
      if (index !== -1) {
        state.optionalParticipants.splice(index, 1)
      }
    },
    addNewDocument: (state, action: PayloadAction<ImportantDocuments>) => {
      state.importantDoc.push(action.payload)
    },
    deleteDocument: (state, action: PayloadAction<number>) => {
      const id = action.payload
      const index = state.importantDoc.findIndex((document) => document.id === id)
      if (index !== -1) {
        state.importantDoc.splice(index, 1)
      }
    },
    addAgenda: (state, action: PayloadAction<Agenda>) => {
      state.agenda.push(action.payload)
    },
    addAgendaItem: (state, action: PayloadAction<Agenda>) => {
      const {id, description} = action.payload
      const index = state.agenda.findIndex((item) => item.id === id)
      state.agenda[index].description = description
    },
    deleteAgenda: (state, action: PayloadAction<number>) => {
      const id = action.payload
      const index = state.agenda.findIndex((agendaItem) => agendaItem.id === id)
      if (index !== -1) {
        state.agenda.splice(index, 1)
      }
    },
    addPreviouseAction: (state, action: PayloadAction<PrevActionPoint>) => {
      state.prevActionPoints.push(action.payload)
    },
    addPreviousActionPoint: (
      state,
      action: PayloadAction<{id: number; value: string; key: string}>
    ) => {
      const {id, key, value} = action.payload
      const index = state.prevActionPoints.findIndex((item) => item.id === id)
      if (index !== -1) {
        ;(state.prevActionPoints[index] as PrevActionPoint)[key] = value
      }
    },
    deletePreviousActionPoint: (state, action: PayloadAction<number>) => {
      const id = action.payload
      const index = state.prevActionPoints.findIndex((actionPoint) => actionPoint.id === id)
      if (index !== -1) {
        state.prevActionPoints.splice(index, 1)
      }
    },
    addDiscussion: (state, action: PayloadAction<Discussions>) => {
      state.discussions.push(action.payload)
    },
    addDiscussionItems: (
      state,
      action: PayloadAction<{id: number; value: string; key: string}>
    ) => {
      const {id, key, value} = action.payload
      const index = state.discussions.findIndex((item) => item.id === id)
      if (index !== -1) {
        ;(state.discussions[index] as Discussions)[key] = value
      }
    },
    deleteDiscussion: (state, action: PayloadAction<number>) => {
      const id = action.payload
      const index = state.discussions.findIndex((discussion) => discussion.id === id)
      if (index !== -1) {
        state.discussions.splice(index, 1)
      }
    },
    updateFormField: (state, action: PayloadAction<FormFieldProps>) => {
      const {field, value} = action.payload
      let prt = field.split('.')
      if (prt[0] === 'requiredParticipants' || prt[0] === 'optionalParticipants') {
        const index = parseInt(prt[1], 10)
        const ElementKey = prt[2]
        const key = prt[0] as keyof MeetingMinutesProps
        if (Array.isArray(value)) {
          ;(state[key][index] as RequiredParticipantsProps)[ElementKey] = value[0]
        } else {
          ;(state[key][index] as RequiredParticipantsProps)[ElementKey] = value
        }
      } else {
        state[field] = value as any
      }
    },
  },
})

export const {
  updateFormField,
  addRequiredParticipants,
  addOptionalParticipants,
  deleteOptionalParticipant,
  deleteRequiredParticipant,
  addNewDocument,
  deleteDocument,
  addAgenda,
  addAgendaItem,
  deleteAgenda,
  addPreviouseAction,
  addPreviousActionPoint,
  deletePreviousActionPoint,
  addDiscussionItems,
  addDiscussion,
  deleteDiscussion,
} = meetingMinutesSlice.actions
export default meetingMinutesSlice.reducer
