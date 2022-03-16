import { Route, Routes, useRoutes } from "react-router-dom"
import styled from "styled-components"
import { RouteBG, RouteWrapper } from "./App.style"

import { Auth } from "./components/Auth"
import { Club } from "./components/Club"
import { Footer } from "./components/Footer/Footer"
import { Freelancers } from "./components/Freelancers/Freelancers"
import { Header } from "./components/Header/Header"
import { Orders } from "./components/Orders"
import { Preview } from "./components/Preview"
import { Profile } from "./components/Profile"
import { Reviews } from "./components/Reviews"
import { SideBar } from "./components/SideBar"

export const App = () => {
  const routs = useRoutes([
    { path: "/specialists", element: <><Freelancers /><SideBar /> </> },
    { path: "/club", element: <><Club /><SideBar /> </> },
    { path: "/orders", element: <><Orders /><SideBar /> </> },
    { path: "/auth", element: <><Auth /><SideBar /> </> },
    { path: "/freelancer/:id/profile", element: <><Profile /><SideBar /> </> },
    { path: "/freelancer/:id/reviews", element: <><Reviews /><SideBar /> </> }
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
