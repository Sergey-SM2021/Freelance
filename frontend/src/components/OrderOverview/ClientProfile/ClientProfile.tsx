import { ClientProfileAva, ClientProfileHeader, ClientProfileWrapper } from "./ClientProfile.style"
import avaPath from '../../../assets/man.png'

export const OrderOverviewClientProfile = () => {
    return (<ClientProfileWrapper>
        <ClientProfileHeader>
            <ClientProfileAva src={avaPath}/>
        </ClientProfileHeader>
    </ClientProfileWrapper>)
}