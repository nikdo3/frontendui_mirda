import { Dropdown } from "react-bootstrap";
import { CardCapsule } from "@hrbolek/uoisfrontend-shared/src";
import { ProxyLink } from '@hrbolek/uoisfrontend-shared/src'

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
                <td><ProxyLink to={"/form/view/" + requesty.form?.id}>{index + 1}</ProxyLink></td>
                <td>{requesty.created}</td>
                <td>{requesty.changedby?.fullname}</td>
                <td>{}</td>
              </tr>
            ))}
          </tbody>
        </table>
       

        
      </CardCapsule>
    </div>
  );
}