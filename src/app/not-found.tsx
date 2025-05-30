'use client';

import '../styles/not-found.style.css';
import Image from 'next/image';
import Image404 from '@petnetPublic/assets/404.jpg';

const NotFound = () => {
    return (
        <main className='notFoundContainer'>
            <figure>
                <Image src={Image404.src} alt='Not found' width={400} height={400} priority />
            </figure>
        </main>
    );
};

export default NotFound;
