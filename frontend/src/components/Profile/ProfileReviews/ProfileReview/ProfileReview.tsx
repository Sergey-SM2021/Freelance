import starPath from '../../../../assets/favourite.png'
import { TReview } from "../../../../models/IFreelancer"
import { ReviewAva, ReviewDescription, ReviewDetails, ReviewInner, ReviewName, ReviewWrapper, Star } from './ProfileReview.style'
import avaPath from '../../../../assets/man.png'
import { memo } from 'react'

export const ProfileReview = memo(({ ava, description, details, name, stars, lastName }: TReview) => {
    return (<ReviewWrapper>
        <ReviewAva src={avaPath} />
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
})