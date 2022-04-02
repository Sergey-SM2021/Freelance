import { memo } from "react"
import { Link } from "react-router-dom"
import { TFreelancer } from "../../../models"
import { SectionTitle } from "../../Common.style"
import { ProfileReview } from "./ProfileReview/ProfileReview"
import { ReviewsWrapper } from "./ProfileReviews.style"

type ProfileReviewsType = {
    reviews: TFreelancer["reviews"],
    isMyProfile:boolean
} | undefined | null

export const ProfileReviews = memo((props: ProfileReviewsType) => {
    return (<ReviewsWrapper>
        <SectionTitle><h3>Отзывы{props?.isMyProfile ? <Link to='setting/reviews'>Link</Link>:null}</h3></SectionTitle>
        {props?.reviews?.length ? props?.reviews.map((review) => (<ProfileReview key={review.id} {...review} />)) : <p>Пока нет отзывов</p>}
    </ReviewsWrapper>)
})