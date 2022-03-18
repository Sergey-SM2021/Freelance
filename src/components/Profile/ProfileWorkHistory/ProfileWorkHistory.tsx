import { SectionTitle, Skill, Skills } from "../../Common.style"
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
                    <Skills>
                        <Skill>Java</Skill>
                        <Skill>Php</Skill>
                        <Skill>Laravel</Skill>
                        <Skill>Css</Skill>
                        <Skill>Webpack</Skill>
                        <Skill>Алгоритмы</Skill>
                    </Skills>
                </WorksHistoryOrder>
                <WorksHistoryOrderPrice>
                    <h4>100 000руб</h4>
                </WorksHistoryOrderPrice>
            </WorksHistoryWork>
        </WorksHistory>
    </WorksHistoryWrapper>)
}