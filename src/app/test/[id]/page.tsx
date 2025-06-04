'use client'

import { TestButton } from '@/components/test/TestButton';
import { quationData } from '@/utils/quation.data';
import React from 'react';

export default function Home({ params }: { params: Promise<{ id: string }> }) {

    const { id } = React.use(params);

    const slug = parseInt(id);

    const test = quationData[slug];

    return (
        <div className='flex justify-center flex-wrap gap-10 w-5/10 items-center'>
            {
                test.text.map((item, index) => (
                    <TestButton key={index} title={item}/> 
                ))
            }
        </div>
    );
}