// import { useFreshItem } from "@hrbolek/uoisfrontend-shared/src"
import { useParams } from "react-router-dom"
import { FormLargeCard } from "../Components"
import { useFreshItem, CreateAsyncQueryValidator, useDispatch } from "@hrbolek/uoisfrontend-shared/src"
import { FetchFormByIdAsyncAction } from "../Queries"

const validator = CreateAsyncQueryValidator({error: "Nepovedlo se načíst uživatele", success: "Načtení uživatele se povedlo"})
export const FormPageRequest = ()  => {
    const {id} = useParams()
    const [onResolve, onReject] = validator(useDispatch())
    const [form, formPromise] = useFreshItem({id}, FetchFormByIdAsyncAction)
    formPromise.then(onResolve, onReject)

    if (form) {
        return (
            <FormLargeCard form={form} />
        )
    } else {
        return (
            <div>Loading...</div>
        )
    }
    
}