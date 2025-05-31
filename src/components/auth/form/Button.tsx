import React from "react";



export const Button = ({ children }: { children: React.ReactNode }) => {
    return (
        <button className="min-w-40 py-2 px-4 rounded-lg mb-3 text-white transition duration-200 bg-[#5E7F68] hover:bg-[#4a6a56]">
            {children}
        </button>
    );
}