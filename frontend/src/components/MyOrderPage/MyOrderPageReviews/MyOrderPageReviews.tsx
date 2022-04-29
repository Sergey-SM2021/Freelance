import { IFeedback } from "../../../models/IOrder"
import { SectionTitle } from "../../Common/Common.style"
import { FreelancerFeedback } from "./FreelancerFeedback/FreelancerFeedback"
import { ReviewFeedbacks, ReviewsWrapper } from "./MyOrderPageReviews.style"

interface TProps {
    feedbacks: Array<IFeedback>
}

export const MyOrderPageReviews = ({ feedbacks }: TProps) => {
    return (<ReviewsWrapper>
        <SectionTitle>Отзывы</SectionTitle>
        <ReviewFeedbacks>
            {!feedbacks.length && <>Пока нет отзывов</>}
            {feedbacks.map(feedback => <FreelancerFeedback person={feedback.person} message={feedback.message} />)}
        </ReviewFeedbacks>
    </ReviewsWrapper>)
}