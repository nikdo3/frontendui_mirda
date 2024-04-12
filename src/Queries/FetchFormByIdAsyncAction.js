import { CreateAsyncActionFromQuery } from "@hrbolek/uoisfrontend-shared/src"

const query = `query ($id: UUID!) {
  result: formById(id: $id) {
    id
    name
    changedby {
      id
      name
    }
    lastchange
    created
    createdby {
      id
      name
    }
    nameEn
    rbacobject {
      id
      roles {
        valid
        group {
          id
          name
        }
        roletype {
          id
          name
        }
      }
    }
    valid
    status
    sections {
      id
      name
    }
    creator {
      id
      name
    }
    type {
      id
      name
    }
  }
}`

export const FetchFormByIdAsyncAction = CreateAsyncActionFromQuery(query)