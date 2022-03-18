import styled from "styled-components"

export const WorksHistory = styled.div`
    padding: 0px 20px;
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

export const WorksHistoryOrder = styled.div`
   
`

export const WorksHistoryOrderPrice = styled.div`
    
`

export const WorksHistoryWrapper = styled.div`
    
`