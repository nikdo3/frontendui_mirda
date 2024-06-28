import {ProxyLink} from '@hrbolek/uoisfrontend-shared/src'

export const RequestLink = ({uuid, text}) => {
    return (
        <ProxyLink to={"/request/view/" + uuid}>{text}</ProxyLink>
    )
}