import { Dropdown } from "react-bootstrap";
import { CardCapsule } from "@hrbolek/uoisfrontend-shared/src";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


export const RequestHistoriesCard = ({ request,children,menu=true }) => { // eslint-disable-line react/prop-types
  return (
    <div>
      <CardCapsule title="Historie">
        <Row>
          <Col>Historie</Col>
          <Col>
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                {menu ? "Vyberte" : "Zobrazit"}
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Všechny</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Pouze změny</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Pouze komentáře</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
        </Row>
        <Row>
          <Col>Historie</Col>
          <Col>
            <p>tady bude histories</p>
          </Col>
        </Row>
      </CardCapsule>
    </div>
  );
}