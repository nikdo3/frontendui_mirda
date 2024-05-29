import { useParams } from "react-router-dom"
import { useFreshItem, CreateAsyncQueryValidator, useDispatch } from "@hrbolek/uoisfrontend-shared/src"
import { FetchFormByIdAsyncAction } from "../Queries/FetchFormByIdAsyncAction"
// import { UGSearch } from "../Components"
import { FormEdit } from "../Components/Form"
import { FormEditLargeCard } from "../Components/Form/FormEditLargeCard"


const validator = CreateAsyncQueryValidator({error: "Nepovedlo se načíst formulář", success: "Načtení formuláře se povedlo"})
export const FormPageEdit = ()  => {
    const {id} = useParams()
    const [onResolve, onReject] = validator(useDispatch())
    const [form, userPromise] = useFreshItem({id}, FetchFormByIdAsyncAction)
    userPromise.then(onResolve, onReject)

    if (form) {             //      43dd2ff1-5c17-42a5-ba36-8b30e2a243bb            Form ID
        return (

            <FormEditLargeCard form={form} uuid={id} />
        )
    } else {
        return (
            <div>Nahrávám formuláře...</div>
        )
    }

}

