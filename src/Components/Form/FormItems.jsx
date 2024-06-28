import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { FormUserCard } from './FormUserCard'

/**
 * Renders a list of form items based on the provided 'part' prop.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {Object} props.part - The part object containing the list of items.
 * @returns {JSX.Element} The rendered form items.
 */
export const FormItems = ({part}) => {
    const items = part?.items || []
    return (
        <Row>
            <Col>
            {items.map((item) => (
                <Row key={item.id} >
                    <Col>
                        {item.type?.name === 'student' ? (
                            <CardCapsule title="Identifikace" >
                                <FormUserCard value={/*item.value*/ "2d9dc5ca-a4a2-11ed-b9df-0242ac120003"} />
                            </CardCapsule>
                        ) : (
                            <CardCapsule title={item.name} >
                                <Row>
                                    <Col>{item.name}:</Col>
                                    <Col>{item.value}</Col>
                                </Row>
                            </CardCapsule>
                        )}
                    </Col>
                </Row>
            ))}
            </Col>
        </Row>
    )
}