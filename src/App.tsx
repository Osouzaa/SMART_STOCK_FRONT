import { Outlet } from "react-router"
import { Header } from "./components/Header"
import { GlobalStyles } from "./styles/global"
import { QueryClientProvider } from "@tanstack/react-query"
import { queryClient } from "./lib/react-query"

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyles />
      <Header />
      <Outlet />
    </QueryClientProvider>
  )
}