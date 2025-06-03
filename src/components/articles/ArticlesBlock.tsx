import { Text } from "./Text";
import { Block } from "./block";
import { imageData } from "@/utils/image.data";

export const ArticlesBlock = () => {
    return (
        <div className="h-screen flex flex-col relative">
            <div className="absolute top-50 left-[330px] text-3xl">
                {Text.title1.text}
                <br />
                {Text.title2.text}
            </div>
              <img src={imageData.flower3.src} alt="" className="absolute top-10 right-4 rotate-90 w-128 h-80 scale-y-[-1] object-contain"/>
            <div className="grid-cols-3 grid gap-16 p-12 mt-70 ml-65">
                <Block bgColor="#76A34F99"/>
            </div>
        </div>
    );
}