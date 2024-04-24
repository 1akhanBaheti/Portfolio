import Image from "next/image";
import logo from "../../public/svg/logo.svg";

function LogoIcon() {
  return (
    <a
      href="."
      className="hover:fill-hoverTeal h-[45px] w-[45px] md:ml-[40px] ml-[25px] fill-primaryColor
        "
    >
      <svg
        width="49"
        height="59"
        viewBox="0 0 49 59"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2 17.2986L23.9458 3L47 17.2986V43.7986L23.9458 56L2 43.7986V17.2986Z"
          stroke="#64FFDA"
          strokeWidth="3"
        />
        <path d="M22 20V38H33" stroke="#64FFDA" strokeWidth="3" />
      </svg>
    </a>
  );
}
export default LogoIcon;
