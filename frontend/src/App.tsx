import { Route, Routes, useRoutes } from "react-router-dom"

import { RouteBG, RouteWrapper } from "./App.style"
import { Auth } from "./components/Auth/Auth"
import { Footer } from "./components/Footer/Footer"
import { Freelancers } from "./components/Freelancers/Freelancers"
import { Header } from "./components/Header/Header"
import { Orders } from "./components/Orders/Orders"
import { Preview } from "./components/Preview"
import { Profile } from "./components/Profile/Profile"
import { Reviews } from "./components/Reviews"
import { SideBar } from "./components/SideBar/SideBar"
import { FreelancerProfileSettings } from "./components/EditProfile/FreelancerProfileSetting/FreelancerProfileSettings"
import { ClientProfileSettings } from "./components/EditProfile/ClientProfileSetting/ClientProfileSettings"
import {OrderOverview} from "./components/OrderOverview/OrderOverview"

export const App = () => {
  const routs = useRoutes([
    { path: "/specialists", element: <Freelancers /> },
    { path: "/orders", element: <Orders /> },
    { path: "/freelancer/:id/profile", element: <><Profile /><SideBar /> </> },
    { path: "/freelancer/:id/reviews", element: <><Reviews /><SideBar /> </> },
    { path: "/auth/:loc", element: <Auth /> },
    { path: "*", element: <>404 <h1>Страница не найдена</h1></> },
    { path: "/FreelancerProfile/setting", element: <FreelancerProfileSettings /> },
    { path: "/ClientProfile/setting", element: <ClientProfileSettings /> },
    { path: "/", element: <></> },
    { path: "/orderOverview/:id", element: <OrderOverview/> }
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
