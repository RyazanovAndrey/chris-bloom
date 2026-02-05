import TitleSection from "@/components/TitleSection";
import Image from "next/image";

export default function Page() {
    return (
        <>
            <section className="my-10">
                <div className="container">
                    <div className="relative rounded-2xl overflow-hidden h-130">
                        <Image src={'/contact-page-banner.png'} width={1920} height={400} alt="" />
                        <div className="absolute top-20 left-0 bg-main rounded-tr-2xl rounded-br-2xl p-5 max-w-130">
                            <TitleSection desc="contact me" title="get in touch with me" />
                            <p className="text-desc">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium impedit dolorem sit, error quam labore? Nobis fugit accusantium eos et.</p>
                        </div>
                        <div className="absolute right-0 bottom-0 bg-main p-5 rounded-tl-2xl text-desc">
                            Scroll down to send me a message
                        </div>
                    </div>
                </div>
            </section>
            <section className="my-20">
                <div className="container">
                    <div className="grid grid-cols-2 gap-x-10">
                        <div className="">
                            <h3 className="text-2xl uppercase mb-5">send me a message</h3>
                            <p className="text-desc">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi, id! Illum, sapiente quaerat reprehenderit perferendis nisi deleniti expedita accusamus laudantium vel dicta modi veniam! Provident ad minus maxime laboriosam nam.</p>
                        </div>
                        <div className="">
                            <form action="">
                                <label htmlFor="id-1" className="block">First name</label>
                                <input type="text" placeholder="" className="border-b border-white/20 w-full outline-0 h-10"  />

                                <label htmlFor="id-1" className="block mt-5">Last name</label>
                                <input type="text" placeholder="" className="border-b border-white/20 w-full outline-0 h-10"  />

                                <label htmlFor="id-1" className="block mt-5">Email</label>
                                <input type="email" placeholder="" className="border-b border-white/20 w-full outline-0 h-10"  />

                                <label htmlFor="id-1" className="block mt-5">Phone number</label>
                                <input type="tel" placeholder="" className="border-b border-white/20 w-full outline-0 h-10"  />

                                <button type="submit" className="w-full h-15 rounded-lg mt-5 cursor-pointer bg-secondary">Send message</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}