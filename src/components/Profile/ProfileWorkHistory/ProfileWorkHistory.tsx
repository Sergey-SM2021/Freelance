import { FreelancerFullType } from "../../../models"
import { SectionTitle, Skill, Skills } from "../../Common.style"
import { WorksHistoryOrder, WorksHistoryOrderPrice, WorkWrapper, WorksHistory, WorksHistoryWrapper } from "./ProfileWorkHistory.style"

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

type WorksHistoryWorkType = FreelancerFullType["workHistory"][0]

export const WorksHistoryWork = ({ name, price, skills }: WorksHistoryWorkType) => {
    return (<WorkWrapper>
        <WorksHistoryOrder>
            <h3>{name}</h3>
            <Skills>
                {skills.map(skill => <Skill>{skill}</Skill>)}
            </Skills>
        </WorksHistoryOrder>
        <WorksHistoryOrderPrice>
            <h4>{price} руб.</h4>
            <p>За проект</p>
        </WorksHistoryOrderPrice>
    </WorkWrapper>)
}