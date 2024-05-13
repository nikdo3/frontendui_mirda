import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export const FormItems = ({part}) => {
    const items = part?.items || []
    return (
        <Row>
            {items.map((item) => (
                <Row key={item.id} >
                    <Col>{item.name}:</Col>
                    <Col>{item.value}</Col>
                </Row>
            ))}
        </Row>
    )
}