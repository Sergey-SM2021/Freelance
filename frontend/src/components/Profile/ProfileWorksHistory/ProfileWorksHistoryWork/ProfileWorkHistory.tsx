import { memo } from "react"
import { TFreelancer, TWorkHistory } from "../../../../models"
import { Skill, Skills } from "../../../Common/Common.style"
import { WorkOrder, WorkPrice, WorkTitle, WorkWrapper } from "./ProfileWorkHistory.style"

export const WorksHistoryWork = memo(({ name, price, freelancer, id }: TWorkHistory) => {
    return (<WorkWrapper>
        <WorkOrder>
            <WorkTitle>{name}</WorkTitle>
            {/* <Skills>
                {skills.map(skill => <Skill>{skill}</Skill>)}
            </Skills> */}
        </WorkOrder>
        <WorkPrice>
            <h4>{price} руб.</h4>
            <p>За проект</p>
        </WorkPrice>
    </WorkWrapper>)
})