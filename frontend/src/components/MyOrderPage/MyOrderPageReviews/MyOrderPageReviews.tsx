import { RootType } from "../../../store/store"
import { SectionTitle } from "../../Common/Common.style"
import { FreelancerFeedback } from "./FreelancerFeedback/FreelancerFeedback"
import { ReviewFeedbacks, ReviewsWrapper } from "./MyOrderPageReviews.style"

type TProps = {
    feedbacks: RootType["myOrder"]["Order"]["feedbacks"]
}

export const MyOrderPageReviews = ({ feedbacks }: TProps) => {
    return (<ReviewsWrapper>
        <SectionTitle>Отзывы</SectionTitle>
        <ReviewFeedbacks>
            {feedbacks.map(feedback => <FreelancerFeedback freelancer={feedback.freelancer} message={feedback.message} />)}
        </ReviewFeedbacks>
    </ReviewsWrapper>)
}