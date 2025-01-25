import Link from "next/link";
import Image from "next/image";

export default function Project() {
  return (
    <section className="w-screen" id="project-section">
      <div className="flex flex-col justify-around items-center h-[90vh] 2xl:h-[60vh]">
        <h1 className="w-[50%] text-center text-3xl text-[#f8f9fa] border-b-2 border-b-[#007bff]">
          Projects
        </h1>
        <div className="h-[60%] w-[50%] rounded-[30px] overflow-hidden border-4 border-[#007bff] flex flex-col justify-center items-center 2xl:w-[50%] 2xl:h-[60%]">
          <Link href="" target="_blank">
            <Image src="" alt="" />
          </Link>
        </div>
        <div className="w-[50%] flex justify-between h-[20%] items-center flex-col md:flex-row md:h-[5%]">
          <Link
            href="https://vercel.com/muheeb-ur-rehmans-projects"
            target="_blank"
          >
            <button className="cursor-pointer py-2 px-12 bg-[#007bff] text-[#f8f9fa] text-2xl rounded-lg border-none">
              Vercel
            </button>
          </Link>
          <Link href="https://github.com/MuheebUrRehman/" target="_blank">
            <button className="cursor-pointer py-2 px-12 bg-[#007bff] text-[#f8f9fa] text-2xl rounded-lg border-none">
              Github
            </button>
          </Link>
          <Link href="/aMuheebCV-webdev.pdf" target="_blank">
            <button className="cursor-pointer py-2 px-12 bg-[#007bff] text-[#f8f9fa] text-2xl rounded-lg border-none">
              Resume
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
