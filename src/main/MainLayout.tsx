import type { ReactNode } from "react";
import { TopBar } from "./layouts/TopBar/TopBar";
import { Footer } from "./layouts/Footer/Footer";

export const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <TopBar />
      <div>{children}</div>
      <Footer />
    </>
  )
}
