import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import Button from "./Button";

function Home() {
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const handleScrolltoProjectSection = () => {
    const targetElement = document.querySelector("#project");
    if (targetElement) {
      const offset =
        targetElement.getBoundingClientRect().top + window.scrollY - 50;
      window.scrollTo({
        top: offset,
        behavior: "smooth",
      });
    }
  };
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={textVariants}
      transition={{ duration: 1, delay: 0.6 }}
      className="xs:h-auto w-screen sm:h-[70vh] lg:h-screen sm:flex  bg-hero-bg bg-cover mix-blend-lighten"
      id="home"
    >
      <div className="lg:w-1/2  sm:h-full xs:w-full xs:h-full   flex flex-col justify-center items-center">
        <div className=" lg:w-3/5 sm:w-4/5 lg:h-1/2 sm:py-10 sm:h-2/3  xs:h-full xs:w-full xs:py-20 xs:px-4">
          <h1 className=" sm:text-5xl xs:text-4xl font-extrabold text-white">
            Hey ,I'm <span className=" text-orange-500">Anuj</span>
          </h1>
          <p className="sm:my-5 text-white text-xl">A Full Stack Developer</p>
          <p className="text-white">
            An ambitious Full Stack Developer who is comfortable working with
            both front-end and back-end technologies. 1200+ hours of coding and
            hands-on experience in developing various Web-Apps and programs MERN
            stack. Looking forward to working as an accountable and competent
            employee in an exciting tech company.
          </p>
          <Button
            onClick={handleScrolltoProjectSection}
            text="Projects"
            icon={<FaArrowRight className="ml-3" />}
            color="bg-violet-600"
          />
        </div>
      </div>
      <div className="xs:hidden lg:block lg:w-1/2 lg:h-full xs:w-full xs:h-1/2 "></div>
    </motion.div>
  );
}

export default Home;
