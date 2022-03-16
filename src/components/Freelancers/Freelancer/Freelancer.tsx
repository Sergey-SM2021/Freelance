import {
    Ava, FreelancerCard, FreelancerContent, FreelancerDescription,
    FreelancerHeader, FreelancerName, FreelancerProject, FreelancerProjects, FreelancerSkill,
    FreelancerSkills, FreelancerWrapper, Price, PricePer, Secialization
} from "./Freelancer.style"
import avaIconPath from '../../../assets/man.png'
import { FreelancerType } from "../../../models"

export const Freelancer = ({ ava = avaIconPath, id, lastName, name, projects, specialization, steck, price }: FreelancerType) => {
    return (<FreelancerWrapper>
        <FreelancerCard>
            <Ava src={ava} />
            <FreelancerContent>
                <FreelancerHeader>
                    <div>
                        <FreelancerName>
                            {name} {lastName}
                        </FreelancerName>
                        <Secialization>
                            {specialization}
                        </Secialization>
                    </div>
                    <div>
                        <Price>
                            от {price} руб.
                        </Price>
                        <PricePer>
                            за час
                        </PricePer>
                    </div>
                </FreelancerHeader>
                <FreelancerDescription>
                    Основная информация: Представляю команду профессионалов MetaLamp, в разработке уже более 7 лет.
                    Команда насчитывает 60 человек, покрываем все часовые пояса России.
                    Успешно завершили 100+ проектов в разных предметных областях: финансовые технологии, аналитические и образовательные платформы,
                    логистические системы, маркетплейсы, блокчейн. На фронте имеем мощную экспертизу на стеке Typescript+React.
                    На бэке специализируемся на Node.js и экзотическом Haskell. Осуществляем проекты под ключ,...
                </FreelancerDescription>
                <FreelancerProjects>
                    {projects.map((el)=><FreelancerProject src={el}/>)}
                </FreelancerProjects>
                <FreelancerSkills>
                    {steck.map((el) => (<FreelancerSkill >{el}</FreelancerSkill>))}
                </FreelancerSkills>
            </FreelancerContent>
        </FreelancerCard>
    </FreelancerWrapper >)
}