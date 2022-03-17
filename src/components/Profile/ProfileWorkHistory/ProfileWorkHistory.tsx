import { SectionTitle } from "../../Common.style"
import { WorksHistoryOrder, WorksHistoryOrderPrice, WorksHistoryWork, WorksHistory, WorksHistoryWrapper } from "./ProfileWorkHistory.style"

export const ProfileWorksHistory = () => {
    return (<WorksHistoryWrapper>
        <SectionTitle>
            <h3>История работы</h3>
        </SectionTitle>
        <WorksHistory>
            <WorksHistoryWork>
                <WorksHistoryOrder>
                    <h3>Сервис на Vue</h3>
                </WorksHistoryOrder>
                <WorksHistoryOrderPrice>
                    100 000руб
                </WorksHistoryOrderPrice>
            </WorksHistoryWork>
        </WorksHistory>
    </WorksHistoryWrapper>)
}