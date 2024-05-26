import { Dropdown } from "react-bootstrap";
import { CardCapsule } from "@hrbolek/uoisfrontend-shared/src";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FormParts } from "./FormParts";



export const RequestFormCard = ({ form,children}) => {
    const sections = form?.sections || [] 
  return (
    <CardCapsule title={"Formulář " + form?.name}>
        {sections.map((section, index) => (
            <Row>
                <Col key={section.id} md={12}>
                    <FormParts section={section}/>
                </Col>
            </Row>
        ))}
    
    </CardCapsule>
)
}

