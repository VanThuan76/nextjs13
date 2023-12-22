import './globals.css'
import 'react-toastify/dist/ReactToastify.css'

import type { Metadata } from 'next'
import { Lexend } from 'next/font/google'
import { ToastContainer } from "react-toastify";
import { Providers as ReduxProvider } from "@/redux/provider";
import { Providers as NextUIProvider } from "./(providers)/NextUIProvider"


const lexend = Lexend({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Magic Post',
  description: 'Your best delivery partner',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={lexend.className}>
        <ToastContainer
            limit={1}
            position="top-center"
            autoClose={1500}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover={false}
            theme="light"
            className={"text-[14px]"}/>
        <NextUIProvider>
          <ReduxProvider>
            {children}
          </ReduxProvider>
        </NextUIProvider>
      </body>
    </html>
  )
}
