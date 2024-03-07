import { FaHome } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { GiSkills } from "react-icons/gi";
import { GrProjects } from "react-icons/gr";
import { IoMdContacts } from "react-icons/io";
import { IoDocumentTextOutline } from "react-icons/io5";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useState, MouseEvent } from "react";
import pdf from '../assets/Anuj_Rawat_Resume.pdf'

interface NavItem {
  name: string;
  Icon: JSX.Element;
  href: string;
}
const items: NavItem[] = [
  {
    name: "Home",
    Icon: <FaHome />,
    href: "#home",
  },
  {
    name: "About",
    Icon: <FaUser />,
    href: "#about",
  },
  {
    name: "Skills",
    Icon: <GiSkills />,
    href: "#tech",
  },
  {
    name: "Projects",
    Icon: <GrProjects />,
    href: "#project",
  },
  {
    name: "Contact Me",
    Icon: <IoMdContacts />,
    href: "#contact",
  },
  {
    name: "Resume",
    Icon: <IoDocumentTextOutline />,
    href: "https://drive.google.com/file/d/1l_e9b4sT-z2i_YPV_XtHilOKQirblUS9/view",
  },
];
function Navbar() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const navVariables = {
    visible: { y: 0 },
    hidden: { y: "-200%" },
  };

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0;

    if (latest > previous && latest > 100) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  const handleItemClick = (
    event: MouseEvent<HTMLAnchorElement>,
    item: NavItem
  ) => {
    event.preventDefault();
    if (item.name !== "Resume") {
      const targetElement = document.querySelector(item.href);
      if (targetElement) {
        const offset =
          targetElement.getBoundingClientRect().top + window.scrollY - 50;
        window.scrollTo({
          top: offset,
          behavior: "smooth",
        });
      }
    } else {
      window.open(item.href, "_blank");
      // Download the resume file
      const downloadLink = document.createElement("a");
      downloadLink.href = pdf;
      downloadLink.download = "resume.pdf"; // You can specify the desired filename
      downloadLink.click();
    }
  };
  return (
    <motion.div
      variants={navVariables}
      initial="visible"
      transition={{ duration: 0.35, ease: "easeInOut" }}
      animate={
        window.innerWidth >= 576 ? (hidden ? "hidden" : "visible") : "visible"
      }
      className="h-16 sm:w-screen lg:w-5/6  fixed xs:bottom-0 sm:top-5 sm:rounded-full sm:inset-0  shadow-md bg-slate-300 sm:bg-opacity-10 xs:bg-violet-900 flex  xs:w-screen z-10 mx-auto overflow-hidden"
    >
      <ul className=" flex justify-between w-full items-center h-full">
        {items.map((item, index) => (
          <li
            key={index}
            className=" cursor-pointer flex items-center  hover:bg-slate-100 text-slate-200 hover:text-violet-950 ease-out duration-300  h-full w-1/6 justify-center"
          >
            <a
              href={item.href}
              className="w-full h-full flex justify-center items-center"
              onClick={(e) => handleItemClick(e, item)}
            >
              {item.Icon}
              <span className="xs:hidden sm:block md:text-base ml-3 sm:text-xs">
                {item.name}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

export default Navbar;
