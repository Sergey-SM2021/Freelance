import styled from "styled-components"

export const SkillsWrapper = styled.div`
    margin: 10px 0 0 0;
    display:flex;
    gap: 10px;
    width: 100%;
    flex-wrap: wrap;
`

export const Input = styled.input`
    width: 150px;
    box-sizing: border-box;
    border: none;
    flex-grow: 1;
    &:focus{
        outline:none;
    }
    padding: 0 6px;
`

export const Skill = styled.button`
    height: 27px;
    border-radius: 9px;
    border: solid black 1px;
    display: flex;
    align-items: center;
`

export const Close = styled.img`
    margin-left: 5px;
    width: 20px;
    height: 20px;
`

export const ComplitedWork = styled.textarea`
    margin-top: 20px;
    width: 100%;
    box-sizing: border-box;
    resize: none;
    padding: 5px;
    height: 100px;
`

export const AddComplitedWork = styled.textarea`
    margin-top: 20px;
    width: 100%;
    box-sizing: border-box;
    resize: none;
    padding: 5px;
    height: 100px;
`