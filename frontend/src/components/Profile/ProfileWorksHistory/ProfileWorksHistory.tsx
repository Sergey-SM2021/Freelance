import { TFreelancer } from "../../../models"
import { SectionTitle } from "../../Common.style"
import { WorksHistory, WorksHistoryWrapper } from "./ProfileWorksHistory.style"
import { WorksHistoryWork } from "./ProfileWorksHistoryWork/ProfileWorkHistory"

type ProfileWorksHistory = {
    works: TFreelancer["workHistory"]
} | undefined

export const ProfileWorksHistory = (props: ProfileWorksHistory) => {
    return (<WorksHistoryWrapper>
        <SectionTitle>
            <h3>История работы</h3>
        </SectionTitle>
        <WorksHistory>
            {props?.works ? props?.works.map(work => (<WorksHistoryWork {...work} />)):"Нет завершенных работ"}
        </WorksHistory>
    </WorksHistoryWrapper>)
}