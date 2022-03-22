import styled from "styled-components"

export const WorkOrder = styled.div`
   
`

export const WorkPrice = styled.div`
    
`

export const WorkWrapper = styled.div`
    width: 100%;
    height: 100%;
    padding: 20px 0px;
    display: flex;
    justify-content: space-between;
    position: relative;
    &::after{
        position: absolute;
        bottom: 10px;
        left: 0px;
        content: "";
        display: block;
        background-color: #c2cad7;
        height: 1px;
        width: 100%;
    }
`

export const WorkTitle = styled.h3`
    
`