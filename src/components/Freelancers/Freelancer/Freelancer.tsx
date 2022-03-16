import {
    Ava, AvaArea, DisLike, FreelancerCard, FreelancerContent, FreelancerDescription,
    FreelancerHeader, FreelancerName, FreelancerProject, FreelancerProjects, FreelancerSkill,
    FreelancerSkills, FreelancerWrapper, Like, Price, PricePer, Reviews, ReviewsInner, Secialization
} from "./Freelancer.style"
import avaIconPath from '../../../assets/man.png'
import { FreelancerType } from "../../../models"

import { Link } from "react-router-dom"

export const Freelancer = ({ ava = avaIconPath, id, lastName, name, projects, specialization, steck, price, description,dislike,like }: FreelancerType) => {
    return (<FreelancerWrapper>
        <FreelancerCard>
            <AvaArea>
                <Link to={`/freelancer/${id}/profile`}>
                    <Ava src={ava} />
                </Link>
                <Reviews>
                    <Link to={`/freelancer/${id}/reviews`}>
                        <ReviewsInner>
                            <Like >+{like}</Like>
                            /
                            <DisLike >-{dislike}</DisLike>
                        </ReviewsInner>
                    </Link>
                </Reviews>
            </AvaArea>
            <FreelancerContent>
                <FreelancerHeader>
                    <div>
                        <FreelancerName>
                            <Link to={`/freelancer/${id}`}>
                                {name} {lastName}
                            </Link>
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
                    {description}
                </FreelancerDescription>
                <FreelancerProjects>
                    {projects.map((el) => <FreelancerProject src={el} />)}
                </FreelancerProjects>
                <FreelancerSkills>
                    {steck.map((el) => (<FreelancerSkill >{el}</FreelancerSkill>))}
                </FreelancerSkills>
            </FreelancerContent>
        </FreelancerCard>
    </FreelancerWrapper >)
}