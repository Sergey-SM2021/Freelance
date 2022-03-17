import { SectionTitle } from "../../Common.style"
import { ReviewsInner, ReviewsWrapper } from "./ProfileReviews.style"

export const ProfileReviews = () => {
    return (<ReviewsWrapper>
        <SectionTitle><h3>Отзывы</h3></SectionTitle>
        <ReviewsInner />
    </ReviewsWrapper>)
}