import { ReactNode } from "react";
import "./Layout.scss";
import { Header } from "../Header";

export const Layout = ({children}: {children: ReactNode}) => {
  return (
    <div className="flex flex-col h-screen w-full relative">
        <Header name="All Products" />
        <main className="main w-full max-[900px]:p-3 p-5 flex justify-center">
           <div className="main__wrap">
             {children}
           </div>
        </main>
    </div>
  )
}