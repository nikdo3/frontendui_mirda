import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
// import { FormRolesCard } from './FormRolesCard'
import { FormRawCard } from './FormRawCard'
// import { FormMediumCard } from './FormMediumCard'

export const FormLargeCard = ({form, children}) => {
    return (
        <CardCapsule title={"Fromulář "}>
        {/* <Row>
            <Col md={3}>
                <FormMediumCard form={form}/>
            </Col>
            <Col md={6}>
                {children}
            </Col>
            <Col md={3}>
                <FormRolesCard form={form}/>
            </Col>
            
        </Row>
        <br /> */}
        <Row>
            <Col md = {3}>
                <FormCard form={form}/>
            </Col>
        </Row>
        <br />
        <Row>
            <Col md = {3}>
                <FormRawCard form={form}/>
            </Col>
        </Row>
    </CardCapsule>

    )
}
