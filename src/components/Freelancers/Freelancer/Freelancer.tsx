import { Ava, FreelancerCard, FreelancerContent, FreelancerDescription, FreelancerHeader, FreelancerName, FreelancerProject, FreelancerProjects, FreelancerSkill, FreelancerSkills, FreelancerWrapper, Price, PricePer, Secialization } from "./Freelancer.style"
import avaIconPath from '../../../assets/man.png'
import project0Path from '../../../assets/ADbu3KMS_lgtJH4_wK-FlA.jpeg'
import project1Path from '../../../assets/p1_2848898_bbd3ec66.jpg'
import project2Path from '../../../assets/ps4-assassins-creed-odyssey-origins_1.jpg'

export const Freelancer = () => {
    return (<FreelancerWrapper>
        <FreelancerCard>
            <Ava src={avaIconPath} />
            <FreelancerContent>
                <FreelancerHeader>
                    <div>
                        <FreelancerName>
                            Михаил Агафонов
                        </FreelancerName>
                        <Secialization>
                            Front-end (Typescript+React)
                        </Secialization>
                    </div>
                    <div>
                        <Price>
                            от 1 200 руб.
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
                    <FreelancerProject src={project0Path} />
                    <FreelancerProject src={project1Path} />
                    <FreelancerProject src={project2Path} />
                </FreelancerProjects>
                <FreelancerSkills>
                    <FreelancerSkill >
                    react
                </FreelancerSkill>
            </FreelancerSkills>
        </FreelancerContent>
    </FreelancerCard>
    </FreelancerWrapper >)
}