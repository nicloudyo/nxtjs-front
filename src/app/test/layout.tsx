import { Flower } from "@/components/ui/Flower";
import { imageData } from "@/utils/image.data";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-screen flex justify-center items-center p-20">
        {children}
        <Flower src={imageData.flowers.src} />
    </div>
  );
}
