'use client'
import { imageData } from '@/utils/image.data';
import { routing } from '@/utils/routing.data';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { MouseEvent } from 'react';

export const HeaderLogo = () => {
    const router = useRouter();


    const handlePush = (e: MouseEvent, link: string) => {
        e.preventDefault();
        router.push(link);
    }
    return (
        <div className='flex cursor-pointer' onClick={(e) => (handlePush(e, routing.home))}>
            <div className='relative w-8 aspect-square'>
                <Image
                    fill
                    src={imageData.logo.src}
                    alt={imageData.logo.alt}
                />
            </div>
            <span className='text-[30px] font-semibold mx-8'>
                EcoWorld
            </span>
        </div>
    )
}