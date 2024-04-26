import { useParams } from "react-router-dom"
import { UGSearch } from "../Components"

export const FormPageEdit = ()  => {
    const {phrase} = useParams()
    return (
        <UGSearch phrase={phrase}/>
    )

}