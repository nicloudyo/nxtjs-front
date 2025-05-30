'use client'
import { imageData } from '@/utils/image.data';
import { routing } from '@/utils/routing.data';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { MouseEvent } from 'react';

export const Navigation = () => {
    const router = useRouter();

    const handlePush = (event: MouseEvent, link: string) => {
        event.preventDefault();
        router.push(link);
    }

    return (
        <nav className='flex gap-2 items-center'>
            <span className='cursor-pointer' onClick={(e) => handlePush(e, routing.articles)}>
                Статьи
            </span>
            <span className="cursor-pointer" onClick={(e) => handlePush(e, routing.tests)}>
                Тесты
            </span>
            <div className='relative w-8 aspect-square'>
                <Image
                    fill
                    src={imageData.user.src}
                    alt={imageData.user.alt}
                />
            </div>
        </nav>
    );
}