import { ReactNode } from "react"


export const Form = ({ children }: { children: ReactNode }) => {
    return (
        <div className="flex w-full h-screen justify-center items-center">
            <form className="border-8 border-[#5E7F68] rounded-4xl min-w-[580px] min-h-[480px] bg-white flex flex-col items-center justify-center p-12 shadow-lg">
                {children}
            </form>
        </div>
    );
}