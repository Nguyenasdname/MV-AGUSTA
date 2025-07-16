import { Routes, Route } from "react-router-dom";
import MotocycleMenu from "../components/motocycle/MotocycleMenu";
import HomePage from "../pages/HomePage";

const AppRoutes = () => {
    <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="" element />
        <Route path="" element />
        <Route path="" element />
    </Routes>
}

export default AppRoutes