import { Dropdown } from "react-bootstrap";
import { FormSections } from "./FormSections";
import { useFreshItem, CreateAsyncQueryValidator, useDispatch } from "@hrbolek/uoisfrontend-shared/src";
import { FetchFormByIdAsyncAction } from "../../Queries";

const validator = CreateAsyncQueryValidator({error: "Nepovedlo se načíst Formulář", success: "Načtení formuláře se povedlo"})
export const RequestFormCard = ({ Forid }) => {
    const Formid = Forid
    const [onResolve, onReject] = validator(useDispatch())
    const [form, formPromise] = useFreshItem({Formid}, FetchFormByIdAsyncAction)
    formPromise.then(onResolve, onReject)
    
    if (form) {
        return (
            <FormSections form={form} />
        )
    } else {
        return (
            <div>Loading...</div>
        )
    }
}

