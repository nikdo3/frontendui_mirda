/* eslint-disable react/prop-types */
import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'
import { JsonView, allExpanded, defaultStyles } from 'react-json-view-lite';
import 'react-json-view-lite/dist/index.css';

/**
 * Renders a card component displaying JSON data.
 *
 * @component
 * @param {Object} form - The form data to be displayed.
 * @returns {JSX.Element} The rendered card component.
 */
export const FormEditRawCard = ({form}) => {
    return (
        <CardCapsule title="JSON data">
            <JsonView data={form} shouldExpandNode={allExpanded} style={defaultStyles} />
        </CardCapsule>
    )
}
