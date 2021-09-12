/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createNote = /* GraphQL */ `
  mutation CreateNote(
    $input: CreateNoteInput!
    $condition: ModelNoteConditionInput
  ) {
    createNote(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const updateNote = /* GraphQL */ `
  mutation UpdateNote(
    $input: UpdateNoteInput!
    $condition: ModelNoteConditionInput
  ) {
    updateNote(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const deleteNote = /* GraphQL */ `
  mutation DeleteNote(
    $input: DeleteNoteInput!
    $condition: ModelNoteConditionInput
  ) {
    deleteNote(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const createGroupSchedule = /* GraphQL */ `
  mutation CreateGroupSchedule(
    $input: CreateGroupScheduleInput!
    $condition: ModelGroupScheduleConditionInput
  ) {
    createGroupSchedule(input: $input, condition: $condition) {
      id
      name
      description
      isWeekend
      individualSchedules {
        items {
          id
          user
          groupScheduleID
          comments
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateGroupSchedule = /* GraphQL */ `
  mutation UpdateGroupSchedule(
    $input: UpdateGroupScheduleInput!
    $condition: ModelGroupScheduleConditionInput
  ) {
    updateGroupSchedule(input: $input, condition: $condition) {
      id
      name
      description
      isWeekend
      individualSchedules {
        items {
          id
          user
          groupScheduleID
          comments
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteGroupSchedule = /* GraphQL */ `
  mutation DeleteGroupSchedule(
    $input: DeleteGroupScheduleInput!
    $condition: ModelGroupScheduleConditionInput
  ) {
    deleteGroupSchedule(input: $input, condition: $condition) {
      id
      name
      description
      isWeekend
      individualSchedules {
        items {
          id
          user
          groupScheduleID
          comments
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createIndividualSchedule = /* GraphQL */ `
  mutation CreateIndividualSchedule(
    $input: CreateIndividualScheduleInput!
    $condition: ModelIndividualScheduleConditionInput
  ) {
    createIndividualSchedule(input: $input, condition: $condition) {
      id
      user
      groupScheduleID
      comments
      createdAt
      updatedAt
    }
  }
`;
export const updateIndividualSchedule = /* GraphQL */ `
  mutation UpdateIndividualSchedule(
    $input: UpdateIndividualScheduleInput!
    $condition: ModelIndividualScheduleConditionInput
  ) {
    updateIndividualSchedule(input: $input, condition: $condition) {
      id
      user
      groupScheduleID
      comments
      createdAt
      updatedAt
    }
  }
`;
export const deleteIndividualSchedule = /* GraphQL */ `
  mutation DeleteIndividualSchedule(
    $input: DeleteIndividualScheduleInput!
    $condition: ModelIndividualScheduleConditionInput
  ) {
    deleteIndividualSchedule(input: $input, condition: $condition) {
      id
      user
      groupScheduleID
      comments
      createdAt
      updatedAt
    }
  }
`;
