'use client'
import { imageData } from '@/utils/image.data';
import { routing } from '@/utils/routing.data';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { MouseEvent, useState } from 'react';
import { Portal } from '../Portal';

export const Navigation = () => {
    const router = useRouter();
    const [showProfileModal, setShowProfileModal] = useState(false);
    const handlePush = (event: MouseEvent, link: string) => {
        event.preventDefault();
        router.push(link);
    }

    const toggleProfileModal = (event: MouseEvent) => {
        event.preventDefault();
        setShowProfileModal(!showProfileModal);
    }

    return (
        <nav className='flex gap-4 items-center'>
            <span className='cursor-pointer' onClick={(e) => handlePush(e, routing.articles)}>
                Статьи
            </span>
            <span className="cursor-pointer" onClick={(e) => handlePush(e, routing.tests)}>
                Тесты
            </span>
            <div onClick={toggleProfileModal} className='relative cursor-pointer w-8 aspect-square'>
                <Image
                    fill
                    src={imageData.user.src}
                    alt={imageData.user.alt}
                />
            </div>
            {showProfileModal && (
                <Portal>
                    <div
                        className="fixed inset-0 z-50"
                        onClick={() => setShowProfileModal(false)}
                    >
                        <div className="absolute inset-0 bg-opacity-30" />

                        <div
                            className="absolute w-2/10 h-screen right-0 bg-[#5E7F68] bg-opacity-30"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="flex items-center h-full text-white w-64 rounded-md p-4 z-10">
                                <div>
                                    <h3 className="font-medium text-lg mb-4">Имя</h3>
                                    <p>достижения</p>
                                    <p>достижения</p>
                                    <p>Пройдено тестов: 1/10</p>
                                    <p>Получено промокодов:1/10</p>

                                    <button
                                        onClick={() => setShowProfileModal(false)}
                                        className="mt-4 cursor-pointer px-4 py-2 rounded"
                                    >
                                        Выйти
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </Portal>
            )}
        </nav>
    );
}