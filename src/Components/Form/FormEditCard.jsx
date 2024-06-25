import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { SectionEditCard } from './SectionEditCard'
import { ProxyLink } from '@hrbolek/uoisfrontend-shared/src'

// stránka z form načte pole se sekcemi a pro každou sekci vytvoří CardCapsule ve kterém bude název sekce

/**
 * Renders the form sections.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {Object} props.form - The form object.
 * @returns {JSX.Element} The rendered component.
 */
export const FormEditCard = ({form, typ}) => {
    const sections = form?.sections || []
    return (
        <CardCapsule title={<div>
            <span>Formulář </span>
            <span><ProxyLink to={"/" + typ + "/edit/" + form.id}>{form?.name}</ProxyLink></span>
            </div>}>
            {sections.map((section, index) => (
                <Row key={section.id}>
                    <Col  md={12}>
                        <SectionEditCard section={section} form={form}/>
                    </Col>
                </Row>
            ))}
        
        </CardCapsule>
    )
}

