"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, MouseEvent } from "react";

export default function About() {
  const [activeTab, setActiveTab] = useState("education");

  const handleTabClick = (e: MouseEvent, tab: string) => {
    e.preventDefault();
    setActiveTab(tab);
  };

  return (
    <section className="w-screen bg-[#20c997]" id="about-section">
      <div className="flex justify-around items-center h-[90vh]">
        <Image src="/about-pic.png" alt="" width={400} height={400} />
        <div className="w-[50%] flex flex-col justify-between h-[50%]">
          <h1 className="text-3xl text-[#343a40] border-b-2 border-b-[#007bff]">
            About me
          </h1>
          <p className="text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam magni,
            aspernatur a, temporibus illo eaque facere dicta laudantium ex,
            molestiae facilis rem quis accusantium ratione omnis harum dolore
            officia rerum.Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Quam magni, aspernatur a, temporibus illo eaque facere dicta
            laudantium ex, molestiae facilis rem quis accusantium ratione omnis
            harum dolore officia rerum.
          </p>
          <div className="about-tab">
            <ul className="flex justify-between">
              <li>
                <Link
                  className="no-underline text-2xl text-[#f8f9fa] capitalize"
                  href="#"
                  onClick={(e) => handleTabClick(e, "education")}
                >
                  Education
                </Link>
              </li>
              <li>
                <Link
                  className="no-underline text-2xl text-[#f8f9fa] capitalize"
                  href="#"
                  onClick={(e) => handleTabClick(e, "skills")}
                >
                  Skills
                </Link>
              </li>
              <li>
                <Link
                  className="no-underline text-2xl text-[#f8f9fa] capitalize"
                  href="#"
                  onClick={(e) => handleTabClick(e, "certification")}
                >
                  Certification
                </Link>
              </li>
            </ul>
            <ul
              className="flex flex-col justify-between h-[80%]"
              style={{ display: activeTab === "education" ? "block" : "none" }}
            >
              <li className="text-xl list-inside list-square">DAE (CIT)</li>
              <li className="text-xl list-inside list-square">
                Intermediate (Pre-Engineering)
              </li>
              <li className="text-xl list-inside list-square">
                Matriculation (Science)
              </li>
            </ul>
            <ul
              className="skill-content"
              style={{ display: activeTab === "skills" ? "block" : "none" }}
            >
              <li className="text-xl list-inside list-square">HTML/CSS</li>
              <li className="text-xl list-inside list-square">
                Javascript/Typescript
              </li>
              <li className="text-xl list-inside list-square">Tailwind Css</li>
            </ul>
            <ul
              className="cert-content"
              style={{
                display: activeTab === "certification" ? "block" : "none",
              }}
            >
              <li className="text-xl list-inside list-square">
                Lorem, ipsum dolor
              </li>
              <li className="text-xl list-inside list-square">
                Lorem, ipsum dolor
              </li>
              <li className="text-xl list-inside list-square">
                Lorem, ipsum dolor
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
