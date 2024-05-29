import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
// import { RequestRolesCard } from './RequestRolesCard'
import { RequestRawCard } from './RequestRawCard'
import { RequestCard } from './RequestCard'
// import { RequestCard } from './RequestCard'
// import { RequestMediumCard } from './RequestMediumCard'
import { RequestHistoriesCard } from './RequestHistoriesCard'
import { RequestFormCard } from './RequestFormCard'


export const RequestLargeCard = ({request,children}) => {
    const sortedHistories = [...request.histories].sort((a,b) => new Date(b.created) - new Date(a.created));
    return (
        <CardCapsule title={"Žádost  "}>
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
           <Col md = {4}> {/* basic info */}
                {/* <RequestCard request={request}/> */}
                <RequestCard request={request}/>
        
                <RequestHistoriesCard request={request} menu={true}></RequestHistoriesCard>
            </Col>

            <Col md = {3}>{/* form */}
                <span>Formulář</span>
                <p>{sortedHistories[sortedHistories.length - 1].form?.id}</p>
                <RequestFormCard Forid={sortedHistories[sortedHistories.length - 1].form?.id}></RequestFormCard>
            </Col>
        </Row>
        <br />
        <Row>
            <Col>{/* raw */}

                <RequestRawCard request={request}/>
                
            </Col>
        </Row>
    </CardCapsule>

    )
}
