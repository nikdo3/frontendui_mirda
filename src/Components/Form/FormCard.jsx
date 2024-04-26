/* eslint-disable react/prop-types */
import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export const FormCard = ({form}) => {
    return (
        <div>
        <CardCapsule title="form">
            
            <Row>
                <Col>ID</Col>
                <Col>{form.id}</Col>
            </Row>
            <Row>
                <Col>Název</Col>
                <Col>{form.name}</Col>
            </Row>
            <Row>
                
                <Col></Col>
            </Row>
        </CardCapsule>
        </div>
    )
}