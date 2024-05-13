import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { FormItems } from './FormItems'
// stránka z form načte pole se sekcemi a pro každou sekci vytvoří CardCapsule ve kterém bude název sekce

export const FormParts = ({section}) => {
    const parts = section?.parts || []
    return (
        <Row>
            {parts.map((part) => (
                    <FormItems key={part.id} part={part}/>
            ))}
        </Row>
    )
}