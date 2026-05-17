import './index.css'
import {Routes,Route} from "react-router-dom"
import LayoutDefault from "./layout/LayoutDefault.jsx";
import LandingPage from "./pages/LandingPage.jsx";

export default function App() {
  return (
    <Routes>
      <Route element={<LayoutDefault />}>
        <Route index element={<LandingPage />} />
        <Route path="home" element={<LandingPage />} />
      </Route>
    </Routes>
  )
}