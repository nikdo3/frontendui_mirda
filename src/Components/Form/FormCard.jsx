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
                <Col>{form.name}</Col>
            </Row>
            <Row>
                <Col>Status</Col>
                <Col>{form.status}</Col>
            </Row>
            <Row>
                <Col>Části</Col>
                <Col>{form.sections.name}</Col>
            </Row>
            <Row>
                <Col>Jméno Části</Col>
                <Col>{form.sections.parts.name}</Col>
            </Row>
            <Row>
                <Col>Naposledy změněno</Col>
                <Col>{form.lastchange}</Col>
            </Row>
        </CardCapsule>
        </div>
    )
}