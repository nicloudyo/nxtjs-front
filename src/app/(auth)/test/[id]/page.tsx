'use client'

import React from 'react';

export default function Home({ params }: { params: Promise<{ id: string }> }) {

    const { id } = React.use(params);

    const slug = parseInt(id);


    return (
        <div className='flex justify-center items-center'>

        </div>
    );
}