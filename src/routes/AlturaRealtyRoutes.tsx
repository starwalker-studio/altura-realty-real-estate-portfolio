import { Routes, Route } from "react-router";
import { Index } from '../components/home/Index';

export const AlturaRealtyRoutes = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Index/> } />
            </Routes>
        </>
    )
}
