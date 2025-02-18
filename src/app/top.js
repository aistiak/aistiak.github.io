'use client';

import Image from "next/image";
import confetti from 'canvas-confetti';

export default function Top() {
    const triggerConfetti = (e) => {
        e.preventDefault();
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 }
        });
    };

    return (
        <div className="flex flex-col items-center justify-center mb-10">
            <div className="mb-10 flex flex-wrap">
                <div className="w-20 h-20 rounded-full mr-5 relative overflow-hidden border border-solid border-gray-600">
                    <Image
                        src="/dinosaur.png"
                        alt="Profile picture"
                        width={55}
                        height={55}
                        className="object-cover absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                        priority
                    />
                </div>
                <div>
                    <div className="text-4xl">{'Istiak Arif'}</div>
                    <div className="text-2xl" >{'Software Engineer'}</div>
                </div>
                
            </div>
            <div className="flex flex-wrap gap-8">
                <div><a href="/" className="hover:underline hover:underline-offset-4">{'home'}</a></div>
                <div><a href="/" className="hover:underline hover:underline-offset-4">{'tools'}</a></div>
                <div><a href="/" className="hover:underline hover:underline-offset-4">{'projects'}</a></div>
                <div><a href="/" className="hover:underline hover:underline-offset-4">{'memes'}</a></div>
                <div><a href="/" className="hover:underline hover:underline-offset-4">{'about'}</a></div>
                <div><a href="/" className="hover:underline hover:underline-offset-4">{'socials/links'}</a></div>
                <div>
                    <a 
                        href="/" 
                        onClick={triggerConfetti}
                        className="hover:underline hover:underline-offset-4"
                    >
                        {'magic'}
                    </a>
                </div>
            </div>
        </div>
    )
}