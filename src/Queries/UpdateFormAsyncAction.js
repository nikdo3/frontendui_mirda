import { CreateAsyncActionFromMutation } from "@hrbolek/uoisfrontend-shared/src"
const mutation =
`mutation ($id: UUID!, $lastchange: DateTime!, $value: String) {
  result: formItemUpdate(item: {lastchange: $lastchange, value: $value, id: $id}) {
    id
    msg
    result: item {
      name
      value
      lastchange
    }
  }
}
`

export const RawUpdateFormAsyncAction = CreateAsyncActionFromMutation(mutation)