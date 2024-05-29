import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
// import { FormRolesCard } from './FormRolesCard'
import { FormEditRawCard } from './FormEditRawCard'
import { FormEditCard } from './FormEditCard'
import { FormEditSections } from './FormEditSections'
// import { FormMediumCard } from './FormMediumCard'
import { ProxyLink } from '@hrbolek/uoisfrontend-shared/src'

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
export const FormEditLargeCard = ({form, uuid, children}) => {
    return (
        <CardCapsule title={<div>
            <span>Formulář </span>
            <span><ProxyLink to={"/form/edit/" + uuid}>Žádost</ProxyLink></span>

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
                <FormEditCard form={form} uuid={uuid}/>
            </Col>

            <Col md = {9}>{/* section */}
                <FormEditSections form={form}/>
            </Col>
        </Row>
            <Col>{/* raw */}
                <FormEditRawCard form={form}/>
            </Col>

    </CardCapsule>

    )
}
