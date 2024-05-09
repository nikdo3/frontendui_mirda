import { CreateAsyncActionFromQuery } from "@hrbolek/uoisfrontend-shared/src"

const query = `query MyQuery($id: UUID!) {
  requestById(id: $id) {
    created
    id
    name
    histories {
      created
      id
      lastchange
    }
  }
}`

export const FetchRequestByIdAsyncAction = CreateAsyncActionFromQuery(query)