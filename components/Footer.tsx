import { footerList } from "@/data/data"
import { RiArrowRightUpLongLine } from "@remixicon/react"
import Link from "next/link"

const Footer = () => {

  const data = new Date().getFullYear()

  return (
    <footer className="py-10">
      <div className="container">
        <div className="grid grid-cols-[400px_1fr_1fr_1fr_1fr] gap-5">
          <div className="">
            <p className="uppercase text-desc">a more meaningful home for photography</p>
            <div>
                <div className="flex items-center gap-x-3">
                  <p className="uppercase text-2xl">let`s</p>
                  <Link href={'/'} className="block bg-secondary py-2 px-4 rounded-full cursor-pointer"><RiArrowRightUpLongLine /></Link>
                </div>
                <p className="uppercase text-2xl">work together</p>
              </div>
          </div>
          <div className="">
            <div className="mb-4 text-xl">{footerList[0].title}</div>
            {footerList[0].links.map(item => {
              return <Link href={'#'} className="block mb-1 hover:underline">{item.label}</Link>
            })}
          </div>
          <div className="">
            <div className="mb-4 text-xl">{footerList[1].title}</div>
            {footerList[1].links.map(item => {
              return <Link href={'#'} className="block mb-1 hover:underline">{item.label}</Link>
            })}
          </div>
          <div className="">
            <div className="mb-4 text-xl">{footerList[2].title}</div>
            {footerList[2].links.map(item => {
              return <Link href={'#'} className="block mb-1 hover:underline">{item.label}</Link>
            })}
          </div>
          <div>
            <div className="mb-4 text-xl">{footerList[3].title}</div>
            {footerList[3].links.map(item => {
              return <Link href={'#'} className="block mb-1 hover:underline">{item.label}</Link>
            })}
          </div>
        </div>
      </div>
      <div className="">
        <div className="container">&copy; {data}</div>
      </div>
    </footer>
  )
}

export default Footer