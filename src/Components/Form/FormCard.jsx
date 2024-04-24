/* eslint-disable react/prop-types */
import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export const FormCard = ({form}) => {
    return (
        <div>
        <CardCapsule title="form">
            
            <Row>
                <Col>Jméno</Col>
                <Col>{form.name}</Col>
            </Row>
            <Row>
                <Col>Příjmení</Col>
                <Col>{form.surname}</Col>
            </Row>
            <Row>
                <Col>
                    <button className='btn btn-success'>click</button>
                </Col>
                <Col></Col>
            </Row>
        </CardCapsule>
        </div>
    )
}