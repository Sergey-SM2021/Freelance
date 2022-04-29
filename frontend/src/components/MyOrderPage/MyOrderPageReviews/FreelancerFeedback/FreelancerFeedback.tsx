import { IFeedback } from "../../../../models/IOrder"
import {
    Approve, FeedbackFreelancerAva, FeedbackInner, FeedbackPrivateInfo,
    FeedbackReview, FeedbackWrapper, FreelancerInfo
} from "./FreelancerFeedback.style"
import ava from '../../../../assets/man.png'
import { Link } from "react-router-dom"
import approve from "../../../../assets/approval.png"

export const FreelancerFeedback = ({ person, message }: IFeedback) => {
    return (<FeedbackWrapper>
        <FeedbackInner>
            <FreelancerInfo>
                <Link to={`/freelancer/${person.id}/profile`}><FeedbackFreelancerAva src={ava} /></Link>
                <FeedbackPrivateInfo>
                    <Link to={`/freelancer/${person.id}/profile`}>
                        <div>{person.name}</div>
                        <div>{person.lastname}</div>
                    </Link>
                </FeedbackPrivateInfo>
                <Approve src={approve} />
            </FreelancerInfo>
            <FeedbackReview>{message}</FeedbackReview>
        </FeedbackInner>
    </FeedbackWrapper>)
}