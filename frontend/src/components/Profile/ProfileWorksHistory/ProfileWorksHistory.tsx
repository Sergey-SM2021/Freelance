import { memo } from "react"
import { Link } from "react-router-dom"
import { TFreelancer } from "../../../models"
import { EditLink, SectionTitle } from "../../Common.style"
import { WorksHistory, WorksHistoryWrapper } from "./ProfileWorksHistory.style"
import { WorksHistoryWork } from "./ProfileWorksHistoryWork/ProfileWorkHistory"

type ProfileWorksHistory = {
    works: TFreelancer["workHistory"],
    isMyProfile: boolean
} | undefined | null

export const ProfileWorksHistory = memo((props: ProfileWorksHistory) => {
    return (<WorksHistoryWrapper>
        <SectionTitle>
            <h3>История работы</h3>
            {props?.isMyProfile ? <Link to="setting/workHistory"><EditLink /></Link>:null}
        </SectionTitle>
        <WorksHistory>
            {props?.works?.length ? props?.works.map(work => (<WorksHistoryWork key={work.id} {...work} />)):"Нет завершенных работ"}
        </WorksHistory>
    </WorksHistoryWrapper>)
})