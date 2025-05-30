'use client'
import { HeaderLogo } from "./HeaderLogo";
import { Navigation } from "./Navigation";



export const Header = () => {
    return(
        <div className="flex justify-between p-3 px-12 border-b-3 border-b-[#76A34F]">
            <HeaderLogo/>
            <Navigation/>
        </div>
    );
}