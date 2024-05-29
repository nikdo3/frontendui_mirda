import { Dropdown } from "react-bootstrap";
import { FormSections } from "./FormSections";
import { useFreshItem, CreateAsyncQueryValidator, useDispatch } from "@hrbolek/uoisfrontend-shared/src";
import { FetchFormByIdAsyncAction } from "../../Queries";

const validator = CreateAsyncQueryValidator({error: "Nepovedlo se načíst Formulář", success: "Načtení formuláře se povedlo"})
/**
 * Renders a form card based on the provided form ID.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {string} props.Forid - The ID of the form.
 * @returns {JSX.Element} The rendered form card.
 */
export const RequestFormCard = ({ Forid }) => {
    const Formid = Forid
    const [onResolve, onReject] = validator(useDispatch())
    const [form, formPromise] = useFreshItem({id: Formid}, FetchFormByIdAsyncAction) // Add the required variable "id" with the value of "Formid"
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

