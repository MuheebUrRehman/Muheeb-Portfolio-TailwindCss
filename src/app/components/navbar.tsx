import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-screen">
      <div className="w-[90%] flex justify-between items-center mx-auto h-[20vh]">
        <Link href="#home-section">
          <Image src="/logomuheeb.png" alt="" height={120} width={300} />
        </Link>
        <ul className="w-[40%] flex justify-between">
          <li>
            <Link
              href="#home-section"
              className="text-xl no-underline font-medium text-[#f8f9fa] "
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="#about-section"
              className="text-xl no-underline font-medium text-[#f8f9fa]"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="#project-section"
              className="text-xl no-underline font-medium text-[#f8f9fa]"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              href="#contact-section"
              className="text-xl no-underline font-medium text-[#f8f9fa]"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
