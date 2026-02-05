import lineStar from '../public/star-shape.svg'
import Image from "next/image"

const LineRun = () => {

  const lineList = ['Event Photography', 'Comercial Photography', 'Product Photography', 'Wedding Photography', 'Event Photography', 'Landscape Photography', 'Event Photography', 'Comercial Photography', 'Product Photography', 'Wedding Photography', 'Event Photography', 'Landscape Photography', 'Event Photography', 'Comercial Photography']

  return (
    <section className="py-3 border-b border-white/20 border-t">

      <div className="overflow-hidden">
        <div className="flex w-875 move-slide">

          {lineList.map(item => (
            <div className="w-62.5">
              <div className="flex items-center gap-3">
                <Image src={lineStar} alt='' width={30} />
                <span className="text-desc">{item}</span>
              </div>
            </div>
          ))}



          {/* <div className="w-62.5">
            <div className="flex items-center gap-3">
              <Image src={lineStar} alt="" />
              <span className='text-desc'>Comercial Photography</span>
            </div>
          </div>
          <div className="w-62.5">
            <div className="flex items-center gap-3">
              <Image src={lineStar} alt="" />
              <span className='text-desc'>Product Photography</span>
            </div>
          </div>
          <div className="w-62.5">
            <div className="flex items-center gap-3">
              <Image src={lineStar} alt="" />
              <span className='text-desc'>Wedding Photography</span>
            </div>
          </div>
          <div className="w-62.5">
            <div className="flex items-center gap-3">
              <Image src={lineStar} alt="" />
              <span className='text-desc'>Event Photography</span>
            </div>
          </div>
          <div className="w-62.5">
            <div className="flex items-center gap-3">
              <Image src={lineStar} alt="" />
              <span className='text-desc'>Landscape Photography</span>
            </div>
          </div>

          <div className="w-62.5">
            <div className="flex items-center gap-3">
              <Image src={lineStar} alt="" />
              <span className='text-desc'>Event Photography</span>
            </div>
          </div>
          <div className="w-62.5">
            <div className="flex items-center gap-3">
              <Image src={lineStar} alt="" />
              <span className='text-desc'>Comercial Photography</span>
            </div>
          </div>
          <div className="w-62.5">
            <div className="flex items-center gap-3">
              <Image src={lineStar} alt="" />
              <span className='text-desc'>Product Photography</span>
            </div>
          </div>
          <div className="w-62.5">
            <div className="flex items-center gap-3">
              <Image src={lineStar} alt="" />
              <span className='text-desc'>Wedding Photography</span>
            </div>
          </div>
          <div className="w-62.5">
            <div className="flex items-center gap-3">
              <Image src={lineStar} alt="" />
              <span className='text-desc'>Event Photography</span>
            </div>
          </div>
          <div className="w-62.5">
            <div className="flex items-center gap-3">
              <Image src={lineStar} alt="" />
              <span className='text-desc'>Landscape Photography</span>
            </div>
          </div> */}

        </div>
      </div>

    </section>
  )
}

export default LineRun