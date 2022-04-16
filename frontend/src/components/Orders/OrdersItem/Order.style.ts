import styled from "styled-components"

export const OrderWrapper = styled.div`
  background: #fff;
  width: 100%;
  min-height: 25vh;
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`

export const OrderInner = styled.div`
  box-sizing: border-box;
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: space-between;
  padding: 16px;
`

export const OrderInfoSection = styled.div`
    
`

export const OrderPriceSection = styled.div`
    display: flex;
    align-items: center;
`

export const OrderPrice = styled.div`
  
`

export const OrderMonyIcon = styled.img`
  width: 70px;
`

export const OrderTitle = styled.h4`
  &:hover{
    cursor: pointer;
  }
  a{
    text-decoration: none;
  }
`

export const OrderViews = styled.div`

`

export const OrderSkill = styled.button`
  border: none;
`