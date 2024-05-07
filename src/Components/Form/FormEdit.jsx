/* eslint-disable react/prop-types */
import { CardCapsule, EditableAttributeText, EditableAttributeSelect } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { RawUpdateFormAsyncAction} from '../../Queries/UpdateFormAsyncAction'
// import { FormEditType } from './FormEditType'


export const FormEditCard = ({form}) => {
    return (
        <CardCapsule title={"Fromulář " + form?.name + " - atributy"}>
            <Row>
                <Col>
                    <EditableAttributeText item={form} attributeName="name" label="Název" asyncUpdater={RawUpdateFormAsyncAction} />
                </Col>
            </Row>
            {/* <Row>
                <Col>
                    <FormEditType form={form} />   
                </Col>      
            </Row> */}
            <Row>
                <Col>
                    <EditableAttributeText item={form} attributeName="startdate" label="Datum zahajeni" asyncUpdater={RawUpdateFormAsyncAction} type="datetime-local" />
                </Col>      
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={form} attributeName="enddate" label="Datum ukonceni" asyncUpdater={RawUpdateFormAsyncAction} type="datetime-local" />
                </Col>      
            </Row>
            
        </CardCapsule>
    );
};