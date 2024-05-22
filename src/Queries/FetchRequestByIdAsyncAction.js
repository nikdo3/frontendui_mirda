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
    }
  }
}`

export const FetchRequestByIdAsyncAction = CreateAsyncActionFromQuery(query)