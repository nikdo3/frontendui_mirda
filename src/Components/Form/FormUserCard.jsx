/* eslint-disable react/prop-types */
// import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { FetchUserByIdAsyncAction } from "../../Queries"
import { useFreshItem, CreateAsyncQueryValidator, useDispatch } from "@hrbolek/uoisfrontend-shared/src"

const validator = CreateAsyncQueryValidator({error: "Nepovedlo se načíst uživatele", success: "Načtení uživatele se povedlo"})
export const FormUserCard = ({value}) => {
    const id = "2d9dc5ca-a4a2-11ed-b9df-0242ac120003"
    const [onResolve, onReject] = validator(useDispatch())
    const [user, userPromise] = useFreshItem({id}, FetchUserByIdAsyncAction)
    userPromise.then(onResolve, onReject)
    if (user) {
        return (
            <div>
                <Row>
                    <Col>Jméno</Col>
                    <Col>{user.name}</Col>
                </Row>
                <Row>
                    <Col>Příjmení</Col>
                    <Col>{user.surname}</Col>
                </Row>
                <Row>
                    <Col>Email</Col>
                    <Col>{user.email}</Col>
                </Row>
            </div>
        )
    } else {
        return (
            <div>Loading...</div>
        )
    }
}
