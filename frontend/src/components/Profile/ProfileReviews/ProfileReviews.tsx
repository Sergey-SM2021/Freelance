import { TFreelancer } from "../../../models"
import { SectionTitle } from "../../Common.style"
import { ProfileReview } from "./ProfileReview/ProfileReview"
import { ReviewsWrapper } from "./ProfileReviews.style"

type ProfileReviewsType = {
    reviews: TFreelancer["reviews"]
} | undefined | null

export const ProfileReviews = (props: ProfileReviewsType) => {
    return (<ReviewsWrapper>
        <SectionTitle><h3>Отзывы</h3></SectionTitle>
        {props?.reviews ? props?.reviews.map((review) => (<ProfileReview {...review} />)) : <p>Пока нет отзывов</p>}
    </ReviewsWrapper>)
}