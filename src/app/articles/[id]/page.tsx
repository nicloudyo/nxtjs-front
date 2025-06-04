'use client'

import React from 'react';
import WaterContent from "@/components/articles/WaterContent";
import { waterData } from "@/utils/waterData.data";
import { Flower } from '@/components/ui/Flower';
import { waterImage } from '@/utils/waterImage.data';

export default function Home({ params }: { params: Promise<{ id: string }> }) {

    const { id } = React.use(params);

    const slug = parseInt(id);

    if (isNaN(slug)) {
        return <div>Invalid paragraph ID</div>;
    }

    const paragraph = waterData.paragraphs[slug];
    const imageSrc = waterImage[slug];

    if (!paragraph) {
        return <div>Paragraph not found</div>;
    }

    return (
        <div className='flex'>
            <div className='w-1/2 h '> <WaterContent paragraph={paragraph} /></div>
            <Flower src={imageSrc.src} />
        </div>
    );
}