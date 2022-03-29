import { memo } from "react"
import { TFreelancer } from "../../../models"
import { SectionTitle } from "../../Common.style"
import { WorksHistory, WorksHistoryWrapper } from "./ProfileWorksHistory.style"
import { WorksHistoryWork } from "./ProfileWorksHistoryWork/ProfileWorkHistory"

type ProfileWorksHistory = {
    works: TFreelancer["workHistory"]
} | undefined | null

export const ProfileWorksHistory = memo((props: ProfileWorksHistory) => {
    return (<WorksHistoryWrapper>
        <SectionTitle>
            <h3>История работы</h3>
        </SectionTitle>
        <WorksHistory>
            {props?.works?.length ? props?.works.map(work => (<WorksHistoryWork key={work.id} {...work} />)):"Нет завершенных работ"}
        </WorksHistory>
    </WorksHistoryWrapper>)
})