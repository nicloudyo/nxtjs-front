import { Information } from "@/components/main/Information";
import { Title } from "@/components/main/Title";
import { Flower } from "@/components/ui/Flower";
import { imageData } from "@/utils/image.data";
import { textData } from "@/utils/text.data";
import Image from "next/image";
import { Auth } from "@/components/ui/auth/AuthWindow";

export default function Home() {
  return (
    <div className="p-20 h-screen flex flex-col justify-center">
      <Title title={textData.main.title} />
      <div>
        <div className="max-w-[770px]">
          {textData.main.text.length > 0 ?
            textData.main.text.map((txt, index) =>
              <Information key={index} text={txt} />
            )
            : 'Error'}
        </div>
      </div>
      <Flower src={imageData.flowers1.src} />\
      <div>
        <Auth/>
      </div>
    </div>
  );
}
