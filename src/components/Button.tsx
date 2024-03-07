import { ReactNode } from "react";

interface ButtonProps {
  icon: ReactNode;
  text: string;
  color: string;
  onClick: () => void;
}
function Button({ icon, text, color, onClick }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`my-5 px-6 py-3 rounded-md hover:bg-violet-900 hover:scale-110 ease-out duration-300 text-white flex justify-between items-center ${color}`}
    >
      {text}
      {icon}
    </button>
  );
}

export default Button;
