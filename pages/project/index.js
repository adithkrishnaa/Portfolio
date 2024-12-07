
import  { useState, useRef } from "react";
import ProjectCard from "../../components/ProjectCard";
import { smoothIn } from "@/animate";

import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Responsive Landing Page (JavaScript, Tailwind CSS, EmailJS)",

    image: "/project1.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/adithkrishnaa/Boatman",
    previewUrl: "https://boatmanoverseas.com/",
  },
  {
    id: 2,
    title: "E-commerce Website (Vite, React.js, Tailwind CSS,Firebase)",
    image: "/project2.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/adithkrishnaa/Earakibanagal",
    previewUrl: "https://eyarkaibanagal.netlify.app/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });



  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <motion.h2
        variants={smoothIn("down", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="text-center text-4xl font-bold text-accent mt-24  md:mb-2">
        My Projects
      </motion.h2>
      <div className="text-black py-20 flex flex-row justify-center items-center gap-2 ">
        <ul
          ref={ref}
          className="grid md:grid-cols-2 mb-10 gap-8 md:gap-20 px-28">
          {filteredProjects.map((project, index) => (
            <motion.li
              key={index}
              variants={smoothIn("up", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden">
              <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                imgUrl={project.image}
                gitUrl={project.gitUrl}
                previewUrl={project.previewUrl}
              />
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ProjectsSection;
