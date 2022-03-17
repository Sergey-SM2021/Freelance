import {
    Ava, AvaArea, DisLike, FreelancerCard, FreelancerContent, FreelancerDescription,
    FreelancerHeader, FreelancerName, FreelancerProject, FreelancerProjects, FreelancerSkill,
    FreelancerSkills, FreelancerWrapper, Like, Price, PricePer, Reviews, ReviewsInner, Secialization
} from "./FreelancerItem.style"
import { FreelancerPreviewType } from "../../../models"

import { Link } from "react-router-dom"

export const Freelancer = ({ about,dislike,header,id,like,portfolio,workHistory }: FreelancerPreviewType) => {
    return (<FreelancerWrapper>
        <FreelancerCard>
            <AvaArea>
                <Link to={`/freelancer/${id}/profile`}>
                    <Ava src={header.ava} />
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
                            <Link to={`/freelancer/${id}/profile`}>
                                {header.name} {header.lastName}
                            </Link>
                        </FreelancerName>
                        <Secialization>
                            {header.specialization}
                        </Secialization>
                    </div>
                    <div>
                        <Price>
                            от {about.price} руб.
                        </Price>
                        <PricePer>
                            за час
                        </PricePer>
                    </div>
                </FreelancerHeader>
                <FreelancerDescription>
                    {about.description}
                </FreelancerDescription>
                <FreelancerProjects>
                    {portfolio.projects.map((el) => <FreelancerProject src={el} />)}
                </FreelancerProjects>
                <FreelancerSkills>
                    {about.steck.map((el) => (<FreelancerSkill >{el}</FreelancerSkill>))}
                </FreelancerSkills>
            </FreelancerContent>
        </FreelancerCard>
    </FreelancerWrapper >)
}