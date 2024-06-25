import { Dropdown } from "react-bootstrap";
import { CardCapsule } from "@hrbolek/uoisfrontend-shared/src";
import { ProxyLink } from '@hrbolek/uoisfrontend-shared/src'

/**
 * Renders a card component displaying the request histories.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {Object} props.request - The request object.
 * @param {ReactNode} props.children - The child components.
 * @param {Object} props.table - The table object.
 * @returns {JSX.Element} The rendered component.
 */
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
                <td>{Date(requesty.created).toLocaleString()}</td>
                <td>{requesty.changedby?.fullname}</td>
                <td>{requesty.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
       

        
      </CardCapsule>
    </div>
  );
}