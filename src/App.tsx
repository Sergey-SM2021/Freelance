import { Route, Routes, useRoutes } from "react-router-dom"
import styled from "styled-components"

import { Auth } from "./components/Auth"
import { Club } from "./components/Club"
import { Container } from "./components/Common.style"
import { Footer } from "./components/Footer/Footer"
import { Freelancers } from "./components/Freelancers/Freelancers"
import { Header } from "./components/Header/Header"
import { Orders } from "./components/Orders"
import { Preview } from "./components/Preview"
import { SideBar } from "./components/SideBar"

export const App = () => {
  const routs = useRoutes([
    { path: "/specialists", element: <><Freelancers /><SideBar /></> },
    { path: "/club", element: <><Club /><SideBar /></> },
    { path: "/orders", element: <><Orders /><SideBar /></> },
    { path: "/auth", element: <><Auth /><SideBar /></> }
  ])
  return (<div>
    <Header />
    <RouteBG>
      <RouteWrapper>
        {routs}
      </RouteWrapper>
    </RouteBG>
    <Routes>
      <Route path="/" element={<Preview />} />
    </Routes>
    <Footer />
  </div>)
}

export const RouteWrapper = styled(Container)`
    display: flex;
    justify-content: space-between;
`

export const RouteBG = styled.div`
    background-color: #eee;
`