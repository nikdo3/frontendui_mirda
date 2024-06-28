import {ProxyLink} from '@hrbolek/uoisfrontend-shared/src'

export const FormLink = ({form, action, text}) => {
    return (
        <ProxyLink to={"/form/" + action + "/" + form.id}>{text}</ProxyLink>
    )
}