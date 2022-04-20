import styled from "styled-components"

export const FeedbackWrapper = styled.div`
    margin-bottom: 14px;
    box-sizing: border-box;
    padding: 14px;
    border-bottom: 1px black solid;
`

export const FeedbackInner = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
`

export const FeedbackPrivateInfo = styled.div`
    white-space: nowrap;
    a{
        text-decoration: none;
        color: black;
        font-weight: 500;
        &:hover{
            color: #575757;
        }
    }
`

export const FeedbackReview = styled.div`
    
`

export const FreelancerInfo = styled.div`
    margin: 0 10px 0 0;
    display: flex;
    flex-direction:column ;
    align-items:center ;
`

export const FeedbackFreelancerAva = styled.img`
    width: 50px;
`

export const FeedbackNameLink = styled.div`
    
`

export const Approve = styled.img`
    margin-top: 20px;
    width: 70px;
`