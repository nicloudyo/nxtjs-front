import { imageData } from '@/utils/image.data';
import Image from 'next/image';


export const Flower = (props: { src: string, left?: boolean }) => {
    return (
        <div className={`absolute max-h-[800px] h-full aspect-[3/5] ${props.left == true ? '' : 'right-25'}`}>
            <div className="relaitive w-full h-full">
                <Image
                    fill
                    src={props.src}
                    alt='flower' />
            </div>
        </div>
    );
}