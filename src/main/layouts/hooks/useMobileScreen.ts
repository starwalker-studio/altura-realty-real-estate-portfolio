import { useState, useEffect } from "react";
import { ENV } from "../../../env/env";


export const useMobileScreen = () => {

    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        window.addEventListener("resize", () => { setWidth(window.innerWidth) });
        window.removeEventListener("resize", () => { setWidth(window.innerWidth) });
    }, [width]);

    const isMobileScreen = (): boolean => {
        return width <= ENV.TOP_BAR.MAX_MOBILE_WIDTH;
    }

    return {
        isMobileScreen
    }
}