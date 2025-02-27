import { Outlet } from "react-router"
import { Header } from "./components/Header"
import { GlobalStyles } from "./styles/global"

export function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Outlet />
    </>
  )
}