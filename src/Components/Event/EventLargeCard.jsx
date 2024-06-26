import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { EventRolesCard } from './EventRolesCard'
import { EventRawCard } from './EventRawCard'
import { EventMediumCard } from './EventMediumCard'

export const EventLargeCard = ({user, children}) => {
    return (
        <CardCapsule title={"Uživatel " + user?.fullname}>
        <Row>
            <Col md={3}>
                <EventMediumCard user={user}/>
            </Col>*
            <Col md={6}>
                {children}
            </Col>
            <Col md={3}>
                <EventRolesCard user={user}/>
            </Col>
            
        </Row>
        <br />
        <Row>
            <Col>
                <EventRawCard user={user}/>
            </Col>
        </Row>
    </CardCapsule>

    )
}
