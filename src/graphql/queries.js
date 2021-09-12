/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getNote = /* GraphQL */ `
  query GetNote($id: ID!) {
    getNote(id: $id) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const listNotes = /* GraphQL */ `
  query ListNotes(
    $filter: ModelNoteFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listNotes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getGroupSchedule = /* GraphQL */ `
  query GetGroupSchedule($id: ID!) {
    getGroupSchedule(id: $id) {
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
export const listGroupSchedules = /* GraphQL */ `
  query ListGroupSchedules(
    $filter: ModelGroupScheduleFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listGroupSchedules(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        isWeekend
        individualSchedules {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getIndividualSchedule = /* GraphQL */ `
  query GetIndividualSchedule($id: ID!) {
    getIndividualSchedule(id: $id) {
      id
      user
      groupScheduleID
      comments
      createdAt
      updatedAt
    }
  }
`;
export const listIndividualSchedules = /* GraphQL */ `
  query ListIndividualSchedules(
    $filter: ModelIndividualScheduleFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listIndividualSchedules(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
  }
`;
