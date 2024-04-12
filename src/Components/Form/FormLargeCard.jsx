import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { FormRolesCard } from './FormRolesCard'
import { FormRawCard } from './FormRawCard'
import { FormMediumCard } from './FormMediumCard'

export const FormLargeCard = ({user, children}) => {
    return (
        <CardCapsule title={"Uživatel " + user?.fullname}>
        <Row>
            <Col md={3}>
                <FormMediumCard user={user}/>
            </Col>*
            <Col md={6}>
                {children}
            </Col>
            <Col md={3}>
                <FormRolesCard user={user}/>
            </Col>
            
        </Row>
        <br />
        <Row>
            <Col>
                <FormRawCard user={user}/>
            </Col>
        </Row>
    </CardCapsule>

    )
}
