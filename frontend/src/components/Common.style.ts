import styled from "styled-components";

export const Container = styled.div`
    width: 90%;
    margin: 0px auto;
`

export const SectionTitle = styled.div`
    display:flex ;
    background-color:#c2cad7;
    justify-content: space-between;
    width: 100%;
    height: 40px;
    color: white;
    font-weight: 700;
    font-size: 21px;
    align-items:center ;
    box-sizing: border-box;
    padding: 0px 10px 0px 10px;
`

export const Skill = styled.button`
    &:first-child{
        margin: 0px;
    };
    margin-left: 10px;
    background: none;
    border: 1px solid #666770;;
    border-radius: 3px;
    color: #666770;
    font-weight: 400;
`

export const Skills = styled.div`
    display: flex;
    margin: 15px 0px ;
`

export const Edit = styled.img`
    width: 31px;
`

export const Button = styled.button`
    background-color: #4abfb4;
    border: none;
    border-radius: 3px;
    color:white ;
    height: 28px;
    min-width: 100px;
    margin: 10px 0px 0px 0px ;
`