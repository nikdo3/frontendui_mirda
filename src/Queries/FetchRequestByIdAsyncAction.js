import { CreateAsyncActionFromQuery } from "@hrbolek/uoisfrontend-shared/src"

const query = `query ($id: UUID!) {
  result: requestById(id: $id) {
    __typename
    created
    nameEn
    id
    name
    lastchange
    histories {
      created
      id
      lastchange
      form {
        id
      }
      changedby {
        id
        fullname
      }
    }
  }
}`

export const FetchRequestByIdAsyncAction = CreateAsyncActionFromQuery(query)