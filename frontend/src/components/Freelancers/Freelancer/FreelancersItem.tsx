import {
    Ava, AvaArea, DisLike, FreelancerCard, FreelancerContent, FreelancerDescription,
    FreelancerHeader, FreelancerName, FreelancerProject, FreelancerProjects,
    FreelancerWrapper, Like, Price, PricePer, Reviews, ReviewsInner, Secialization
} from "./FreelancerItem.style"
import IMG from '../../../assets/Projects/Project0.jpeg'
import avaPath from '../../../assets/man.png'
import { Skill, Skills } from "../../Common.style"
import { TFreelancerPreview } from "../../../models"

import { Link } from "react-router-dom"

export const Freelancer = ({ about, dislike, likes, header, portfolio, id }: TFreelancerPreview) => {
    return (<FreelancerWrapper>
        <FreelancerCard>
            <AvaArea>
                <Link to={`/freelancer/${id}/profile`}>
                    <Ava src={avaPath} />
                </Link>
                <Reviews>
                    <Link to={`/freelancer/${id}/reviews`}>
                        <ReviewsInner>
                            <Like >+{likes}</Like>
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
                                <h2>{header.name} {header.lastName}</h2>
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
                    {portfolio?.length ? portfolio.map((el) => <FreelancerProject src={IMG} />) : <></>}
                </FreelancerProjects>
                <Skills>
                    {about.stack ? about.stack.map((el) => (<Skill key={el.id}>{el.name}</Skill>)) : <></>}
                </Skills>
            </FreelancerContent>
        </FreelancerCard>
    </FreelancerWrapper >)
}