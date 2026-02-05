import FaqList from "@/components/FaqList"
import TitleSection from "@/components/TitleSection"
import { containerStagger } from "@/motion/animation"
import * as motion from "motion/react-client"

const FAQ = () => {
  return (
    <motion.section
      initial={'hidden'}
      whileInView={'visible'}
      variants={containerStagger}
      viewport={{ once: false }}
      className="my-40">
      <div className="container">
        <div className="flex justify-between items-center">
          <TitleSection desc="faq`s" title="frequently asked questions" />
        </div>
        <FaqList />
      </div>
    </motion.section>
  )
}

export default FAQ