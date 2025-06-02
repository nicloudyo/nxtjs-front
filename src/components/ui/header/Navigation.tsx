'use client'
import { imageData } from '@/utils/image.data';
import { routing } from '@/utils/routing.data';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { MouseEvent, useState } from 'react';
import { Portal } from '../Portal';
import { motion } from 'framer-motion';

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
                    <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: "100%" }}
                        transition={{ type: "spring", damping: 25, stiffness: 120 }}
                    >
                        <div
                            className="fixed inset-0 z-50"
                            onClick={() => setShowProfileModal(false)}
                        >
                            <div className="absolute inset-0 bg-opacity-30" />

                            <div
                                className="absolute w-2/10 h-screen right-0 bg-[#5E7F68] bg-opacity-30"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <div className='relative w-full h-full'>
                                    <div className="flex items-center h-full text-white w-64 rounded-md p-4 z-10">
                                        <div className="font-extralight mx-3">
                                            <h3 className="font-extralight text-3xl mb-4">Имя</h3>
                                            <p className='text-xl'>достижения</p>
                                            <p className='text-xl'>достижения</p>
                                            <div className='my-8 whitespace-nowrap pd-20'>
                                                <p className='text-lg'>Пройдено тестов: 1/10</p>
                                                <p className='text-lg'>Получено промокодов:1/10</p>
                                            </div>
                                        </div>
                                    </div>
                                    <button
                                        onClick={() => setShowProfileModal(false)}
                                        className="absolute bottom-0 right-5 text-white cursor-pointer text-2xl self-start rounded"
                                    >
                                        Выйти
                                    </button>
                                    <div className='absolute -top-5 -right-10 w-75 h-80 z-50'>
                                        <Image
                                            fill
                                            src={imageData.flower2.src}
                                            alt={imageData.flower2.alt}
                                            className='object-contain' />
                                    </div>
                                </div>

                            </div>
                        </div>
                    </motion.div>
                </Portal>
            )}
        </nav>
    );
}