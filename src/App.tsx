import { Route, Routes } from "react-router-dom"
import { Auth } from "./components/Auth"
import { Club } from "./components/Club"
import { Footer } from "./components/Footer"
import { Freelancers } from "./components/Freelancers"
import { Header } from "./components/Header"
import { Orders } from "./components/Orders"
import { Preview } from "./components/Preview"
import { SideBar } from "./components/SideBar"

export const App = () => {
  return (<div>
    <Header />
    <Routes>
      <Route path="freelancers" element={<Freelancers />} />
      <Route path="club" element={<Club />} />
      <Route path="orders" element={<Orders />} />
      <Route path="auth" element={<Auth />} />
      <Route path="*" element={<Preview />} />
    </Routes>
    <SideBar />
    <Footer />
  </div>)
}