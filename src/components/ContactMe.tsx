import { ChangeEvent, FormEvent, useState } from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";
import { FaWhatsapp } from "react-icons/fa";

interface EmailData {
  name: string;
  email: string;
  message: string;
}

function ContactMe() {
  const [isdisabled, setIsDisabled] = useState(false);
  const [mailContent, setMailContent] = useState<EmailData>({
    name: "",
    email: "",
    message: "",
  });
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const loader = toast.loading("Sending Message");
    setIsDisabled(true)
    const templateParams = {
      from_name: mailContent.name,
      from_email: mailContent.email,
      to_name: "Anuj",
      message: mailContent.message,
    };

    emailjs
      .send(
        import.meta.env.VITE_YOUR_SERVICE_ID,
        import.meta.env.VITE_YOUR_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(() => {
        toast.dismiss(loader);
        toast.success("Message Sent");
      })
      .catch((error) => {
        console.log(error);
        toast.dismiss();
      })
      .finally(() => {
        setMailContent({ name: "", email: "", message: "" });
        setIsDisabled(false)
      });
  };

  const handleValueChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setMailContent({ ...mailContent, [name]: value });
  };

  const handletextAreaChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setMailContent({ ...mailContent, message: event.target.value });
  };
  return (
    <div className="h-[80vh] w-screen my-20 xs:px-5 sm:px-0" id="contact">
      <Toaster position="bottom-right" reverseOrder={false} />
      <h1 className=" xs:h-[15%]  flex justify-center items-center  text-white text-4xl ">
        Contact Me
      </h1>
      <div className=" xs:h-[85%] xs:w-5/6 lg:w-1/3 sm:w-1/2 flex xs:flex-col flex-col   mx-auto">
        <div className="xs:w-full h-auto bg-slate-50 shadow-2xl rounded-xl px-5 xs:px-2 py-4 border">
          <form
            className="w-full h-full flex flex-col justify-around"
            onSubmit={(e) => handleSubmit(e)}
          >
            <input
              type="text"
              placeholder="Name"
              className=" focus:border-b-2 border-violet-500  focus:outline-none w-full xs:h-14 h-10 px-4 my-3 shadow-md rounded-lg"
              value={mailContent.name}
              name="name"
              onChange={handleValueChange}
              required
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              className=" focus:border-b-2 border-violet-500 focus:outline-none w-full xs:h-14 h-10 px-4 shadow-md rounded-lg my-3"
              onChange={handleValueChange}
              value={mailContent.email}
              required
            />
            <textarea
              placeholder="Write a message"
              className=" focus:border-b-2 border-violet-500 focus:outline-none w-full h-32 px-4 shadow-md rounded-lg my-3"
              name="message"
              value={mailContent.message}
              onChange={handletextAreaChange}
              required
            ></textarea>
            <input
              type="submit"
              value="Send"
              className="w-full h-12 border rounded-md bg-violet-500 text-white text-xl hover:bg-violet-700 cursor-pointer disabled:bg-slate-400 my-3"
              disabled={isdisabled}
            ></input>
          </form>
        </div>
        <div className="flex text-4xl  text-white justify-around xs:py-5   xs:w-full cursor-pointer h-1/6">
          <a href="mailto:anuj22rawat20@gmail.com">
            <MdEmail />
          </a>
          <a
            href="https://www.linkedin.com/in/anuj-rawat-abb163219/"
            target="_blank"
          >
            <FaLinkedin />
          </a>
          <a href="https://github.com/anujrawat22" target="_blank">
            <FaGithub />
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=9639068669"
            target="_blank"
          >
            <FaWhatsapp />
          </a>
        </div>
      </div>
    </div>
  );
}

export default ContactMe;
