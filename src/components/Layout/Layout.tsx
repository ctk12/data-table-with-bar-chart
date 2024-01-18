import { ReactNode } from "react";
import "./Layout.scss";
import { Header } from "../Header";

export const Layout = ({children}: {children: ReactNode}) => {
  return (
    <div className="flex flex-col h-screen w-full relative">
        <Header name="All Users" />
        <main className="main w-full max-[900px]:p-3 max-[900px]:pb-10 p-10 flex justify-center">
           <div className="main__wrap">
             {children}
           </div>
        </main>
    </div>
  )
}