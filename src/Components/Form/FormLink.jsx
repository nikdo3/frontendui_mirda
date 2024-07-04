import {ProxyLink} from '@hrbolek/uoisfrontend-shared/src'

/**
 * Renders a link to a form.
 *
 * @param {Object} props - The component props.
 * @param {Object} props.form - The form object.
 * @param {string} props.action - The action for the form.
 * @param {string} props.text - The text to display for the link.
 * @returns {JSX.Element} The rendered link component.
 */
export const FormLink = ({form, action, text}) => {
    return (
        <ProxyLink to={"/form/" + action + "/" + form.id}>{text}</ProxyLink>
    )
}