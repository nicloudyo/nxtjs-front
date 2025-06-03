import { Text } from "./Text";
import { BlocksContainer } from "./block";
import { imageData } from "@/utils/image.data";

export const TestsBlock = () => {
    return (
        <div className="h-screen flex flex-col relative">
            <div className="absolute top-50 left-[330px] text-3xl">
                {Text.artname1.text}
                <br />
                {Text.artname2.text}
            </div>
              <img src={imageData.flower3.src} alt="" className="absolute top-10 right-4 rotate-90 w-128 h-80 scale-y-[-1] object-contain"/>
            <div className="grid-cols-3 grid gap-16 p-12 mt-70 ml-65">
                <BlocksContainer bgColor="#BFDAD9" />
            </div>
        </div>
    );
}