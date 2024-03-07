import { motion } from "framer-motion";
function GithubSection() {
  const variants = {
    visible: {
      opacity: 1,
      scale: 1,
    },
    hidden: {
      opacity: 0,
      scale: 0.5,
    },
  };
  return (
    <div className="xs:h-auto xs:w-screen ">
      <h1 className=" xs:h-[10vh] lg:h-32 flex justify-center items-center sm:text-4xl xs:text-2xl text-white">
        Github Status
      </h1>
      <div className="xs:h-[90vh] lg:h-[80vh] lg:w-full flex xs:flex-col lg:flex-row">
        <div className="xs:h-1/2 xs:w-full lg:h-full  lg:w-1/2">
          <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 1 }}
            className="w-full h-1/2 flex items-center justify-center xs:p-2"
          >
            <img
              src="https://github-readme-stats-git-masterrstaa-rickstaa.vercel.app/api?username=anujrawat22&&show_icons=true&theme=tokyonight"
              alt="gitstat"
              className="w-full h-full object-contain"
            />
          </motion.div>
          <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 1, delay: 0.25 }}
            className="w-full h-1/2 flex items-center justify-center xs:p-2"
          >
            <img
              src="https://github-readme-streak-stats.herokuapp.com?user=anujrawat22&&show_icons=true&theme=tokyonight"
              alt="gitstreak"
              className="w-full h-full object-contain"
            />
          </motion.div>
        </div>
        <motion.div
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 1 }}
          className="xs:h-1/2 xs:w-full lg:h-full lg:w-1/2 flex items-center justify-center lg:p-5 xs:px-2"
        >
          <img
            src="https://github-readme-stats-git-masterrstaa-rickstaa.vercel.app/api/top-langs/?username=anujrawat22&&show_icons=true&theme=tokyonight"
            className="w-full h-full object-contain"
            alt="lang"
          />
        </motion.div>
      </div>
      <div className="w-full px-7 py-2">
        <img
          src="https://github-readme-activity-graph.vercel.app/graph?username=anujrawat22&theme=react-dark"
          alt="chart"
          className="w-full h-full"
        />
      </div>
    </div>
  );
}

export default GithubSection;
