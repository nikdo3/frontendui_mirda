import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { FormParts } from './FormParts'

// stránka z form načte pole se sekcemi a pro každou sekci vytvoří CardCapsule ve kterém bude název sekce

export const FormSections = ({form}) => {
    const sections = form?.sections || []
    return (
        <Row>
            {sections.map((section, index) => (
                <Col key={section.id} xs={12} sm={6} md={4} lg={3}>
                    <CardCapsule title={section.name}>
                        <FormParts section={section} />
                    </CardCapsule>
                </Col>
            ))}
        </Row>
    )
}

