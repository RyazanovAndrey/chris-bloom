import { fadeIn } from "@/motion/animation"
import * as motion from "motion/react-client"

const TitleSection = ({ desc, title }: { desc: string, title: string }) => {
  return (
    <div className="mb-10">
      <motion.div variants={fadeIn} className="uppercase text-desc">{desc}</motion.div>
      <motion.h3 variants={fadeIn} className="uppercase text-3xl">{title}</motion.h3>
    </div>
  )
}

export default TitleSection