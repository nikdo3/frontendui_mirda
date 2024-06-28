/* eslint-disable react/prop-types */
import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { FormLink } from './FormLink'
import { ProxyLink } from '@hrbolek/uoisfrontend-shared/src'


/**
 * Renders a form card component.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {Object} props.form - The form object.
 * @param {string} props.uuid - The UUID of the form.
 * @param {ReactNode} props.children - The child components.
 * @returns {JSX.Element} The form card component.
 */
export const FormCard = ({form, children}) => {
    return (
        <div>
        <CardCapsule title={<div>
            <span>Formulář </span>
            <span><FormLink form={form} text={"Žádost"}/></span>

        </div>}>
            
            <Row>
                <Col>Patří k požadavku:</Col>
                <Col><ProxyLink to={"/request/view/13181566-afb0-11ed-9bd8-0242ac110002"}>Žádost o přerušení studia</ProxyLink></Col>
            </Row>
            <Row>
                <Col>Poslední změna:</Col>
                <Col>{Date(form?.lastchange).toLocaleString()}</Col>
            </Row>
           
            <Row>
                <Col>Typ:</Col>
                <Col>{form?.type?.name}</Col>
            </Row>
        </CardCapsule>
        </div>
    )
}