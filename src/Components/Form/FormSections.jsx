import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { FormParts } from './FormParts'

// stránka z form načte pole se sekcemi a pro každou sekci vytvoří CardCapsule ve kterém bude název sekce

export const FormSections = ({form}) => {
    const sections = form?.sections || []
    return (
        <CardCapsule title={"Formulář " + form?.name} >
            <Row>
                {sections.map((section, index) => (
                    <Col key={section.id} md={6}>
                        <CardCapsule title={section.name}>
                            <FormParts section={section} />
                        </CardCapsule>
                    </Col>
                ))}

            </Row>
        </CardCapsule>
    )
}

