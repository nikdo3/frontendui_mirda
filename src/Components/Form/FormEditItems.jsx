import { CardCapsule, EditableAttributeText, EditableAttributeSelect } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { FormEditUserCard } from './FormEditUserCard'
import { RawUpdateFormAsyncAction} from '../../Queries/UpdateFormAsyncAction'
import { FetchFormByIdAsyncAction } from '../../Queries/FetchFormByIdAsyncAction'



const UpdateAndReloadForm = (form) => (formitem) => async (dispatch) => {
    const result = await dispatch(RawUpdateFormAsyncAction(formitem))
    const formdata = await dispatch(FetchFormByIdAsyncAction(form))
    return result
}

/**
 * Renders a list of form items based on the provided 'part' prop.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {Object} props.part - The part object containing the list of items.
 * @returns {JSX.Element} The rendered form items.
 */
export const FormEditItems = ({part, form}) => {
    const items = part?.items || []
    return (
        <Row>
            {items.map((item) => (
                <Row key={item.id} >
                    
                    {item.type?.name === 'student' ? (
                        <CardCapsule title="Identifikace" >
                            <FormEditUserCard value={/*item.value*/ "2d9dc5ca-a4a2-11ed-b9df-0242ac120003"} />
                        </CardCapsule>
                    ) : (
                        <CardCapsule title={item.name} >
                            <Row>
                                <Col>{item.name}:</Col>
                                <EditableAttributeText item={item} attributeName="value" label="Obsah" asyncUpdater={UpdateAndReloadForm(form)} />
                            </Row>
                        </CardCapsule>
                    )}
                </Row>
            ))}
        </Row>
    )
}