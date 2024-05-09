/* eslint-disable react/prop-types */
import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export const RequestCard = ({request}) => {
    return (
        <div>
        <CardCapsule title="request">
            
            <Row>
                <Col>Jméno requestuáře:</Col>
                <Col>{request.name}</Col>
            </Row>
            <Row>
                <Col>Status</Col>
                <Col>{request.status}</Col>
            </Row>
            <Row>
                <Col>Části</Col>
                <Col>{request.sections.name}</Col>
            </Row>
            <Row>
                <Col>Jméno Části</Col>
                <Col>{request.sections.parts}</Col>
            </Row>
            <Row>
                <Col>Naposledy změněno</Col>
                <Col>{request.lastchange}</Col>
            </Row>
        </CardCapsule>
        </div>
    )
}