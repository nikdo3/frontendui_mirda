/* eslint-disable react/prop-types */
import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {ProxyLink} from '@hrbolek/uoisfrontend-shared/src'


export const FormCard = ({form, uuid, children}) => {
    return (
        <div>
        <CardCapsule title={<div>
            <span>Formulář </span>
            <span><ProxyLink to={"/form/view/" + uuid}>Žádost</ProxyLink></span>

        </div>}>
            
            <Row>
                <Col>Patří k požadavku:</Col>
                <ProxyLink to={"/request/view/13181566-afb0-11ed-9bd8-0242ac110002"}>Žádost o přerušení studia</ProxyLink>
            </Row>
            <Row>
                <Col>Poslední změna:</Col>
                <Col>{form?.lastchange}</Col>
            </Row>
            <Row>
                <Col>Sekce:</Col>
                <Col>{form?.sections?.name}</Col>
            </Row>
            <Row>
                <Col>Jméno části:</Col>
                <Col>{form?.sections?.parts?.name}</Col>
            </Row>
            <Row>
                <Col>Typ:</Col>
                <Col>{form?.type?.name}</Col>
            </Row>
        </CardCapsule>
        </div>
    )
}