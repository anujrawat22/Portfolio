import Button from "./Button";
import { MdOutlineArrowOutward } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import ImageCarousel from "./ImageCarousel";
import lmsLandingPage from "../assets/Screenshot (316).png";
import lmsDashboard from "../assets/Screenshot (317).png";
import lmsAddcourse from "../assets/Screenshot (318).png";
import hairdocmens from "../assets/Screenshot (176).png";
import hairDocLandingPage from "../assets/Screenshot (319).png";
import qrLandingPage from "../assets/Screenshot (162).png";
import scanQR from "../assets/Screenshot (320).png";
import blogsignUp from "../assets/Screenshot (322).png";
import blogLogIn from "../assets/Screenshot (321).png";
const Projects = [
  {
    name: "LMS",
    description:
      "This is a Learning Management System where we can create courses having multiple contents such as images ,  videos , gdrive videos . The LMS is integrated with DRM services such as VideoCipher to prevent content piracy.",
    Features:
      " Signup | Login | Admin Dashboard | Courses CRUD | DRM Protection | User CRUD",
    TechStack: " React.js | Node.js | Express.js | MongoDB | MUI | VideoCipher",
    Live: "https://weak-lime-tadpole-hat.cyclic.app",
    Github: "https://github.com/anujrawat22/LMS-backend",
    images: [lmsLandingPage, lmsDashboard, lmsAddcourse],
  },
  {
    name: "Blog App",
    description:
      "This is a blog app where an author can create and delete his blogs and a user can see and comment on blogs of various authors",
    Features: " Signup | Login | Blog CRUD | Comment Feature",
    TechStack: " React.js | Node.js | Express.js | MongoDB | MUI | Redux",
    Live: "https://equity-soft-assignment.vercel.app/",
    Github: "https://github.com/anujrawat22/EquitySoft_assignment",
    images: [blogLogIn, blogsignUp],
  },
  {
    name: "Hair Doc",
    description:
      "Hair Doc is an Online Booking Platform where you can book appointments for various services like hair cutttng & styling,hair treatment and beard styling for Mens and Hair Styling and coloring for womens",
    Features: " Signup | Login | Slot Booking ",
    TechStack: " React.js | Node.js | Express.js | MongoDB | MUI | ",
    Live: "https://hair-doc.vercel.app/",
    Github: "https://github.com/anujrawat22/HairDoc",
    images: [hairDocLandingPage, hairdocmens],
  },
  {
    name: "QR Hub",
    description:
      "QrHub is an online QR code generator and QR scanner website . A user can generate QR and Scan QR here.",
    Features: " Signup | Login | QR generation ",
    TechStack: " Html | Css | Javascript",
    Live: "https://cool-chebakia-8d808e.netlify.app/",
    Github: "https://github.com/anujrawat22/QrHub",
    images: [qrLandingPage, scanQR],
  },
];

function MyProjects() {
  const handleLiveLink = (link: string) => {
    window.open(link, "blank");
  };

  const handleGithubLink = (link: string) => {
    window.open(link, "blank");
  };
  return (
    <div className=" h-auto bg-violet-300" id="project">
      <h1 className=" xs:h-20 sm:h-32 flex justify-center items-center sm:text-4xl xs:text-2xl text-violet-900">
        My Work
      </h1>
      <div className=" lg:w-5/6 xs:w-full mx-auto h-auto lg:p-20 xs:p-2">
        {Projects.map((project, index) => (
          <div
            className=" xs:h-auto bg-violet-800 px-5 py-5 rounded-xl shadow-2xl flex xs:flex-col sm:flex-row items-center justify-center xs:mb-10 sm:mb-32"
            key={index}
          >
            <ImageCarousel images={project.images} />
            <div className=" sm:w-1/2 xs:w-full  sm:h-full  xs:h-1/2  text-white sm:px-5 sm:py-2 xs:px-0">
              <h1 className="text-center sm:text-3xl sm:py-2 xs:text-xl">
                {project.name}
              </h1>
              <p className="xs:text-xs lg:text-base">{project.description}</p>
              <p className="py-2 xs:text-xs sm:text-sm">
                <span className="xs:text-sm sm:text-xl">Features:</span>
                {project.Features}
              </p>
              <p className=" py-2 xs:text-xs sm:text-sm">
                <span className="xs:text-sm sm:text-xl">Tech Stack:</span>
                {project.TechStack}
              </p>
              <div className="sm:w-3/4 flex justify-around mx-auto xs:w-full">
                <Button
                  onClick={() => handleLiveLink(project.Live)}
                  color="bg-violet-400"
                  text="Live"
                  icon={<MdOutlineArrowOutward className="ml-3" />}
                />
                <Button
                  onClick={() => handleGithubLink(project.Github)}
                  color="bg-violet-400"
                  text="Github"
                  icon={<FaGithub className="ml-3" />}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyProjects;
