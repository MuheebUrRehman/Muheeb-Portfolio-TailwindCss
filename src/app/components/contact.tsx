import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

export default function Contact() {
  return (
    <section className="w-screen bg-black" id="contact-section">
      <div className="flex 2xl:h-[50vh] items-center md:justify-evenly h-[70vh] flex-col justify-between md:flex-row gap-8">
        <div className="w-[75%] flex flex-col h-[70%] justify-between text-[#f8f9fa] md:w-[30%]">
          <h1 className="text-3xl border-b-2 border-b-[#007bff]">Contact Me</h1>
          <div className="text-xl flex gap-4 items-baseline">
            <FontAwesomeIcon icon={faEnvelope} className="contact-icon" />
            muhiburrehman94@gmail.com
          </div>
          <div className="text-xl flex gap-4 items-baseline">
            <FontAwesomeIcon icon={faPhone} className="contact-icon" />
            647-270-2934
          </div>
          <div className="text-xl flex gap-4 items-baseline">
            <FontAwesomeIcon icon={faLinkedin} className="contact-icon" />
            linkedin.com/in/muheeb-ur-rehman/
          </div>
          <Link href="/aMuheebCV-webdev.pdf" target="_blank">
            <button className="cursor-pointer py-2 px-12 bg-[#007bff] text-[#f8f9fa] text-2xl rounded-lg border-none">
              Resume
            </button>
          </Link>
        </div>
        <form
          action=""
          className="flex flex-col h-[70%] justify-between md:w-[40%] w-[75%]"
        >
          <input
            type="text"
            placeholder="your name"
            className="text-2xl bg-[#343a40] border-none p-1 rounded-[5px] focus:bg-white"
          />
          <input
            type="email"
            placeholder="your email"
            className="text-2xl bg-[#343a40] border-none p-1 rounded-[5px] focus:bg-white"
          />
          <textarea
            placeholder="message"
            className="h-[40%] text-2xl bg-[#343a40] border-none p-1 rounded-[5px] focus:bg-white"
          ></textarea>
          <div>
            <Link href="">
              <button className="cursor-pointer py-2 px-12 bg-[#007bff] text-[#f8f9fa] text-2xl rounded-lg border-none">
                Submit
              </button>
            </Link>
          </div>
        </form>
      </div>
    </section>
  );
}
