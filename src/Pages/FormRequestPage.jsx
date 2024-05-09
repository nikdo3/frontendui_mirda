// import { useFreshItem } from "@hrbolek/uoisfrontend-shared/src"
import { useParams } from "react-router-dom"
import { RequestLargeCard } from "../Components"
import { useFreshItem, CreateAsyncQueryValidator, useDispatch } from "@hrbolek/uoisfrontend-shared/src"
import { FetchRequestByIdAsyncAction } from "../Queries"

const validator = CreateAsyncQueryValidator({error: "Nepovedlo se načíst uživatele", success: "Načtení uživatele se povedlo"})
export const FormRequestPage = ()  => {
    const {id} = useParams()
    const [onResolve, onReject] = validator(useDispatch())
    const [request, requestPromise] = useFreshItem({id}, FetchRequestByIdAsyncAction)
    requestPromise.then(onResolve, onReject)

    if (request) {
        return (
            <RequestLargeCard request={request} />
        )
    } else {
        return (
            <div>Loading...</div>
        )
    }
    
}