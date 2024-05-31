import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { FormEditItems } from './FormEditItems'
// stránka z form načte pole se sekcemi a pro každou sekci vytvoří CardCapsule ve kterém bude název sekce

/**
 * Renders the form parts for a given section.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {Object} props.section - The section object.
 * @param {string} props.section.name - The name of the section.
 * @param {Array} props.section.parts - The array of parts for the section.
 * @returns {JSX.Element} The rendered component.
 */
export const FormEditParts = ({section, form}) => {
    const parts = section?.parts || []
    return (
        <CardCapsule title={section.name}>
            <Row>
                {parts.map((part) => (
                        <FormEditItems key={part.id} part={part} form={form}/>
                ))}
            </Row>
        </CardCapsule>
    )
}