import { memo } from "react"

import { TFreelancer } from "../../../models/IFreelancer"
import { SectionTitle } from "../../Common/Common.style"
import { ProfileReview } from "./ProfileReview/ProfileReview"
import { ReviewsWrapper } from "./ProfileReviews.style"

type ProfileReviewsType = {
    reviews: TFreelancer["reviews"],
} | undefined | null

export const ProfileReviews = memo((props: ProfileReviewsType) => {
    return (<ReviewsWrapper>
        <SectionTitle><h3>Отзывы</h3></SectionTitle>
        {props?.reviews?.length ? props?.reviews.map((review) => (<ProfileReview key={review.id} {...review} />)) : <p>Пока нет отзывов</p>}
    </ReviewsWrapper>)
})