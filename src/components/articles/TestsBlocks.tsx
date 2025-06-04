'use client'
import { text } from "../../utils/textblock.data";
import { imageData } from "@/utils/image.data";
import Image from "next/image";
import { Container } from "./Container";
import { useRouter } from "next/navigation";


export const TestsBlock = () => {
    const router = useRouter();

    const handleClick = (id: number) => {
        router.push(`/test/${id}`)
    }
    return (
        <div className="h-screen flex flex-col relative py-15 px-24">
            <div className="flex px-10 text-center justify-between items-center">
                <div className="text-3xl">
                    {text.title1.text}
                    <br />
                    {text.title2.text}
                </div>
                <div className="w-[220px] aspect-square ">
                    <div className="w-full h-full relative">
                       <Image fill src={imageData.flower3.src} alt="flower"/>
                    </div>
                </div>
            </div>
            <div className="grid-cols-3 grid gap-12 justify-items-center items-center w-full h-6/10">
                {
                    text.text.map((title, index) => (
                        <Container key={index} title={title} isTest={true} onClick={() => handleClick(index)}/>
                    ))
                }
            </div>


        </div>
    );
}