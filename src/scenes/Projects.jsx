import { useState } from "react";
import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const Project = ({ title, text, demoLink, isResponsive }) => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
    bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;
  const projectTitle = title.split(" ").join("-").toLowerCase();

  return (
    <motion.div variants={projectVariant} className="relative">
      <div className={overlayStyles}>
        <p className="text-2xl font-playfair mb-5 ">{title}</p>
        <p
          className={` ml-auto ${
            isResponsive ? " text-green-500" : " text-red"
          }`}
        >
          {isResponsive ? "Responsive" : "Not responsive yet"}
        </p>
        <p className="mt-2">{text}</p>
        <div className=" w-48 flex justify-center  items-center mt-5">
          <div className=" py-2 px-5 bg-secondary-highlight rounded-full text-gray-100">
            <a href={demoLink} rel="noreferrer" target="_blank">
              Demo
            </a>
          </div>
        </div>
      </div>
      <img src={`../assets/${projectTitle}.jpg`} alt={projectTitle} />
    </motion.div>
  );
};

const Projects = () => {
  const [isResponsive] = useState(true);
  return (
    <section id="projects" className="pt-48 pb-48">
      {/* HEADINGS */}
      <motion.div
        className="md:w-2/5 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-4xl">
            <span className="  text-secondary-highlight">PRO</span>JECTS
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-2/3" />
          </div>
        </div>
        <p className="mt-10 mb-10 text-2xl">My recent work</p>
      </motion.div>

      {/* PROJECTS */}
      <div className="flex justify-center">
        <motion.div
          className="sm:grid sm:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* ROW 1 */}
          <div
            className="flex justify-center text-center items-center p-10 bg-primary-highlight
              max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
          >
            BEAUTIFUL USER INTERFACES
          </div>

          <Project
            title="Project 1"
            text="React admin dashboard app using React hooks, Material UI, React Router, Data Grid, Light & Dark Mode"
            demoLink={"https://admin-dashboard-ey06.onrender.com/"}
            isResponsive={!isResponsive}
          />
          <Project
            title="Project 2"
            text="React Responsive Media MERN App with Auth, Likes, Dark Mode ,Redux toolkit , MongoDB, MUI (My role is:Front end)"
            demoLink={"https://media-app-eta.vercel.app/"}
            isResponsive={isResponsive}
          />
          {/* ROW 2 */}
          <Project
            title="Project 3"
            text="React fitness exercises app with APIs From RapidAPI using React hooks, Material UI & React Router"
            demoLink={"https://golds-gym.onrender.com/"}
            isResponsive={isResponsive}
          />

          <Project
            title="Project 4"
            text="Amazon Clone (E-commerce) With React hooks and Firebase for Authentication"
            demoLink={"https://amazon-clone-lx84.onrender.com/"}
            isResponsive={!isResponsive}
          />
          <Project
            title="Project 5"
            text="Hoobank Website with Modern UI UX in React JS with Tailwind"
            demoLink={"https://hoobank9.netlify.app/"}
            isResponsive={isResponsive}
          />
          {/* ROW 3 */}
          <Project
            title="Project 6"
            text="Elzero Template using pure Html,css and javaScript"
            demoLink={"https://anwar-kashlan.github.io/Template-El-Zero/"}
            isResponsive={isResponsive}
          />

          <Project
            title="Project 7"
            text="Kasper Template using pure Html,css and javaScript"
            demoLink={"https://anwar-kashlan.github.io/Template-Kasper/"}
            isResponsive={isResponsive}
          />

          <div
            className="flex justify-center text-center items-center p-10  bg-secondary-highlight
              max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
          >
            SMOOTH USER EXPERIENCE
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
