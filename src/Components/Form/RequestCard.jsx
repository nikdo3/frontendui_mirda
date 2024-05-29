/* eslint-disable react/prop-types */
import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

/**
 * Renders a card component for displaying request information.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {Object} props.request - The request object containing request information.
 * @returns {JSX.Element} The rendered card component.
 */
export const RequestCard = ({request}) => {
    return (
        <div>
        <CardCapsule title="Žádost">
            
            <Row>
                <Col>Jméno requestuáře:</Col>
                <Col>{request?.name}</Col>
            </Row>
            <Row>
                <Col>Name of requestory</Col>
                <Col>{request?.nameEn}</Col>
            </Row>
            <Row>
                <Col>Vytvořeno</Col>
                <Col>{request?.created}</Col>
            </Row>
            <Row>
                <Col>Naposledy změněno</Col>
                <Col>{request?.lastchange}</Col>
            </Row>
        </CardCapsule>
        </div>
    )
}