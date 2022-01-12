import { NextPage } from 'next'
import { useTheme } from 'next-themes'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { FaSnowman } from 'react-icons/fa'
import { BsFillSunFill, BsMoonFill } from 'react-icons/bs'

const Header: NextPage = () => {
  const { theme, setTheme } = useTheme()

  // レンダー後かを判定
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])
  return (
    <div className="fixed flex justify-between h-14 z-50 backdrop-blur-xl w-full px-4 md:px-80 mx-auto">
      <Link href="/">
        <a className="flex space-x-1 items-center text-2xl font-extrabold group">
          <div className="group-hover:animate-bounce">
            <FaSnowman />
          </div>
          <div>Yuki Okamoto</div>
        </a>
      </Link>
      <div className="flex items-center gap-x-3 md:gap-x-7">
        <Link href="/works">
          <a className="hover:opacity-50 font-bold">WORKS</a>
        </Link>
        <button
          aria-label="DarkModeToggle"
          type="button"
          className="flex items-center justify-center"
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        >
          {mounted && (
            <div className="hover:scale-110">
              {theme === 'dark' ? (
                <BsFillSunFill size={20} />
              ) : (
                <BsMoonFill size={20} />
              )}
            </div>
          )}
        </button>
      </div>
    </div>
  )
}

export default Header
