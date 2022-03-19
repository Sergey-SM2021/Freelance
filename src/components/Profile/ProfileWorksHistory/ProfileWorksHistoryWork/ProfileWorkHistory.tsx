import { FreelancerFullType } from "../../../../models"
import { Skill, Skills } from "../../../Common.style"
import { WorkOrder, WorkPrice, WorkTitle, WorkWrapper } from "./ProfileWorkHistory.style"

type WorksHistoryWorkType = FreelancerFullType["workHistory"][0]

export const WorksHistoryWork = ({ name, price, skills }: WorksHistoryWorkType) => {
    return (<WorkWrapper>
        <WorkOrder>
            <WorkTitle>{name}</WorkTitle>
            <Skills>
                {skills.map(skill => <Skill>{skill}</Skill>)}
            </Skills>
        </WorkOrder>
        <WorkPrice>
            <h4>{price} руб.</h4>
            <p>За проект</p>
        </WorkPrice>
    </WorkWrapper>)
}