import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
// import { FormRolesCard } from './FormRolesCard'
import { FormEditRawCard } from './FormEditRawCard'
import { FormHistoryCard } from './FormHistoryCard'
import { FormEditCard } from './FormEditCard'
// import { FormMediumCard } from './FormMediumCard'
import { FormLink } from './FormLink'

/**
 * Renders a large card component for a form.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {Object} props.form - The form object.
 * @param {string} props.uuid - The UUID of the form.
 * @param {ReactNode} props.children - The child components.
 * @returns {JSX.Element} The rendered large card component.
 */
export const FormEditLargeCard = ({form, children}) => {
    return (
        <CardCapsule title={<div>
            <span>Formulář </span>
            <span><FormLink form={form} text={"Žádost"}/></span>

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
                <FormHistoryCard form={form}/>
            </Col>

            <Col md = {9}>{/* section */}
                <FormEditCard form={form} typ={"form"} action={"edit"}/>
            </Col>
        </Row>
        <Row>
            <Col>{/* raw */}
                <FormEditRawCard form={form}/>
            </Col>
        </Row>
    </CardCapsule>

    )
}
