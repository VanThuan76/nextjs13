import React from 'react'
import { ReactNode } from 'react'
import Image from 'next/image'

import Logo from '@/components/Logo'
import cover_url from '@/assets/images/cover.png'


export default function Auth({children}: {children: ReactNode}) {
    return (
        <>
            <div className="absolute w-full h-full top-0 left-0 overflow-hidden bg-cyellow-100">
                <h1 className="select-none text-[268px] font-extrabold text-center whitespace-nowrap -mt-14 text-cyellow-300">MAGIC POST
                </h1>
            </div>
            <div className="w-screen h-screen flex justify-center items-center p-5 bg-amber-400">
                <main className={"max-w-[1024px] h-[628px] z-10 transform p-[8px] rounded-[20px] bg-white shadow-sd1 flex flex-row "}>

                    <section className="relative w-[56%] h-full overflow-hidden rounded-[16px] order-2 hidden md:block">
                        <Image
                            src={cover_url}
                            width={562}
                            height={628}
                            alt="cover"
                            className="w-full h-full animate-pulse cover-animation"
                            loading="lazy"
                        />
                        <div className="absolute bg-gradient-to-b from-cyellow-600 to-cyellow-300 top-0 left-0 right-0 bottom-0 flex flex-col items-center select-none">
                            <Logo
                                width="173"
                                height="87"
                                className="mt-[72px] mb-4 text-white"
                            />
                            <span className="text-[32px] text-white font-bold uppercase">
                                Magic post
                            </span>
                            <span className="text-[18px] text-white tracking-wider mt-[-8px]">
                                Your best delivery partner
                            </span>
                        </div>
                    </section>

                    {children}
                </main>
            </div>
        </>
    )
}