'use client'

import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { testimonialItems } from '@/data/data';
import { motion } from "motion/react"

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { RiArrowLeftSLine, RiArrowRightSLine, RiFacebookFill, RiLinkedinFill, RiStarFill, RiTwitterFill } from '@remixicon/react';
import { containerStagger, fadeIn } from '@/motion/animation';

const SliderTesti = () => {
  return (
    <motion.div variants={fadeIn}
      className="relative">
      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={2.5}
        loop
        navigation={{
          prevEl: '.prev-btn',
          nextEl: '.next-btn'
        }}
        pagination={{ clickable: true }}
      >
        {testimonialItems.map(item => (
          <SwiperSlide>
            <div className="bg-primary rounded-xl p-5">
              <div className="flex justify-between">
                <div>
                  <p>{item.name}</p>
                  <p className='text-desc'>{item.location}</p>
                </div>
                <div>
                  <div className="inline-flex gap-x-3 border-white/20 rounded-full p-1">
                    <div className="bg-main size-10 rounded-full grid place-content-center cursor-pointer">
                      <RiFacebookFill />
                    </div>
                    <div className="bg-main size-10 rounded-full grid place-content-center cursor-pointer">
                      <RiTwitterFill />
                    </div>
                    <div className="bg-main size-10 rounded-full grid place-content-center cursor-pointer">
                      <RiLinkedinFill />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex gap-x-2 my-4">
                <RiStarFill color='orange' />
                <RiStarFill color='orange' />
                <RiStarFill color='orange' />
              </div>
              <p className='text-desc'>{item.text.slice(0, 100) + '...'}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="absolute -bottom-20 left-0 flex gap-x-3 rounded-full p-2 border border-white/20">
        <div className="prev-btn size-10 rounded-full grid place-content-center bg-primary hover:bg-[#363636] cursor-pointer duration-300"><RiArrowLeftSLine /></div>
        <div className="next-btn size-10 rounded-full grid place-content-center bg-primary hover:bg-[#363636] cursor-pointer duration-300"><RiArrowRightSLine /></div>
      </div>
    </motion.div>
  )
}

export default SliderTesti