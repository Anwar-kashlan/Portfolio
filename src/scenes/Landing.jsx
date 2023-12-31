import SocialMediaIcons from "../components/SocialMediaIcons";
import useMediaQuery from "../hooks/useMediaQuery";
import CV from "../Pdfs/Anwar's CV.pdf";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Landing = ({ setSelectedPage }) => {
  const isAboveLarge = useMediaQuery("(min-width: 1060px)");
  return (
    <section
      id="home"
      className="md:flex md:justify-between md:items-center gap-16 md:h-full py-10"
    >
      {/* IMAGE SECTION */}
      <div className="basis-3/5 z-10 mt-16 md:mt-40 flex justify-center md:order-2">
        {isAboveLarge ? (
          <div
            // color of border image
            className="relative z-0 ml-20 before:absolute before:-top-20 before:-left-20 before:rounded-t-[400px]
            before:w-full before:max-w-[400px] md:before:max-w-[600px] before:h-full before:border-2  before:border-secondary-highlight before:z-[-1]"
          >
            <img
              alt="profile"
              className="hover:filter hover:grayscale-[0.4] transition duration-500 z-10 w-full max-w-[400px] rounded-t-[400px] md:max-w-[600px]"
              src="assets/profile-image.jpg"
            />
          </div>
        ) : (
          <img
            alt="profile"
            className="z-10 w-full max-w-[400px] rounded-t-[400px] md:max-w-[600px]"
            src="assets/profile-image.jpg"
          />
        )}
      </div>

      {/* MAIN TEXT */}
      <div className="z-30 basis-2/5 mt-12 md:mt-32">
        {/* HEADINGS */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className=" lg:text-[42px] text-4xl  font-playfair z-10 text-center md:text-start">
            MH.Anwar {/*color in my last name */}
            <span className=" xs:font-semibold z-30 lg:text-[42px] text-4xl">
              Kashlan
            </span>
          </p>

          <p className="mt-14 mb-7 text-xl text-center md:text-start ">
            I'm a diligent {/*color in landing screen */}
            <span className="  text-secondary-highlight">
              {" "}
              Front-End Developer{" "}
            </span>
            based in Syria, I'm passionate and dedicated to my work
          </p>
        </motion.div>

        {/* CALL TO ACTIONS */}
        <motion.div
          className="flex mt-5 justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          {/*color in btns in landing screen */}
          <a
            className=" bg-secondary-highlight  rounded-sm py-3 px-7 font-semibold
              hover:bg-primary-highlight  transition duration-500"
            href={CV}
            download
          >
            Download CV
          </a>
          <AnchorLink
            className="rounded-r-sm  bg-secondary-highlight py-0.5 pr-0.5"
            onClick={() => setSelectedPage("contact")}
            href="#contact"
          >
            <div className=" bg-[#222] hover:text-secondary-highlight transition duration-500 w-full h-full flex items-center justify-center px-10 font-playfair">
              Let's talk.
            </div>
          </AnchorLink>
        </motion.div>

        <motion.div
          className="flex mt-5 justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <SocialMediaIcons />
        </motion.div>
      </div>
    </section>
  );
};

export default Landing;
