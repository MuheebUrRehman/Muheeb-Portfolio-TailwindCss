import Image from "next/image";
import Link from "next/link";

export default function Carosel() {
  return (
    <section className="w-screen">
      <div className="w-[90%] 2xl:h-[60vh] flex justify-between items-center mx-auto h-[80vh] flex-col md:flex-row">
        <div className="2xl:h-[60%] 2xl:w-[60%] flex flex-col md:h-[70%] justify-between h-[50%] md:w-[42%] w-[80%]">
          <h3 className="text-2xl text-[#f8f9fa]">
            Hi there! I’m <span className="text-[#20c997]">Muheeb</span>,
          </h3>
          <h1 className="text-3xl text-[#007bff]">
            Creative front-end web developer
          </h1>
          <p className="text-xl text-[#f8f9fa]">
            crafting sleek, user-friendly websites with a touch of elegance.
          </p>
          <Link href="#contact-section">
            <button className="cursor-pointer py-2 px-12 bg-[#007bff] text-[#f8f9fa] text-2xl rounded-lg border-none">
              contact me
            </button>
          </Link>
        </div>
        <Image src="/carosel-pic.png" alt="" width={400} height={400} />
      </div>
    </section>
  );
}
