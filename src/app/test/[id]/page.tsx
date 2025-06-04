'use client'

import { TestButton } from '@/components/test/TestButton';
import userStore from '@/store/userStore.store';
import { quationData } from '@/utils/quation.data';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';


export default function Home({ params }: { params: Promise<{ id: string }> }) {
    const userId = userStore(state => state.id);
    const router = useRouter();
    useEffect(() => {
        if(userId !== null || userId !== ""){
            router.push('/');
        }
    }, []);

    const { id } = React.use(params);

    const slug = parseInt(id);

    const test = quationData[slug];

    return (
        <div className='flex justify-center flex-wrap gap-10 w-5/10 items-center'>
            {
                test.text.map((item, index) => (
                    <TestButton key={index} title={item} />
                ))
            }
        </div>
    );
}