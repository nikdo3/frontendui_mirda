import { CreateAsyncActionFromMutation } from "@hrbolek/uoisfrontend-shared/src"
const mutation =
`mutation ($id: UUID!, $lastchange: DateTime!, $name: String) {
  result: formPartUpdate(part: {lastchange: $lastchange, name: $name, id: $id}) {
    result: part {
      id
      lastchange
      name
    }
  }
}
`

export const RawUpdateFormAsyncAction = CreateAsyncActionFromMutation(mutation)