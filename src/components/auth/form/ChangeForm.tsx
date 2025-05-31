'use client'
import { useRouter } from "next/navigation";



export const ChangeForm = ({ link, text }: { link: string, text: string }) => {
    const router = useRouter();

    const handleClick = (link: string) => {
        router.push(link);
    }
    return (
        <span onClick={() => handleClick(link)} className="text-black cursor-pointer hover:text-gray-700 ">{text}</span>
    )
}