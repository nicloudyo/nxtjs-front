'use client'

import { Flower } from "@/components/ui/Flower";
import { imageData } from "@/utils/image.data";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-screen flex justify-center items-center">
        <Flower src={imageData.flowers.src}/>
        <Flower src={imageData.flowers1.src} left={true}/>
        {children}
    </div>
  );
}
