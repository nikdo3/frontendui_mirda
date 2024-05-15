import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { FormUserCard } from './FormUserCard'

export const FormItems = ({part}) => {
    const items = part?.items || []
    return (
        <Row>
            {items.map((item) => (
                <Row key={item.id} >
                    
                    {item.type?.name === 'student' ? (
                        <FormUserCard value={item.value} />
                    ) : (
                        <>
                            <Col>{item.name}:</Col>
                            <Col>{item.value}</Col>
                        </>
                    )}
                </Row>
            ))}
        </Row>
    )
}