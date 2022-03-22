import { FreelancerFullType } from "../../../models"
import { SectionTitle } from "../../Common.style"
import { ProfileReview } from "./ProfileReview/ProfileReview"
import { ReviewsWrapper } from "./ProfileReviews.style"

type ProfileReviewsType = {
    reviews: FreelancerFullType["reviews"]
}

export const ProfileReviews = ({ reviews }: ProfileReviewsType) => {
    return (<ReviewsWrapper>
        <SectionTitle><h3>Отзывы</h3></SectionTitle>
        {reviews.map(review => (<ProfileReview {...review} />))}
    </ReviewsWrapper>)
}