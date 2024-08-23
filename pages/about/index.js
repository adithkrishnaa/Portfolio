import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "../../components/TabButton";
import { motion } from "framer-motion";
import { smoothIn } from "@/animate";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2 overflow-scroll">
        <li>Node.js</li>
        <li>Express</li>
        <li>PostgreSQL</li>
        <li>Sequelize</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>Nextjs</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2 overflow-scroll">
        <li>
          <span className="text-accent">SSLC</span>
          <br />
          Venkateshwara Vidhyalaya Matric Hr.Sec School.
        </li>
        <li>
          <span className="text-accent">HSC</span>
          <br />
          Venkateshwara Vidhyalaya Matric Hr.Sec School.
        </li>
        <li>
          <span className="text-accent">
            Bachelor Of Engineering In Electrical And Electronics Engineering
          </span>
          <br />
          KPR Institute of Engineering and Technology
        </li>
      </ul>
    ),
  },
  {
    title: "Expercience",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2 ">
        <li className="text-primary">
          <span className="text-accent">Trainee Engineer</span>
          <br />
          Tiruppur Smart City Limited, Tiruppur.{" "}
          <span className="text-accent">11/21 - 05/23</span>
        </li>
        <span>
          Developed and maintained the front-end of the Tiruppur Smart City
          website using HTML, CSS, JavaScript, React,Tailwind css and Bootstrap.
          <br />
          Collaborated with backend developers and designers to ensure seamless
          integration and functionality of web applications.
        </span>
        <li className="text-primary">
          <span className="text-accent">IT & Web Developer</span>
          <br />
          Basket Hunt Pvt Ltd.{" "}
          <span className="text-accent">10/23 - 12/23</span>
        </li>
        <span>
          Developed a web application with React framework, improving user
          interface design and functionality by 25%.
          <br />
          Conducted usability testing and gathered feedback to iterate on
          interface improvements.
        </span>
        <li className="text-primary">
          <span className="text-accent"> Associate Trainer & Developer</span>
          <br />
          Skill Safari, Coimbatore.{" "}
          <span className="text-accent">01/24 - Present</span>
        </li>
        <span>
          Created structured course materials on web development technologies,
          resulting in a 20% increase in student participation and
          understanding.
          <br />
          Developed and maintained training-related web applications using HTML,
          CSS, JavaScript, and React, enhancing the learning platform's
          functionality and user experience.
        </span>
      </ul>
    ),
  },
];

const About = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-black/60 overflow-y-auto">
      <div className="md:grid lg:grid-cols-2 gap-8 w-full items-center py-8 px-10 xl:gap-16 sm:py-16 xl:px-16">
        <motion.div
          variants={smoothIn("up", 0.3)}
          initial="hidden"
          animate="show"
          exit="hidden">
          <Image
            src="/profile.png"
            className=" -mt-32 hidden lg:flex rounded-full"
            width={500}
            height={500}
          />
        </motion.div>

        <div className="mt-4 md:mt-0 pb-20 text-left flex w-full flex-col h-full">
          <motion.div
            variants={smoothIn("down", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden">
            <h2 className="text-4xl font-bold text-black mb-4 mt-5">
              About Me
            </h2>
            <p className="text-base text-black/80 lg:text-lg">
              Web Developer with 2+ years of experience in crafting dynamic,
              user-friendly interfaces using HTML, CSS, JavaScript, and React. I
              focus on enhancing user engagement and functionality, with a
              proven track record in delivering high-quality web applications.
              Passionate about continuous learning and innovation in web
              development
            </p>
          </motion.div>

          <motion.div
            variants={smoothIn("left", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex flex-row w-full text-blue-800 justify-start mt-8">
            <TabButton
              className="text-blue-500"
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}>
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}>
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}>
              {" "}
              Expercience{" "}
            </TabButton>
          </motion.div>
          <motion.div
            variants={smoothIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="mt-8 text-blue-400 ">
            {TAB_DATA.find((t) => t.id === tab).content}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
