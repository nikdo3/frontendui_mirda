import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
// import { RequestRolesCard } from './RequestRolesCard'
import { RequestRawCard } from './RequestRawCard'
// import { RequestCard } from './RequestCard'
// import { RequestMediumCard } from './RequestMediumCard'

export const RequestLargeCard = ({request}) => {
    return (
        <CardCapsule title={"Žádost "}>
        {/* <Row>
            <Col md={3}>
                <RequestMediumCard request={request}/>
            </Col>
            <Col md={6}>
                {children}
            </Col>
            <Col md={3}>
                <RequestRolesCard request={request}/>
            </Col>
            
        </Row>
        <br /> */}
        <Row>
           <Col md = {3}> {/* basic info */}
                {/* <RequestCard request={request}/> */}
                <p>tady bude basic info</p>
            </Col>
                
            <Col md = {3}>{/* section */}
                <p>tady bude section</p>
            </Col>

            <Col md = {3}>{/* part */}
                <p>tady bude part</p>
            </Col>

            <Col md = {3}>{/* item */}
                <p>tady bude item</p>
            </Col>
        </Row>
        <Row>
            <Col>{/* raw */}
                <RequestRawCard request={request}/>
            </Col>
        </Row>
    </CardCapsule>

    )
}
