import avatar from "../assets/resum-removebg-preview.png";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa6";
import { IoMdDownload } from "react-icons/io";
import Button from "./Button";
import pdf from "../assets/Anuj_Rawat_Resume.pdf";

function About() {
  const handleDownloadresume = () => {
    window.open(
      "https://drive.google.com/file/d/1l_e9b4sT-z2i_YPV_XtHilOKQirblUS9/view?usp=sharing",
      "_blank"
    );
    // Download the resume file
    const downloadLink = document.createElement("a");
    downloadLink.href = pdf;
    downloadLink.download = "resume.pdf"; // You can specify the desired filename
    downloadLink.click();
  };

  const handleOpenGithub = () => {
    window.open("https://github.com/anujrawat22", "_blank");
  };
  return (
    <div className=" h-screen w-screen bg-purple-300" id="about">
      <h1 className=" xs:h-[15%]  flex justify-center items-center  text-purple-900 text-4xl ">
        About Me
      </h1>
      <div className="xs:h-[85%] lg:flex">
        <motion.div
          initial={{ opacity: 0, x: -200 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className=" lg:h-full lg:w-1/2 xs:w-full xs:h-1/3 flex justify-center items-center"
        >
          <img
            src={avatar}
            alt="avatar"
            style={{ borderRadius: "50%" }}
            className="lg:h-1/2 lg:w-70 xs:h-5/6  object-contain shadow-2xl"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 200 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className=" lg:w-1/2 lg:h-full xs:h-2/3 xs:w-full flex flex-col lg:justify-center xs:justify-start xs:px-5 xs:py-10 items-center"
        >
          <div className="w-full lg:h-1/2 xs:h-full xs:px-5 sm:p-12 text-purple-900 text-center">
            <p className="font-medium">
              As a MERN stack developer, my expertise lies in creating robust,
              dynamic, and scalable web applications using React , Node.js ,
              Redux , Experss.js , PostgressSQL and MongoDB . I specialize in
              building full-stack web applications with a focus on delivering
              exceptional user experiences. I am passionate about
              creating high-quality, user-friendly web applications that solve
              real-world problems and look forward to working with you on your
              next project
            </p>
            <div className="sm:w-1/2 xs:w-full mx-auto flex items-around justify-around py-5">
              <Button
                onClick={handleDownloadresume}
                text="Resume"
                icon={<IoMdDownload className="ml-3" />}
                color="bg-purple-900"
              />

              <Button
                onClick={handleOpenGithub}
                text="Github"
                icon={<FaGithub className="ml-3" />}
                color="bg-purple-900"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default About;
