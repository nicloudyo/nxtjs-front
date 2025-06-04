import { FC } from "react";

interface ContainerProps {
    title: string,
    isTest?: boolean,
    onClick?: () => void
}


export const Container: FC<ContainerProps> = ({ title, isTest, onClick }) => {
    return (
        <div className={`${!isTest ? "bg-[#76A34F99]" : "bg-[#BFDAD9]"} 
            border w-[336px] aspect-2/1 p-5  hover:opacity-80 duration-200
            rounded-[42px] flex items-center cursor-pointer text justify-center border-gray-300`} onClick={onClick}>
            <div className="text-center select-none text-2xl font-[400]">{title}</div>
        </div>
    );
}