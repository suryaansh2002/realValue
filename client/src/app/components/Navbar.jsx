'use client'

import { useState } from 'react'
import { Drawer, Button } from 'antd'
import Link from 'next/link'
import { MenuOutlined } from '@ant-design/icons'
import { Space } from 'antd'

// logo
import Logo from '../../images/logo.png'
import Image from 'next/image'
import { IoMdClose } from 'react-icons/io'

const Navbar = () => {
  const [visible, setVisible] = useState(false)

  const showDrawer = () => {
    setVisible(true)
  }

  const onClose = () => {
    setVisible(false)
  }

  const NavLink = ({ href, text }) => (
    <div className="h-full hover:border-b-2 hover:border-yellow-400">
      <Link legacyBehavior href={href}>
        <a
          className="text-white text-md"
          style={{ fontSize: '20px', fontWeight: 'bold' }}
        >
          {text}
        </a>
      </Link>
    </div>
  )

  return (
    <>
      <div className="bg-black py-4 sticky top-0 z-50">
        <div className="flex items-center justify-center gap-x-60 lg:justify-around lg:gap-x-96">
          <div className="mx-auto">
            <Link href="/">
              <Image src={Logo} alt="logo" width={80} height={80} priority />
            </Link>
          </div>
          <div className="hidden md:flex justify-evenly items-center space-x-4 mx-auto flex-grow-1">
            <NavLink href="/buy" text="Buy" />
            <NavLink href="/sell" text="Sell" />
            <NavLink href="/finance" text="Finance" />
            <NavLink href="/contact" text="Contact Us" />
            <NavLink href="/about" text="About Us" />
          </div>
          <div className="md:hidden m-auto">
            <Button
              className="bg-white"
              style={{
                backgroundColor: 'transparent',
                color: 'white',
                border: 'none',
              }}
              icon={
                <MenuOutlined style={{ color: 'white', fontSize: '20px' }} />
              }
              onClick={showDrawer}
            />
          </div>
        </div>
      </div>
      <Drawer
        title={<span style={{ color: 'white' }}></span>}
        placement="right"
        closable={false}
        onClose={onClose}
        open={visible}
        className="bg-black text-white"
        style={{ backgroundColor: '#111827', color: 'white' }}
        extra={
          <Space>
            <IoMdClose
              color="white"
              size={25}
              onClick={onClose}
              style={{ alignSelf: 'center' }}
            />
          </Space>
        }
      >
        <div
          className="flex flex-col items-center mt-4 space-y-4"
          style={{ fontSize: '20px' }}
        >
          <Link legacyBehavior href="/">
            <a
              className="text-white font-bold focus:text-yellow-400"
              onClick={onClose}
            >
              Home
            </a>
          </Link>
          <Link legacyBehavior href="/buy">
            <a
              className="text-white font-bold focus:text-yellow-400"
              onClick={onClose}
            >
              Buy Car
            </a>
          </Link>
          <Link legacyBehavior href="/sell">
            <a
              className="text-white font-bold focus:text-yellow-400"
              onClick={onClose}
            >
              Sell Car
            </a>
          </Link>
          <Link legacyBehavior href="/finance">
            <a
              className="text-white font-bold focus:text-yellow-400"
              onClick={onClose}
            >
              Finance
            </a>
          </Link>
          <Link legacyBehavior href="/about">
            <a
              className="text-white font-bold focus:text-yellow-400"
              onClick={onClose}
            >
              About Us
            </a>
          </Link>
          <Link legacyBehavior href="/contact">
            <a
              className="text-white font-bold focus:text-yellow-400"
              onClick={onClose}
            >
              Contact Us
            </a>
          </Link>
        </div>
      </Drawer>
    </>
  )
}

export default Navbar
