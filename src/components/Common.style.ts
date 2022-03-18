import styled from "styled-components";

export const Container = styled.div`
    width: 90%;
    margin: 0px auto;
`

export const SectionTitle = styled.div`
    display:flex ;
    background-color:#c2cad7;
    width: 100%;
    height: 40px;
    color: white;
    font-weight: 700;
    font-size: 21px;
    align-items:center ;
    h3{
        margin-left: 20px;
    }
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