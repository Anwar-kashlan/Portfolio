import { useState } from "react";
import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";
import Certificate from "../Pdfs/Coursera CF956UNDNPLA.pdf";
import DownloadIcon from "@mui/icons-material/Download";

const Resume = () => {
  const [showInfoItem1, setShowInfoItem1] = useState(false);
  const [showInfoItem2, setShowInfoItem2] = useState(false);
  const [showInfoItem3, setShowInfoItem3] = useState(false);
  return (
    <section id="resume" className="pt-48 pb-48">
      {/* HEADINGS */}
      <motion.div
        className="md:w-2/5 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-4xl  text-secondary-highlight">
            RESUME
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-1/3" />
          </div>
        </div>
        <p className="mt-6 mb-10 font-playfair text-2xl">
          My <span className=" text-yellow">Story</span>
        </p>
      </motion.div>
      {/*Resume Items */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div className=" md:w-4/6 mx-auto mt-28">
          <h3 className=" text-center text-2xl border-b-2 border-b-solid border-b-gray-100  pb-[30px] font-playfair  text-yellow ">
            Education
          </h3>
          <div>
            {/*item 1 */}
            <div className="border-b-2 border-b-solid border-b-gray-100 relative  ">
              <div
                className="py-8 px-[30px] "
                onClick={() => setShowInfoItem1(!showInfoItem1)}
              >
                <h3 className="text-xl cursor-pointer">High school</h3>
                <span
                  style={{
                    transition: "all 1.2s cubic-bezier(0.3,0,0.3,1)",
                  }}
                  className=" bg-secondary-highlight border-2 border-solid  border-primary-highlight text-3xl shadow-sm w-12 h-12 rounded-full absolute -right-6 -bottom-6 z-10 leading-[1.3em] text-center cursor-pointer"
                >
                  {showInfoItem1 ? "-" : "+"}
                </span>
              </div>
              <div
                className={`${
                  showInfoItem1 ? " max-h-96" : "max-h-0 "
                } overflow-hidden `}
                style={{
                  paddingInline: "30px 50px",
                  transition: "all 1s ease 0s",
                }}
              >
                <div className=" flex justify-between items-center">
                  <h3 className="font-playfair xxs:text-lg xs:text-xl ss:text-2xl sm:text-[28px]">
                    Abdullah Al-Tayer
                  </h3>
                  <span className="text-[13px] text-yellow font-bold ">
                    2015-2018
                  </span>
                </div>
                <p style={{ marginBlock: "20px 30px" }}>
                  I chose to study at Abdullah Al-Tayer Vocational High School
                  for Computer Technologies because of my love for computers and
                  because I know that it will be the most important thing in the
                  future.
                </p>
              </div>
            </div>
            {/*item 2 */}
            <div className=" border-b-2 border-b-solid border-b-gray-100 relative border-r-2 border-r-solid border-r-gray-400   ">
              <div
                className="py-8 px-[30px] "
                onClick={() => setShowInfoItem2(!showInfoItem2)}
              >
                <h3 className="text-xl cursor-pointer">The University</h3>
                <span
                  style={{
                    transition: "all 1.2s cubic-bezier(0.3,0,0.3,1)",
                  }}
                  className=" bg-secondary-highlight border-2 border-solid border-primary-highlight text-3xl shadow-sm w-12 h-12 rounded-full absolute -right-6 -bottom-6 z-10 leading-[1.3em] text-center cursor-pointer"
                >
                  {showInfoItem2 ? "-" : "+"}
                </span>
              </div>
              <div
                className={` overflow-hidden ${
                  showInfoItem2 ? " max-h-96" : "max-h-0 "
                } `}
                style={{
                  paddingInline: "30px 50px",
                  transition: "all 1s ease 0s",
                }}
              >
                <div className="flex justify-between items-center">
                  <h3 className="font-playfair xxs:text-lg xs:text-xl ss:text-2xl sm:text-[28px]">
                    Applied College
                  </h3>
                  <span className=" text-[13px] text-yellow font-bold ">
                    2018-2023
                  </span>
                </div>
                <p style={{ marginBlock: "20px 30px" }}>
                  I continued my undergraduate studies at the Applied College -
                  Computer Technologies at Damascus University to complete my
                  academic career.
                </p>
              </div>
            </div>
            {/* item 3 */}
            <div className=" border-b-2 border-b-solid border-b-gray-100 relative border-r-2 border-r-solid border-r-gray-400   ">
              <div
                className="py-8 px-[30px] "
                onClick={() => setShowInfoItem3(!showInfoItem3)}
              >
                <h3 className="text-xl cursor-pointer">CoderHouse Courses</h3>
                <span
                  style={{
                    transition: "all 1.2s cubic-bezier(0.3,0,0.3,1)",
                  }}
                  className=" bg-secondary-highlight border-2 border-solid border-primary-highlight text-3xl shadow-sm w-12 h-12 rounded-full absolute -right-6 -bottom-6 z-10 leading-[1.3em] text-center cursor-pointer"
                >
                  {showInfoItem3 ? "-" : "+"}
                </span>
              </div>
              <div
                className={`${
                  showInfoItem3 ? " max-h-96" : "max-h-0 "
                } overflow-hidden `}
                style={{
                  paddingInline: "30px 50px",
                  transition: "all 1s ease 0s",
                }}
              >
                <div className="flex justify-between items-center">
                  <h3 className="font-playfair xxs:text-lg xs:text-xl ss:text-2xl sm:text-[28px]">
                    Front-End Development
                  </h3>
                  <span className="teaxt-cs text-[13px] text-yellow font-bold ">
                    +2021
                  </span>
                </div>
                <p style={{ marginBlock: "20px 30px" }}>
                  I chose to specialize in the field of web development and
                  studied many courses, and obtained a certificate in HTML, CSS
                  and Javascript for web developers from Coursera{" "}
                  <a href={Certificate} className=" text-yellow" download>
                    <DownloadIcon />
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Resume;
