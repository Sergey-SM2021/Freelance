import { IFeedback } from "../../../../models/IOrder"
import { Approve, FeedbackFreelancerAva, FeedbackInner, FeedbackPrivateInfo, FeedbackReview, FeedbackWrapper, FreelancerInfo } from "./FreelancerFeedback.style"
import ava from '../../../../assets/man.png'
import { Link } from "react-router-dom"
import approve from "../../../../assets/approval.png"

export const FreelancerFeedback = ({ freelancer, message }: IFeedback) => {
    return (<FeedbackWrapper>
        <FeedbackInner>
            <FreelancerInfo>
                <FeedbackFreelancerAva src={ava} />
                <FeedbackPrivateInfo>
                    <Link to={`/freelancer/${freelancer.id}/profile`}>{freelancer.name} {freelancer.lastname}</Link>
                </FeedbackPrivateInfo>
                <Approve src={approve}/>
            </FreelancerInfo>
            <FeedbackReview>{message}</FeedbackReview>
        </FeedbackInner>
    </FeedbackWrapper>)
}