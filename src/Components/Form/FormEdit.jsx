/* eslint-disable react/prop-types */
import { CardCapsule, EditableAttributeText, EditableAttributeSelect } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { RawUpdateFormAsyncAction} from '../../Queries/UpdateFormAsyncAction'
// import { FormEditType } from './FormEditType'


/**
 * Renders a form for editing a specific form.
 * 
 * @component
 * @param {Object} props - The component props.
 * @param {Object} props.form - The form object to be edited.
 * @returns {JSX.Element} The rendered component.
 */
export const 
FormEdit = ({form}) => {
    return (
        <CardCapsule title={"Formulář " + form?.name + " - atributy"}>
            <Row>
                <Col>
                    <EditableAttributeText item={form} attributeName="name" label="Název" asyncUpdater={RawUpdateFormAsyncAction} />
                </Col>
            </Row>
            {/* <Row>
                <Col>
                    <FormSectionsEdit form={form} />   
                </Col>      
            </Row> */}
            
        </CardCapsule>
    );
};