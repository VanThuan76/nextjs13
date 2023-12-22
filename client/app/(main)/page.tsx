'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Image from 'next/image'
import Link from 'next/link'
import Hero from "@/components/Route/Hero"
import { useEffect, useState } from 'react'

export default function Home() {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    if(!isMounted) {
      setIsMounted(true);
    }
  }, [isMounted]);

  if (!isMounted) {
    return null;
  }
  return (
    <div className='bg-cyellow-100'>
      <Header activeItem={0}/>  
      <div>
        <main className="min-h-screen w-screen flex xs:items-center p-0 xs:p-10 sm:p-28 relative">
          <Hero />
        </main>
      </div>
      <Footer />

    </div>
    
  )
}
