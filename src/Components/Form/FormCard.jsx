/* eslint-disable react/prop-types */
import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export const FormCard = ({form}) => {
    return (
        <div>
        <CardCapsule title="form">
            
            <Row>
                <Col>Jméno formuáře:</Col>
                <Col>{form?.name}</Col>
            </Row>
            <Row>
                <Col>Poslední změna:</Col>
                <Col>{form?.lastchange}</Col>
            </Row>
            <Row>
                <Col>Sekce:</Col>
                <Col>{form?.sections?.name}</Col>
            </Row>
            <Row>
                <Col>Jméno části:</Col>
                <Col>{form?.sections?.parts?.name}</Col>
            </Row>
            <Row>
                <Col>Typ:</Col>
                <Col>{form?.type?.name}</Col>
            </Row>
        </CardCapsule>
        </div>
    )
}