import { Routes, Route } from "react-router";
import { AlturaRealtyRoutes } from "../../routes/AlturaRealtyRoutes";

export const AlturaRealtyApp = () => {
    return (
        <Routes>
            <Route path="/*" element={<AlturaRealtyRoutes />} />
        </Routes>
    )
}
