import styled from "styled-components"

export const SignUpWrapper = styled.div`
    width: 100%;
    min-height: 100vh;
    box-sizing: border-box;
    padding: 70px 0px 20px 0px;
`

export const SignUpInner = styled.div`
    width:100%;
    height:100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const LogoTitle = styled.h2`
    
`

export const Paper = styled.div`
    background-color: #fff;
    width: 100%;
    box-sizing: border-box;
    width: 400px;
`

export const SignUpTitlePaper = styled(Paper)`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 40px;
    margin: 0px auto 10px auto;
`

export const AlreadySignUp = styled.p`
    display: inline-block;
`

export const SignUpMainPaper = styled(Paper)`
    padding: 20px;
`

export const Registration = styled.p`
    
`

export const SignUpRolesWrapper = styled.div`
    margin-top: 20px;
`

export const SignUpRolesInner = styled.div`
    display: flex;
    width: 100%;
    height: 40px;
`

export const SignUpRolesTitle = styled.h3`
    
`

export const SignUpRole = styled.button`
    background:none;
    &:first-child{
        border-right: none;
        border-bottom-right-radius: 0px;
        border-top-right-radius: 0px;
    }
    &:last-child{
        border-bottom-left-radius: 0px;
        border-top-left-radius: 0px;
    }
    width: 50%;
    border-radius: 3px;
    border: #558cb7 solid 1px;
    color: #558cb7;
    &:hover{
        cursor: pointer;
    }
`

export const AuthSubmit = styled.button`
    margin-top: 20px;
    background-color: #558cb7;
    border:none;
    color: white;
    width: 100%;
    height: 40px;
    border-radius: 5px;
    &:hover{
        background-color:#376f9a;
        cursor: pointer;
    }
`