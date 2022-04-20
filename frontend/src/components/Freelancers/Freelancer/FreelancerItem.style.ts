import styled from "styled-components"

export const FreelancerWrapper = styled.div`
    padding: 20px 20px 0px 20px;
    background-color: #fdf8d1;
    margin-bottom: 10px;
    &:last-child{
        margin-bottom: 0px;
    }
`

export const FreelancerCard = styled.div`
    display: flex;
    justify-content: space-between;
`

export const Ava = styled.img`
    height: 65px;
    cursor: pointer;
`

export const FreelancerContent = styled.div`
    width: 100%;
    box-sizing: border-box;
    padding: 0px 10px;
`

export const FreelancerHeader = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`

export const FreelancerDescription = styled.p`
    margin: 15px 0px;
`

export const FreelancerProjects = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 5px;
`

export const FreelancerProject = styled.img`
    &:hover{
        
    }
    height: 120px;
`

export const FreelancerName = styled.h3`
    cursor: pointer;
    a{
        color: black;
        text-decoration: none;
    }
`

export const Secialization = styled.p`
    
`

export const Price = styled.h3`
    
`

export const PricePer = styled.p`
    
`

export const AvaArea = styled.div`
    
`

export const Reviews = styled.div`
    a{
        color: black;
        text-decoration: none;
    }
`

export const DisLike = styled.div`
    height: 20px;
    color: #d10000;
`

export const Like = styled.div`
    height: 20px;
    color: green;
`

export const ReviewsInner = styled.div`
    display: flex;
    justify-content: space-around;
`

export const FullImg = styled.img`
    
`

export const FullImgWrapper = styled.div<{ isVisable: boolean }>`
    top: 0px;
    left: 0px;
    bottom: 0px;
    right: 0px;
    position: fixed;
    background-color: black;
    visibility: ${({ isVisable }) => (isVisable ? "visible" : "hidden")};
`