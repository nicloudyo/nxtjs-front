'use client'
import { HeaderLogo } from "./HeaderLogo";
import { Navigation } from "./Navigation";



export const Header = () => {
    return (
        <div className="fixed w-screen z-30">
            <div className="flex justify-between p-3 px-12 border-b-3 border-b-[#76A34F] z-50">
                <HeaderLogo />
                <Navigation />
            </div>
        </div>
    );
}