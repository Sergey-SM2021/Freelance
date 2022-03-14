import { Route, Routes, useRoutes } from "react-router-dom"

import { Auth } from "./components/Auth"
import { Club } from "./components/Club"
import { Footer } from "./components/Footer"
import { Freelancers } from "./components/Freelancers"
import { Header } from "./components/Header"
import { Orders } from "./components/Orders"
import { Preview } from "./components/Preview"
import { SideBar } from "./components/SideBar"

export const App = () => {
  const routs = useRoutes([
    { path: "/freelancers", element: <><Freelancers /><SideBar /></> },
    { path: "/club", element: <><Club /><SideBar /></> },
    { path: "/orders", element: <><Orders /><SideBar /></> },
    { path: "/auth", element: <><Auth /><SideBar /></> },
    { path: "/", element: <><Preview /></> }])
  return (<div>
    <Header />
    {routs}
    <Footer />
  </div>)
}