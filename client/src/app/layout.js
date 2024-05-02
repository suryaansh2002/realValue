import { Inter } from 'next/font/google'
import { AntdRegistry } from '@ant-design/nextjs-registry'
import './globals.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import PhoneButton from './components/PhoneButton'

import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Poddar Motors',
  description: 'Real Value by Poddar Motors',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <AntdRegistry>{children}</AntdRegistry>
        <PhoneButton />
        <Footer />
      </body>
    </html>
  )
}
