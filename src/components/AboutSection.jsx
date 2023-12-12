"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Node.js</li>
        <li>Express</li>
        <li>PostgreSQL</li>
        <li>Sequelize</li>
        <li>JavaScript</li>
        <li>React</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Fullstack Academy of Code</li>
        <li>University of California, Santa Cruz</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>AWS Cloud Practitioner</li>
        <li>Google Professional Cloud Developer</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image2.png" width={500} height={500} /> 
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg text-slate-950">
            (27 พ.ย. 66) กองสาธารณสุขและสิ่งแวดล้อม จัดโครงการอาสาสมัครท้องถิ่นรักษ์โลกด้านสิ่งแวดล้อม ณ ห้องประชุมชั้น 2 อบต.บางเสาธง โดยจัดกิจกรรมฝึกอบรมและให้ความรู้แก่ประชาชนชาวบางเสาธง จำนวน 80 คน เพื่อให้ประชาชนมีความรู้ ความเข้าใจในการอนุรักษ์ และเฝ้าระวังคุณภาพสิ่งแวดล้อม และได้ร่วมกันประดิษฐ์ “ผลิตภัณฑ์ไม้กวาดจากขวดพลาสติกรีไซเคิล" แข็งแรง ทนทาน สร้างรายได้ และเป็นมิตรต่อสิ่งแวดล้อม<br />
            <br />
            โอกาสนี้ขอขอบคุณนายธวัชชัย แจ่มศรี นักวิชาการอิสระ อดีต ผอ.กองสาธารณสุขและสิ่งแวดล้อม เทศบาลตำบลวานรนิวาส จ.สกลนคร ที่ให้เกียรติเป็นวิทยากรให้ความรู้ในโครงการฯ ดังกล่าว
            <br />
            <br />
            "บางเสาธงน่าอยู่ คู่คุณภาพชีวิตที่ดี "
            <br />
            <br />
            -------------------------------------
            <br />
            <br />
            องค์การบริหารส่วนตำบลบางเสาธง
          </p>
          {/* <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div> */}
          {/* <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
