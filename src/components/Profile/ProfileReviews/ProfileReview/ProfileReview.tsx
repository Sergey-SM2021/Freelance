import starPath from '../../../../assets/favourite.png'
import { FreelancerFullType } from "../../../../models"
import { ReviewAva, ReviewDescription, ReviewDetails, ReviewInner, ReviewName, ReviewWrapper, Star } from './ProfileReview.style'

type ReviewType = FreelancerFullType["reviews"][0]

export const ProfileReview = ({ ava, description, details, name, stars, lastName }: ReviewType) => {
    return (<ReviewWrapper>
        <ReviewAva src={ava} />
        <ReviewInner>
            <ReviewName>
                {name} {lastName}
            </ReviewName>
            <ReviewDetails>
                {details}
            </ReviewDetails>
            <ReviewDescription>
                {description}
            </ReviewDescription>
        </ReviewInner>
        {[0, 0, 0, 0, 0].map(star => (<Star src={starPath} />))}
    </ReviewWrapper>)
}