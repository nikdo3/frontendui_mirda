import {ProxyLink} from '@hrbolek/uoisfrontend-shared/src'

export const FormLink = ({form, text}) => {
    return (
        <ProxyLink to={"/form/view/" + form.id}>{text}</ProxyLink>
    )
}