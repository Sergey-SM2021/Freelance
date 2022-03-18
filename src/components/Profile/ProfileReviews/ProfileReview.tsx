import {
    ReviewAva, ReviewDetails, ReviewName, ReviewInner,
    ReviewWrapper, Star, ReviewDescription
} from "./ProfileReview.style"
import avaPath from '../../../assets/man.png'
import starPath from '../../../assets/favourite.png'
import { FreelancerFullType } from "../../../models"

type ReviewType = FreelancerFullType["reviews"][0]

export const Review = ({ava,description,details,name,stars}:ReviewType) => {
    return (<ReviewWrapper>
        <ReviewAva src={ava} />
        <ReviewInner>
            <ReviewName>{name}</ReviewName>
            <ReviewDetails>
                {details}
            </ReviewDetails>
            <ReviewDescription>
                {description}
            </ReviewDescription>
        </ReviewInner>
        {[0,0,0,0,0].map(star => (<Star src={starPath} />))}
    </ReviewWrapper>)
}