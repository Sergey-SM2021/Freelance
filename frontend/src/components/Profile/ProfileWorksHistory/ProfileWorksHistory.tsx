import { FreelancerFullType } from "../../../models"
import { SectionTitle } from "../../Common.style"
import { WorksHistory, WorksHistoryWrapper } from "./ProfileWorksHistory.style"
import { WorksHistoryWork } from "./ProfileWorksHistoryWork/ProfileWorkHistory"

type ProfileWorksHistory = {
    works: FreelancerFullType["workHistory"]
}

export const ProfileWorksHistory = (props: ProfileWorksHistory) => {
    return (<WorksHistoryWrapper>
        <SectionTitle>
            <h3>История работы</h3>
        </SectionTitle>
        <WorksHistory>
            {props.works.map(work => (<WorksHistoryWork {...work} />))}
        </WorksHistory>
    </WorksHistoryWrapper>)
}