import { InputProps } from "@/types/input.types";
import { FC } from "react";





export const Input: FC<InputProps> = ({ type, name, placeholder, value, onChange }) => {
    return (
        <div className="mb-6 w-full max-w-[380px]">
            <input
                type={type}
                name={name}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                className="w-full px-3 pt-3 h-11 font-extralight
                bg-[#5E7F6894] border placeholder-black border-gray-300 
                rounded-md focus:outline-none focus:ring-1"
            />
        </div>
    );
}