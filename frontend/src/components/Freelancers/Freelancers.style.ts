import styled, { keyframes } from "styled-components"
import { fadeInLeft } from 'react-animations'
const bounceAnimation = keyframes`${fadeInLeft}`

export const FreelancersWrapper = styled.div`
    animation: 1s ${bounceAnimation};
    padding: 10px 0px 10px 0px;
    width: auto;
    box-sizing: border-box;
`

export const FreelancersPaper = styled.div`
    width: 100%;
    background-color: #ffffff;
    min-height: 100vh;
`

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

export const FreelancersBody = styled.div`
    
`

export const Pagination = styled.div`
    
`

export const SearchWarapper = styled.div`
    width: 100%;
    height: 40px;
    margin: 20px 0px;
    display: flex;
    background-color: #eeee;
    align-items: center;
`

export const Search = styled.input`
    padding-left: 15px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    border: none;
    outline: none;
    width: 90%;
    height: 100%;
    background-color: #eeee;
`

export const SearchIcon = styled.img`
    width: 26px;
    height: 26px;
    cursor: pointer;
`