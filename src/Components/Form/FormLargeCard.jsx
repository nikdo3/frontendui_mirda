import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { FormRawCard } from './FormRawCard'

export const FormLargeCard = ({form}) => {
    return (
        <CardCapsule title={"Fromular"}>
        {/* <Row>
            <Col md={3}>
                <FormMediumCard form={form}/>
            </Col>*
            <Col md={6}>
                {children}
            </Col>
            <Col md={3}>
                <FormRolesCard form={form}/>
            </Col>
            
        </Row>
        <br /> */}
        <Row>
            <Col>
                <FormRawCard form={form}/>
            </Col>
        </Row>
    </CardCapsule>

    )
}
