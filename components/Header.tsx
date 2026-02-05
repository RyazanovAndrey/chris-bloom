'use client'
import { navItems } from "@/data/data"
import Link from "next/link"
import { usePathname } from "next/navigation"

const Header = () => {

  const path = usePathname()

  return (
    <header className="border-b border-white/10 pt-2">
      <div className="container flex items-center justify-between">
        <div className="text-white uppercase text-2xl">Bloom</div>
        <div className="flex border border-white/20 items-center rounded-t-2xl overflow-hidden">
          {navItems.map(item => {
            const isActive = path == item.path
            return <Link href={item.path} className={`block py-4 px-6 hover:bg-primary duration-300 ${isActive ? 'bg-primary' : ''}`}>{item.label}</Link>
          })}
        </div>
        <Link href={'/contact'} className="btn">Contact me</Link>
      </div>
    </header>
  )
}

export default Header