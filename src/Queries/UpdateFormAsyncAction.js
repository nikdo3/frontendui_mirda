import { CreateAsyncActionFromMutation } from "@hrbolek/uoisfrontend-shared/src"
const mutation =
`mutation MyMutation($id: UUID!, $lastchange: DateTime!, $name: String) {
  formPartUpdate(part: {id: $id, lastchange: $lastchange, name: $name}) {
    result:part {
      id
      created
      lastchange
      name
      items {
        value
        id
      }
    }
  }
}
`

export const RawUpdateFormAsyncAction = CreateAsyncActionFromMutation(mutation)