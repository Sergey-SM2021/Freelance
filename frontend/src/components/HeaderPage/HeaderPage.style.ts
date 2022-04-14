import styled from "styled-components"

export const FreelancersHeader = styled.div`
    box-sizing: border-box;
    padding: 20px 20px 0px 20px;
`

export const FreelancersCount = styled.h3`
    color: #303b44;
    &::after{
        margin: 20px 0px 0px 0px;
        content:"";
        width: 100%;
        background-color: #eee;
        height: 1px;
        display: block;
    }
`