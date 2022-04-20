import styled from "styled-components"

export const PortfolioContainer = styled.div`
    box-sizing: border-box;
    padding: 20px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    grid-auto-rows: 1fr;
    justify-content: center;
    gap: 10px;
    display: flex;
    flex-direction: row;
    @media(max-width:780px){
        flex-direction: column;
    }
`

export const PortfolioProject = styled.img`
    width: 100%;
    height: 100%;
`

export const PortfolioWrapper = styled.div`
    
`