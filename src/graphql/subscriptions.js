/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateNote = /* GraphQL */ `
  subscription OnCreateNote {
    onCreateNote {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateNote = /* GraphQL */ `
  subscription OnUpdateNote {
    onUpdateNote {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteNote = /* GraphQL */ `
  subscription OnDeleteNote {
    onDeleteNote {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const onCreateGroupSchedule = /* GraphQL */ `
  subscription OnCreateGroupSchedule {
    onCreateGroupSchedule {
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
export const onUpdateGroupSchedule = /* GraphQL */ `
  subscription OnUpdateGroupSchedule {
    onUpdateGroupSchedule {
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
export const onDeleteGroupSchedule = /* GraphQL */ `
  subscription OnDeleteGroupSchedule {
    onDeleteGroupSchedule {
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
export const onCreateIndividualSchedule = /* GraphQL */ `
  subscription OnCreateIndividualSchedule {
    onCreateIndividualSchedule {
      id
      user
      groupScheduleID
      comments
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateIndividualSchedule = /* GraphQL */ `
  subscription OnUpdateIndividualSchedule {
    onUpdateIndividualSchedule {
      id
      user
      groupScheduleID
      comments
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteIndividualSchedule = /* GraphQL */ `
  subscription OnDeleteIndividualSchedule {
    onDeleteIndividualSchedule {
      id
      user
      groupScheduleID
      comments
      createdAt
      updatedAt
    }
  }
`;
