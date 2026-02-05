'use client'
import { RiArrowDownSLine, RiArrowUpSLine } from "@remixicon/react"
import { useRef } from "react"
import { TPropsFaq } from "@/types/type"
import { motion } from "motion/react"
import { fadeIn } from "@/motion/animation"

const FaqItem = ({ id, title, text, isOpenItem, toggleItem }: TPropsFaq) => {

  const refItem = useRef<HTMLDivElement>(null)

  return (
    <motion.div variants={fadeIn} className="border border-white/20 p-5">
      <div onClick={() => toggleItem(id)} className="uppercase flex justify-between items-center cursor-pointer">
        {title}
        <span className="border border-white/20 rounded-full p-2 hover:bg-primary duration-300">{isOpenItem ? <RiArrowUpSLine /> : <RiArrowDownSLine />}</span></div>
      <div className="overflow-hidden max-h-0 duration-300" ref={refItem} style={isOpenItem ? { maxHeight: refItem.current?.scrollHeight } : { maxHeight: '0px' }}>
        <p className="text-desc">{text}</p>
      </div>
    </motion.div>
  )
}

export default FaqItem