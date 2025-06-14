'use client'
import { imageData } from '@/utils/image.data';
import { routing } from '@/utils/routing.data';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { MouseEvent, useState } from 'react';
import { Portal } from '../Portal';
import { motion, AnimatePresence } from 'framer-motion';
import userStore from '@/store/userStore.store';

export const Navigation = () => {
    const router = useRouter();
    const [showProfileModal, setShowProfileModal] = useState(false);
    const userState = userStore();

    const handlePush = (event: MouseEvent, link: string) => {
        event.preventDefault();
        router.push(link);
    }

    const toggleProfileModal = (event: MouseEvent) => {
        event.preventDefault();
        setShowProfileModal(!showProfileModal);
    }

    const handleLogin = () => {
        router.push('/login');
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
        

            <AnimatePresence>
                {showProfileModal && (
                    <Portal>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 z-50"
                            onClick={() => setShowProfileModal(false)}
                        >
                            <div className="absolute inset-0 bg-opacity-30" />
                            <motion.div
                                initial={{ x: "100%" }}
                                animate={{ x: 0 }}
                                exit={{ x: "100%" }}
                                transition={{ type: "spring", damping: 25, stiffness: 120 }}
                                className="absolute w-2/10 h-screen right-0 bg-[#5E7F68]"
                                onClick={(e) => e.stopPropagation()}
                            >
                                {
                                    userState.id == "" ? (
                                        <div className='flex justify-center items-center w-full h-full'>
                                            <button className='text-white cursor-pointer text-4xl' onClick={handleLogin}>
                                                Войти
                                            </button>
                                        </div>
                                    ) :
                                        <div className='relative w-full h-full'>
                                            <div className="flex items-center h-full text-white w-64 rounded-md p-4 z-10">
                                                <div className="font-extralight mx-3">
                                                    <h3 className="font-extralight text-3xl mb-4">{userState.fullname}</h3>
                                                    <div className='my-8 whitespace-nowrap pd-20'>
                                                        <p className='text-lg'>Пройдено тестов: 1/10</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <button
                                                onClick={(e) => {e.preventDefault(); setShowProfileModal(false); userState.clear()}}
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
                                }
                            </motion.div>
                        </motion.div>
                    </Portal>
                )}
            </AnimatePresence>
        </nav>
    );
}