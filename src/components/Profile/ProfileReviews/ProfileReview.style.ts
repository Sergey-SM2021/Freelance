import styled from "styled-components"

export const ReviewInner = styled.div`
    box-sizing: border-box;
    padding: 0px 20px;
`

export const ReviewAva = styled.img`
    height: 80px;
`

export const ReviewName = styled.h3`
    
`

export const ReviewDetails = styled.p`
    color: #aeb8bc;
    margin: 10px 0px;
`

export const ReviewWrapper = styled.div`
    box-sizing: border-box;
    padding: 20px;
    display: flex;
    justify-content: space-between;
    min-height: 30vh;
    position:relative ;
    &::after{
        position: absolute;
        bottom: 0px;
        left: 0px;
        width: 100%;
        height: 1px;
        background-color: #c2cad7;
        display:block ;
        content: "";
    }
`

export const Star = styled.img`
    height: 20px;
    margin-left: 4px;
`

export const ReviewDescription = styled.p`
    
`