import { useRoutes } from "react-router-dom"

import { Auth } from "./components/Auth"
import { Club } from "./components/Club"
import { Footer } from "./components/Footer/Footer"
import { Freelancers } from "./components/Freelancers"
import {Header} from "./components/Header/Header"
import { Orders } from "./components/Orders"
import { Preview } from "./components/Preview"
import { SideBar } from "./components/SideBar"

export const App = () => {
  const routs = useRoutes([
    { path: "/specialists", element: <><Freelancers /><SideBar /></> },
    { path: "/club", element: <><Club /><SideBar /></> },
    { path: "/orders", element: <><Orders /><SideBar /></> },
    { path: "/auth", element: <><Auth /><SideBar /></> },
    { path: "/", element: <><Preview /></> }])
  return (<div>
    <Header />
    {routs}
    <Footer/>
  </div>)
}