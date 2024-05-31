import { CreateAsyncActionFromQuery } from "@hrbolek/uoisfrontend-shared/src"

const query = `query ($id: UUID!) {
  result: formById(id: $id) {
    __typename
    id
    name
    changedby {
      id
      name
    }
    lastchange
    created
    nameEn
    valid
    status
    sections {
      id
      name
      parts {
        name
        items {
          value
          name
          id
          lastchange
          type {
            name
            id
          }
        }
        id
      }
    }
    type {
      id
      name
    }
  }
}`

export const FetchFormByIdAsyncAction = CreateAsyncActionFromQuery(query)