import { useState } from "react";

function Work() {
  const data = [
    {
      company: "Caravel.Tech",
      role: "SDE Intern ",
      duration: "June  2022  -  July 2023",
      description: [
        "Contributing  and maintaining ed-tech app. I am responsible for developing user interface and Business-Logic with proper state-management using Provider and Riverpod with MVC architecture.",
        "Integrated 50+ Restful APIs by following best practices which includes Authentication (Login, Signup, OTP, Reset), and also integrated proper Test taking environment.",
        "with apk signing and made app ready for release and launched to production : ",
      ],
    },
    {
      company: "Plane",
      role: "SDE Intern ",
      duration: "August  2023  -  Present",
      description: [
        "Contributing to the development of Plane, an open-source software tool for efficient issue management, sprint planning, and streamlined product roadmaps.",
        "Participating in code reviews, identifying and resolving issues to maintain code quality and efficiency, adhering to best practices and coding standards.",
        "Participated in the transition of Plane software into an open-source project, enabling collaborative contributions from the global development community : ",
      ],
    },
  ];
  const [currIndex, setIndex] = useState(0);
  return (
    <div className="bg-primaryColor pb-[200px] pt-[100px]" id="Experience">
      <div className="flex font-sans md:max-w-[640px] md:mx-auto mx-[25px] text-lightSlate md:text-[28px] text-[24px] font-bold items-center">
        Where I've Worked
        <div className="h-[0.5px] ml-[15px] bg-darkSlate w-1/4 sm:w-[200px]"></div>
      </div>
      <div className="md:mx-auto  md:max-w-[640px] mx-[25px] mt-[50px] md:flex">
        <div className="flex md:flex-col">
          {data.map((item, index) => {
            return (
              <div
                key={index}
                className={
                  "hover:cursor-pointer mb-[10px] text-[15px] max-w-fit h-[43px] py-[10px] px-[20px] border-l-[2px] rounded-sm hover:text-secondaryColor hover:bg-hoverTeal" +
                  (currIndex === index
                    ? " border-l-[3px] text-secondaryColor border-l-secondaryColor"
                    : " border-l-gray-400 border-l-[1.5px] text-gray-400")
                }
                onClick={() => {
                  setIndex(index);
                }}
              >
                {item.company}
              </div>
            );
          })}
        </div>

        <div className="md:ml-[20px] sm:mt-0 mt-[10px]">
          <h1 className="text-lightSlate text-[19px] font-medium inline">
            {data[currIndex].role}
          </h1>
          <h1 className="text-secondaryColor text-[19px] font-medium inline">
            @
          </h1>
          <a
            href="https://caravel.tech"
            rel="noopener noreferrer"
            target="_blank"
          >
            <h1 className="text-secondaryColor text-[19px] font-medium inline ml-[4px] hover:underline ">
              {data[currIndex].company}
            </h1>
          </a>
          <h1 className="text-lightSlate text-[14px] mb-[15px] sm:mb-[25px]">
            {data[currIndex].duration}
          </h1>
          <ul className="ml-[15px]">
            {data[currIndex].description.map((item, index) => {
              return (
                <li
                  key={index}
                  className="text-darkSlate list-disc mb-[10px] marker:text-secondaryColor list-outside"
                >
                  {index === 2 ? (
                    <div>
                      <h1 className="text-darkSlate ">
                        {item}
                        <a
                          rel="noopener noreferrer"
                          target="_blank"
                          href={
                            currIndex == 0
                              ? "https://play.google.com/store/apps/details?id=com.topall.app&pli=1"
                              : "https://github.com/makeplane/plane-mobile"
                          }
                          className="text-secondaryColor hover:underline "
                        >
                          {currIndex == 0 ? "playstore" : "github"}
                        </a>
                      </h1>
                    </div>
                  ) : (
                    item
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Work;
