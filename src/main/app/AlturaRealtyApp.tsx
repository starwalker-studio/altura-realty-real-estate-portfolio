import { Routes, Route } from "react-router";
import { AlturaRealtyRoutes } from "../../routes/AlturaRealtyRoutes";
import { MainLayout } from "../MainLayout";

export const AlturaRealtyApp = () => {
    return (
        <Routes>
            <Route path="/*" element={<MainLayout children={<AlturaRealtyRoutes />} />} />
        </Routes>
    )
}
