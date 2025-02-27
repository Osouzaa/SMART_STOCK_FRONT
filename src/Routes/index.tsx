import { BrowserRouter, Route, Routes } from "react-router";
import { App } from "../App";
import { Stock } from "../pages/Stock";
import { Dashboard } from "../pages/Dashboard";
import { DriveStock } from "../pages/DriveStock";

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/stock" element={<Stock />} />
          <Route path="/drive" element={<DriveStock />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}