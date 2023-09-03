import LineGradient from "../components/LineGradient";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import VerifiedIcon from "@mui/icons-material/Verified";

const MySkills = () => {
  const isAboveLarge = useMediaQuery("(min-width: 1060px)");
  return (
    <section id="skills" className="pt-10 pb-24">
      {/* HEADER AND IMAGE SECTION */}
      <div className="md:flex md:justify-between md:gap-16 mt-32">
        <motion.div
          className="md:w-1/3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="font-playfair font-semibold text-4xl mb-5">
            MY <span className="  text-secondary-highlight">SKILLS</span>
          </p>
          <LineGradient width="w-1/3" />
          <p className="mt-10 mb-7 text-xl">
            I'm improving my experience every day, this journey will never end.
          </p>
        </motion.div>

        <div className="mt-16 md:mt-0">
          {isAboveLarge ? (
            <div
              className="relative z-0 ml-20 before:absolute before:-top-10 before:-left-10
              before:w-full before:h-full before:border-2 before:border-secondary-highlight before:z-[-1]"
            >
              <img
                alt="skills"
                className="z-10"
                src="assets/skills-image.png"
              />
            </div>
          ) : (
            <img alt="skills" className="z-10" src="assets/skills-image.png" />
          )}
        </div>
      </div>

      {/* SKILLS */}
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
        <div className=" grid grid-cols-1 md:w-[55%] sm:w-3/4 xs:w-10/12 mt-14 mx-auto">
          <div className=" md:py-10 md:px-20 xxs:py-8 xxs:px-6 sm:p-8 sm:my-0 sm:mx-auto md:m-0 rounded-3xl border-[1px] border-solid border-transparent ">
            <h3 className=" text-center md:text-2xl sm:text-xl mb-9 text-secondary-highlight font-playfair">
              Front-End Development
            </h3>
            <div className=" grid md:grid-cols-3 md:p-0 sm:p-4 xxs:grid-cols-2 gap-10">
              <article className=" flex gap-4">
                <VerifiedIcon className=" mt-1.5 text-secondary-highlight" />
                <div>
                  <h4>Html</h4>
                  <small className="text-lig text-primary-highlight">
                    Experience
                  </small>
                </div>
              </article>
              <article className="flex gap-4">
                <VerifiedIcon className=" mt-1.5  text-secondary-highlight" />
                <div>
                  <h4>Css</h4>
                  <small className="text-lig text-primary-highlight">
                    Upper Intermediate
                  </small>
                </div>
              </article>
              <article className="flex gap-4">
                <VerifiedIcon className=" mt-1.5 text-secondary-highlight" />
                <div>
                  <h4>Sass</h4>
                  <small className="text-lig text-primary-highlight">
                    Basic
                  </small>
                </div>
              </article>
              <article className="flex gap-4">
                <VerifiedIcon className=" mt-1.5 text-secondary-highlight" />
                <div>
                  <h4>JavaScript</h4>
                  <small className="text-lig text-primary-highlight">
                    Intermediate
                  </small>
                </div>
              </article>
              <article className="flex gap-4">
                <VerifiedIcon className=" mt-1.5 text-secondary-highlight" />
                <div>
                  <h4>Typescript</h4>
                  <small className="text-lig text-primary-highlight">
                    Intermediate
                  </small>
                </div>
              </article>
              <article className="flex gap-4">
                <VerifiedIcon className=" mt-1.5 text-secondary-highlight" />
                <div>
                  <h4>Bootstrap</h4>
                  <small className="text-lig text-primary-highlight">
                    Intermediate
                  </small>
                </div>
              </article>
              <article className="flex gap-4">
                <VerifiedIcon className=" mt-1.5 text-secondary-highlight" />
                <div>
                  <h4>React js</h4>
                  <small className="text-lig text-primary-highlight">
                    Intermediate
                  </small>
                </div>
              </article>
              <article className="flex gap-4">
                <VerifiedIcon className=" mt-1.5 text-secondary-highlight" />
                <div>
                  <h4>Tailwind & Material UI</h4>
                  <small className="text-lig text-primary-highlight">
                    intermediate
                  </small>
                </div>
              </article>
              <article className="flex gap-4">
                <VerifiedIcon className=" mt-1.5 text-secondary-highlight" />
                <div>
                  <h4>Git & GitHub</h4>
                  <small className="text-lig text-primary-highlight">
                    Basic
                  </small>
                </div>
              </article>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default MySkills;
