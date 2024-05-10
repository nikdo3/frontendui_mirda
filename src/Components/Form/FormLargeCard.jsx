import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
// import { FormRolesCard } from './FormRolesCard'
import { FormRawCard } from './FormRawCard'
import { FormCard } from './FormCard'
import { FormSections } from './FormSections'
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
           <Col md = {3}> {/* basic info */}
                <FormCard form={form}/>
            </Col>

            <Col md = {4}>{/* section */}
                <FormSections form={form}/>
            </Col>

            <Col md = {2}>{/* part */}
                <p>tady bude part</p>
                {/* <FormPartCard form={form}/> */}
                
            </Col>

            <Col md = {2}>{/* item */}
                <p>tady bude item</p>
                {/* <FormItemCard form={form}/> */}
                
            </Col>
        </Row>
        <Row>
            <Col>{/* raw */}
                <FormRawCard form={form}/>
            </Col>
        </Row>
    </CardCapsule>

    )
}
