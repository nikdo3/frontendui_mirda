import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
// import { FormRolesCard } from './FormRolesCard'
import { FormRawCard } from './FormRawCard'
import { FormCard } from './FormCard'
import { FormSections } from './FormSections'
// import { FormMediumCard } from './FormMediumCard'
import { ProxyLink } from '@hrbolek/uoisfrontend-shared/src'

export const FormLargeCard = ({form, children}) => {
    return (
        <CardCapsule title={<div>
            <span>Formulář </span>
            <span><ProxyLink to={"/form/view/190d578c-afb1-11ed-9bd8-0242ac110002"}>Žádost</ProxyLink></span>

        </div>}>
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

            <Col md = {9}>{/* section */}
                <FormSections form={form}/>
            </Col>
        </Row>
            <Col>{/* raw */}
                <FormRawCard form={form}/>
            </Col>

    </CardCapsule>

    )
}
