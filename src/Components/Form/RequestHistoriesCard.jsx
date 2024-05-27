import { Dropdown } from "react-bootstrap";
import { CardCapsule } from "@hrbolek/uoisfrontend-shared/src";





export const RequestHistoriesCard = ({ request,children, table}) => { // eslint-disable-line react/prop-types
  return (
    <div>
      <CardCapsule title="Historie">
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Datum</th>
              <th>Kdo</th>
              <th>Poznámka</th>
            </tr>
          </thead>
          <tbody>
            {request?.histories?.map((requesty, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{request?.created}</td>
                <td>{"c"}</td>
                <td>{"d"}</td>
              </tr>
            ))}
          </tbody>
        </table>
       

        
      </CardCapsule>
    </div>
  );
}