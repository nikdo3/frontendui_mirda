import {ProxyLink} from '@hrbolek/uoisfrontend-shared/src'

export const RequestLink = ({request, text}) => {
    return (
        <ProxyLink to={"/request/view/" + request.id}>{text}</ProxyLink>
    )
}