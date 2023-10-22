import { useEffect, useState } from "react";
import menuIcon from "../../public/svg/menu.svg";
import moreIcon from "../../public/svg/more.svg";
import LinkedinIcon from "../icons/linkedin";
import GithubIcon from "../icons/github";
import LeetcodeIcon from "../icons/leetcode";
import LogoIcon from "../icons/logo";
import { resumeDrive } from "../constants";
import Link from "next/link";
import Image from "next/image";

// import {Link} from 'react-scroll';

function Navbar() {
  let [show, setShow] = useState(true);
  let [showMenu, setShowMenu] = useState(false);
  let [scrollY, setScrollY] = useState(0);
  const NavbarButton = ["About", "Experience", "Projects", "Contact"];

  useEffect(() => {
    window.addEventListener("resize", function (event) {
      if (window.innerWidth > 768) setShowMenu(false);
    });
    window.addEventListener("scroll", () => {
      if (window.scrollY < scrollY) {
        setScrollY(window.scrollY);
        // if (window.scrollY === 0) setShow(false);
        // else
        setShow(true);
      } else {
        setScrollY(window.scrollY);
        setShow(false);
      }
    });
  });
  return (
    <>
      <div
        className={
          "flex h-[100vh] w-[100%] backdrop-blur-[5px] transition-all  duration-300 fixed z-[5] " +
          (showMenu ? "ml-[0] " : "ml-[100%]")
        }
        onClick={() => setShowMenu(!showMenu)}
      >
        <div className=" h-[100vh] w-[300px] ml-auto bg-lightNavy ">
          <button
            className="h-[50px] w-[50px] absolute right-2 top-5"
            onClick={() => setShowMenu(!showMenu)}
          >
            <Image src={moreIcon} alt="logo" />
          </button>
          <div className="flex flex-col justify-center items-center h-[100vh]">
            {NavbarButton.map((item, index) => {
              return (
                <Link
                  onClick={() => setShowMenu(!showMenu)}
                  href={"#" + item}
                  key={index}
                  className="text-lightestSlate flex hover:text-secondaryColor text-[19px] mb-[50px]"
                >
                  <h2 className="text-secondaryColor mr-[4px] ">{`${index}.`}</h2>
                  {item}
                </Link>
              );
            })}
            <a rel="noopener noreferrer" target="_blank" href={resumeDrive}>
              <button className="h-[40px] hover:bg-hoverTeal w-[100px] border-[1.5px] text-secondaryColor border-secondaryColor rounded-[4px]">
                Resume
              </button>
            </a>
          </div>
        </div>
      </div>
      <nav
        className={
          "flex pl-[25px] justify-between bg-primaryColor backdrop-blur-lg  w-full transition-all duration-[400ms] items-center md:pr-[20px] fixed py-[10px] " +
          (show === true ? " z-[5] translate-y-[0%]" : " translate-y-[-100%]") +
          (scrollY !== 0 ? " shadow-2xl" : " py-[25px]")
        }
      >
        <LogoIcon />
        <ul className="flex  opacity-0  w-[0px] overflow-hidden md:opacity-100 md:min-w-fit">
          {NavbarButton.map((NavbarButton, index) => {
            return (
              <Link
                key={NavbarButton}
                className="mr-[35px] hover:cursor-pointer flex py-3 text-lightestSlate text-[15px] transition-all hover:text-secondaryColor"
                href={"#" + NavbarButton}
              >
                <h2 className="text-secondaryColor mr-[4px]">{`${index}.`}</h2>

                {NavbarButton}
              </Link>
            );
          })}

          <a
            rel="noopener noreferrer"
            target="_blank"
            href={resumeDrive}
            className="rounded-[4px] text-[15px] hover:bg-hoverTeal text-secondaryColor h-[37px] flex items-center my-auto px-[15px] border-[1px] border-secondaryColor mr-[30px]"
          >
            Resume
          </a>
        </ul>
        <button
          className="md:hidden h-[50px] w-[50px] mr-[10px] transition-all duration-300 rotate-[360] pl-auto"
          onClick={() => setShowMenu(!showMenu)}
        >
          <img
            src={menuIcon}
            className="stroke-secondaryColor"
            alt={menuIcon}
          ></img>
        </button>
      </nav>

      <div className="fixed bottom-0 lg:ml-[35px] opacity-0  md:opacity-100">
        <div className="hover:pb-[8px] flex justify-center mb-[15px] transition-all duration-200">
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.linkedin.com/in/lakhan-baheti-6045481a2"
            title="Linkedin"
          >
            <LinkedinIcon />
          </a>
        </div>

        <div className="hover:pb-[10px] h-[50px]  items-center  flex  transition-all duration-200">
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/1akhanBaheti"
            className="h-[25px] w-[25px]"
            title="Github"
          >
            <GithubIcon />
          </a>
        </div>
        <div className="hover:pb-[10px] h-[50px] items-center mb-[5px] flex  transition-all duration-200">
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://leetcode.com/1akhan__/"
            className="h-[25px] w-[25px]"
            title="Leetcode"
          >
            <LeetcodeIcon />
          </a>
        </div>

        <div className="h-[120px] w-[2px] bg-lightestSlate mx-auto mt-[20px] "></div>
      </div>

      <div className="fixed text-lightestSlate flex flex-col  justify-center items-center justify-items-center bottom-0 right-0 mr-[20px] lg:mr-[35px] opacity-0 md:opacity-100">
        <div className=" mb-[15px] text-[14px] hover:transition-all duration-500 hover:text-secondaryColor hover:mb-[25px] tracking-widest ml-[0px]">
          <a href="mailto:Lakhanbaheti9@gmail.com" style={{ writingMode: 'vertical-rl' }}>Lakhanbaheti9@gmail.com </a>
        </div>
        <div className="h-[120px] w-[2.4px] bg-lightestSlate mx-auto mt-[10px] "></div>
      </div>
    </>
  );
}

export default Navbar;
