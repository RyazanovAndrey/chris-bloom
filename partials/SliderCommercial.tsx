'use client'

import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { TProps } from '@/types/type';
import Image from 'next/image';
import Link from 'next/link';
import { RiArrowLeftSLine, RiArrowRightSLine, RiArrowRightUpLongLine } from '@remixicon/react';
import { motion } from "motion/react"
import { fadeIn } from '@/motion/animation';

const SliderCommercial = ({ title, list }: TProps) => {

  return (
    <motion.div variants={fadeIn} className="relative my-20">
      <div className="uppercase text-2xl mb-10">{title}</div>
      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={3.5}
        grabCursor
        loop
        navigation={{
          prevEl: '.prev-btn-slider-3',
          nextEl: '.next-btn-slider-3'
        }}
      >
        {list.map(item => (
          <SwiperSlide>
            <div className="">
              <Image src={item.imgUrl} width={400} height={400} alt='' className='rounded-2xl' />
              <div className='flex justify-between items-center mt-5'>
                <div className="">
                  <p>{item.title}</p>
                  <p className='text-desc'>{item.date}</p>
                </div>
                <div className="group">
                  <Link href={'/'} className="flex gap-x-2 group-hover:underline">
                    <span className="uppercase">View project</span>
                    <RiArrowRightUpLongLine /></Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="absolute -top-3 flex right-0 border border-white/20 p-2 rounded-full">
        <div className={`prev-btn-slider-3 bg-primary rounded-full cursor-pointer size-10 grid place-content-center mr-3 hover:bg-[#363636] duration-300`}><RiArrowLeftSLine /></div>
        <div className="next-btn-slider-3 bg-primary rounded-full cursor-pointer size-10 grid place-content-center hover:bg-[#363636] duration-300"><RiArrowRightSLine /></div>
      </div>
    </motion.div>
  )
}

export default SliderCommercial