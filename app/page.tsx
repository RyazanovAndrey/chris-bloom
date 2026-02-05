import LineRun from "@/partials/LIneRun";
import { RiArrowRightUpLongLine, RiFacebookFill, RiLinkedinFill, RiTwitterFill } from "@remixicon/react";
import Image from "next/image";
import Link from "next/link";
import heroImg from '../public/hero-banner.png';
import aboutImg from '../public/about-section-banner.png';
import TitleSection from "@/components/TitleSection";
import servicesImg from '../public/services-section-banner.png';
import { servicesHeightligts } from "@/data/data";
import { portfolioSectionItems } from "@/data/data";
import SliderTesti from "@/partials/SliderTesti";
import FAQ from "@/partials/FAQ";
import TitleName from "@/partials/TitleName";
import * as motion from "motion/react-client"
import { containerStagger, fadeIn, fadeInOpacity } from "@/motion/animation";

export default function Page() {
  return (
    <>
      {/* Main */}
      <motion.section
        initial={'hidden'}
        whileInView={'visible'}
        variants={containerStagger}
        viewport={{ once: false }}
        className="border-t border-b border-white/20 py-20 bg-[url('/shape-1.svg')] bg-center bg-no-repeat">
        <div className="container">
          <div className="grid grid-cols-2 items-center gap-100">
            <div>
              <motion.p variants={fadeIn} className="uppercase text-desc">stunning photography by</motion.p>
              <motion.h1 variants={fadeIn} className="text-5xl">Chris Bloom</motion.h1>
            </div>
            <div>
              <motion.div variants={fadeIn}>
                <div className="flex items-center gap-x-3">
                  <p className="uppercase text-2xl">let`s</p>
                  <Link href={'/'} className="block bg-secondary py-2 px-4 rounded-full cursor-pointer"><RiArrowRightUpLongLine /></Link>
                </div>
                <p className="uppercase text-2xl">work together</p>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* LineSlider */}
      <LineRun />

      {/* Banner  */}
      <motion.section
        initial={'hidden'}
        whileInView={'visible'}
        variants={containerStagger}
        viewport={{ once: true }}
        className="py-10">
        <div className="container">
          <motion.div variants={fadeInOpacity}>
            <Image src={heroImg} alt="" />
          </motion.div>
        </div>
      </motion.section>

      {/* About */}
      <motion.section
        initial={'hidden'}
        whileInView={'visible'}
        variants={containerStagger}
        viewport={{ once: false }}
        className="my-40">
        <div className="container">
          <div className="flex justify-between items-center border-b border-white/20 mb-20">
            <TitleSection desc="about" title="i am chris bloom" />
            <motion.button variants={fadeIn}>
              <Link href={'/about'} className="btn">Show more</Link>
            </motion.button>
          </div>
          <div className="grid grid-cols-2 gap-x-10">
            <motion.div variants={fadeInOpacity}>
              <Image src={aboutImg} alt="" />
            </motion.div>
            <motion.div variants={fadeIn}>
              <h3 className="text-3xl flex items-center gap-x-5 mb-5">
                <Image src={'shape-2.svg'} width={30} height={30} alt="" />
                <span>Introduction</span>
              </h3>
              <p className="text-desc">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni est unde molestias adipisci quas aut perferendis neque, recusandae obcaecati voluptatem ducimus officia officiis rerum aliquid ipsum ullam possimus. Eius, modi esse. Ut laboriosam vitae commodi doloremque voluptate nostrum tenetur. Dolores doloribus at quia voluptatum maiores rem dolorem veritatis placeat recusandae.</p>
              <h3 className="text-3xl flex items-center gap-x-5 mt-10">
                <Image src={'shape-2.svg'} width={30} height={30} alt="" />
                <span>Contact Information</span>
              </h3>
              <div className="mt-10 flex justify-between">
                <div>
                  <p className="text-desc text-2xl">Email</p>
                  <p>chrisbloom@gmail.com</p>
                </div>
                <div>
                  <p className="text-desc text-2xl">Phone number</p>
                  <p>+38 000 000 000</p>
                </div>
              </div>
              <div className="grid grid-cols-2 mt-20 items-center">
                <div>
                  <div className="inline-flex gap-x-3 border border-white/20 rounded-full p-1">
                    <div className="bg-primary size-10 rounded-full grid place-content-center cursor-pointer">
                      <RiFacebookFill />
                    </div>
                    <div className="bg-primary size-10 rounded-full grid place-content-center cursor-pointer">
                      <RiTwitterFill />
                    </div>
                    <div className="bg-primary size-10 rounded-full grid place-content-center cursor-pointer">
                      <RiLinkedinFill />
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <Link href={'/'} className="btn">Lets work</Link><br />
                  <Link href={'/'} className="btn">Download CV</Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Services */}
      <motion.section
        initial={'hidden'}
        whileInView={'visible'}
        variants={containerStagger}
        viewport={{ once: false }}
        className="mt-20">
        <div className="container">
          <div className="flex justify-between items-center border-b border-white/20 mb-20">
            <TitleSection desc="services" title="my photography services" />
            <motion.button variants={fadeIn}>
              <Link href={'/services'} className="btn">Vew all services</Link>
            </motion.button>
          </div>
          <div className="grid grid-cols-2 gap-x-10">
            <div>
              <motion.h3 variants={fadeIn} className="mb-5">EVENENTS</motion.h3>
              <motion.p variants={fadeIn} className="text-desc my-3">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni est unde molestias adipisci quas aut perferendis neque, recusandae obcaecati voluptatem ducimus officia officiis rerum aliquid ipsum ullam possimus. Eius, modi esse. Ut laboriosam vitae commodi doloremque voluptate nostrum tenetur. Dolores doloribus at quia voluptatum maiores rem dolorem veritatis placeat recusandae.</motion.p>
              <motion.p variants={fadeIn} className="mt-10">Services Highlights</motion.p>
              <div className="space-y-2 mt-5">
                {servicesHeightligts.map(item => {
                  return <motion.div variants={fadeIn} className="border border-white/20 flex items-center gap-3 p-3">
                    <Image src={'star-shape.svg'} width={20} height={20} alt="" />
                    <div className="">{item.label}</div>
                  </motion.div>
                })}
              </div>
            </div>
            <div className="grid place-items-end">
              <motion.div variants={fadeInOpacity}>
                <Image src={servicesImg} alt="" width={500} className="rounded-lg" />
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Explore work */}
      <motion.section
        initial={'hidden'}
        whileInView={'visible'}
        variants={containerStagger}
        viewport={{ once: false }}
        className="mt-40">
        <div className="container">
          <div className="flex justify-between items-center">
            <TitleSection desc="explore myphotography work" title="portfolio" />
            <motion.button variants={fadeIn}>
              <Link href={'/portfolio'} className="btn">Vew all works</Link>
            </motion.button>
          </div>
          <div className="grid grid-cols-3 gap-x-5">
            {portfolioSectionItems.map(item => (
              <motion.div variants={fadeIn}>
                <Image src={item.imgUrl} alt="" width={200} height={200} className="w-full rounded-2xl" />
                <div className="flex justify-between items-center mt-8">
                  <div>
                    <p>{item.title}</p>
                    <p className="text-desc">{item.date}</p>
                  </div>
                  <div className="group">
                    <Link href={'/'} className="flex gap-x-2 group-hover:underline">
                      <span className="uppercase">View project</span>
                      <RiArrowRightUpLongLine /></Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </motion.section>

      {/* FAQ */}
      <FAQ />

      {/* Testimonials */}
      <motion.section
        initial={'hidden'}
        whileInView={'visible'}
        variants={containerStagger}
        viewport={{ once: false }}
        className="my-20">
        <div className="container">
          <div className="flex justify-between items-center">
            <TitleSection desc="testimonials" title="what my client says" />
          </div>
          <SliderTesti />
        </div>
      </motion.section>

      {/* TitleName */}
      <TitleName />

      <LineRun />
    </>
  )
}