import { BrowserRouter, Routes, Route } from "react-router-dom";

//page
import HomePage from '../pages/HomePage'; 
import WorkPage from "../pages/WorkPage";
import WorkDetailPage from "../pages/WorkDetailPage";


export default function AppRouter() {
  return (
    <div>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} /> 
                <Route path="/work" element={<WorkPage />} /> 
                <Route path="/work/:id" element={<WorkDetailPage />} /> 
                <Route path="/#about" element={<HomePage />} /> 
            </Routes>
        </BrowserRouter>
    </div>
  )
}
