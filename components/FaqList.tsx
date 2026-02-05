'use client'

import FaqItem from "./FaqItem";
import { useState } from "react";
import { faqItems } from "@/data/data";

const FaqList = () => {

  const [faqId, setFaqId] = useState<null | number>(null)

  const toggleItem = (id: number) => {
    faqId == id ? setFaqId(null) : setFaqId(id)
  }

  return (
    <div className="grid grid-cols-2 gap-x-10 gap-y-2">
      <div className="space-y-2">
        {faqItems.slice(0, 4).map(item => (
          <FaqItem {...item} isOpenItem={faqId == item.id} toggleItem={toggleItem} />
        ))}
      </div>
      <div className="space-y-2">
        {faqItems.slice(4, 8).map(item => (
          <FaqItem {...item} isOpenItem={faqId == item.id} toggleItem={toggleItem} />
        ))}
      </div>
    </div>
  )
}

export default FaqList