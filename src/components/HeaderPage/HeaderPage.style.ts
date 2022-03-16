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