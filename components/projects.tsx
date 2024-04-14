import myCred from "../../public/svg/my_cred.svg";
import shopX from "../../public/svg/shopX.svg";
import fireChat from "../../public/svg/firechat.svg";
import {RedirectIcon} from "../icons";
import Image from "next/image";
var projects = [
  {
    title: "ShopX",
    image: shopX,
    description:
      "It's a fully functional e-commerce application with features like add to cart, buy now, save to favorites, save for later, order tracking, and much more.",
    technologies: [
      "Flutter",
      "Dart",
      "Firebase",
      "Material UI",
      "Provider",
      "Stripe",
    ],
    github:'https://github.com/1akhanBaheti/Ecommerce.git',
    apk:'https://drive.google.com/file/d/1UiTckI968w0xy9lAPGrJVlOalIAYWm6s/view?usp=share_link'
  },
  {
    title: "My Cred",
    image: myCred,
    description:
      "It's a Password Manager that stores passwords and sensitive information of users in an encrypted format. It also has some additional features like strong/unbeatable password generator, password strength checker, and a lot more.",
    technologies: [
      "Flutter",
      "Riverpod",
      "Dart",
      "Firebase",
      "Material UI",
      "Asymmetric Encryption",
    ],
    github:'https://github.com/1akhanBaheti/Password-Manager.git',
    apk:'https://drive.google.com/file/d/1KRk5oJonCVGeqFNbVRYtuPj1U_i7qcNn/view?usp=share_link'
  },
  {
    title: "Firechat",
    image: fireChat,
    description:
      "It's a full-fledged chat application with a personal and group chat feature that allows any media to be shared over this app. Flutter with the provider for state management & Firebase for the real-time database is used.",
    technologies: [
      "Flutter",
      "Dart",
      "Firebase",
      "Material UI",
      "Hive",
      "Realtime Communication",
    ],
    github:'https://github.com/1akhanBaheti/Chat-Application.git',
    apk:'https://drive.google.com/file/d/1rKO9cT4NpwkKWt_xz9qa-b1M7uyG9wpG/view?usp=share_link'
  },
];
function ProjectCard() {
  return projects.map((element, index) => {
    return (
      <div
        key={index}
        className="min-h-[400px] bg-primaryColor border-[1px] border-secondaryColor mx-[25px] mb-[50px] px-[35px] flex-col justify-center md:hidden flex rounded-[5px]"
      >
        <h4 className="text-white text-[28px] mt-[30px] font-bold">
          {element["title"]}
        </h4>
        <p className="text-darkSlate text-[16px] mt-[30px]">
          {element["description"]}
        </p>
        <div className="mt-[30px]">
          {element.technologies.map((element, index) => {
            return (
              <div
              key={element}
              className="border-[0px] max-w-fit bg-hoverTeal inline-block mb-[10px] border-secondaryColor rounded-[2px] text-lightSlate mr-[10px] px-[10px] py-[3px] text-[15px]">
                {element}
              </div>
            );
          })}
        </div>
        <div className="flex mb-[30px]">
          <a rel="noopener noreferrer" target="_blank" className="h-[23px] w-[23px] mt-[30px] transition-all duration-300" href={element.github} title="Github">
          {/* <GithubIcon /> */}
        </a>
        <a rel="noopener noreferrer" target="_blank" className="h-[25px] transition-all duration-300 w-[25px] ml-[30px] mt-[30px]"  href={element.apk} title="APK">
          <RedirectIcon />
        </a>
        </div>
        
      </div>
    );
  });
}
function Project() {
  return (
    <div className="bg-primaryColor pt-[100px]" id="Projects">
      <div className="flex font-sans md:w-[65%] mb-[40px] md:mx-auto mx-[25px] text-lightSlate lg:text-[28px] text-[24px] font-bold items-center">
        Some Things I’ve Built
        <div className="h-[0.5px] ml-[15px] bg-darkSlate w-1/4 lg:w-2/4"></div>
      </div>
      <div className="md:mx-[100px] xl:w-[70%] lg:mx-[150px] xl:mx-auto mt-[50px] md:flex-col md:block hidden">
        <ul>
          {projects.map((item, index) => {
            return (
              <div
                key={item.title}
                className="w-[100%] relative flex justify-items-center pb-[150px]"
              >
                <div
                  className={
                    "w-[60%] h-[350px] justify-center flex relative flex-col justify-items-center " +
                    (index % 2 === 1 ? "ml-auto" : "mr-auto")
                  }
                >
                  <Image
                    src={item.image}
                    alt={item.image}
                    className="object-cover h-auto border-[0px] rounded-[4px] border-lightNavy max-h-[350px] w-[100%] "
                  />
                </div>

                {/* <div className="absolute h-[350px] w-[60%] left-0 bg-secondaryColor opacity-10 hover:bg-transparent"></div> */}

                <div
                  className={
                    "xl:w-[40%] w-[55%] h-[350px] absolute " +
                    (index % 2 === 0
                      ? "right-0 text-right"
                      : "left-0 text-left")
                  }
                >
                  <h5 className="text-secondaryColor ">Featured Project</h5>
                  <h5 className="text-lightSlate text-[24px] mb-[20px] font-sans font-bold">
                    {item.title}
                  </h5>
                  <div
                    className={
                      "absolute  w-[120%] text-lightSlate " +
                      (index % 2 === 0 ? "right-0" : "left-0")
                    }
                  >
                    <div
                      className={
                        "bg-lightNavy py-[25px] px-[30px] rounded-[6px] text-[15px] " +
                        (index % 2 === 1 ? "text-left" : "text-right")
                      }
                    >
                      <p>{item.description}</p>
                    </div>
                    <div className="mt-[10px]">
                      {item.technologies.map((element, index2) => {
                        return (
                          <div
                          key={index2}
                          className={"border-[0px] max-w-fit inline-block mb-[5px] border-secondaryColor rounded-[2px] text-lightestSlate  py-[3px] text-[15px]" +(index%2===0?" ml-[20px]":" mr-[20px]")}>
                            {element}
                          </div>
                        );
                      })}
                      <div className={"h-[30px] flex  mb-[30px] items-center w-[70px] mt-[10px] transition-all duration-500 " + (index % 2 === 1 ? "mr-auto" : "ml-auto")}>
                        <a rel="noopener noreferrer" target="_blank" className="mr-[25px] hover:mb-[8px] transition-all h-[22px] w-[22px] duration-300" href={item.github} title="Github">
                          {/* <GithubIcon /> */}
                        </a>
                        <a rel="noopener noreferrer" target="_blank" className="hover:mb-[8px] transition-all duration-300" href={item.apk} title="APK">
                          <RedirectIcon />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </ul>
      </div>
      <ProjectCard />
    </div>
  );
}

export default Project;
