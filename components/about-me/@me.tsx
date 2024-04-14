import Image from "next/image";
// assets
import profile from "@/public/profile.jpg";
// constants
import { TECHSTACK } from "@/constants";

function About() {
  return (
    <div className="min-h-[100vh] pb-[200px] pt-[100px] " id="About">
      <div className="text-white">
        <div className="flex font-sans lg:max-w-[850px] md:w-[80%] lg:mx-auto mx-[25px] md:mx-auto text-lightSlate md:text-[28px] text-[24px] font-bold items-center">
          About me
          <div className="h-[0.5px] ml-[15px] bg-darkSlate w-2/4 sm:w-[1]"></div>
        </div>
        <div className="flex flex-col md:flex-row md:w-[80%] lg:max-w-[850px] md:mx-auto lg:mx-auto mx-[25px]">
          <div className="w-[100%] md:w-[70%] md:mr-[50px]">
            {/* <div className="flex text-gray-300 text-[30px] mb-[50px] items-center font-bold">
        About me
        <div className="h-[1px] bg-darkSlate w-[50%] ml-[20px]"></div>
      </div> */}
            <p className="text-darkSlate text-[17px] mt-[50px] text-justify">
              Hello! My name is Lakhan, and I enjoy creating things that live on
              the internet. My interest in app development started in 2020 when
              I pursued a BTech in computer science and learned about
              programming languages. Then I tried native Android Development.
              Then, after exploring some more new technologies to develop mobile
              apps, I finally chose Flutter.
              <br />
              <br />
              Fast-forward to today, learning new technologies to build things
              for the web and exploring backend stuff.
              <br />
              <br /> Here are a few technologies I’ve been working with
              recently:
            </p>
            <div className="flex mt-[15px] ml-[15px] text-darkSlate">
              <ul className="mr-[100px] list-disc marker:text-secondaryColor">
                {TECHSTACK.map((techstack) => {
                  return TECHSTACK.indexOf(techstack) < TECHSTACK.length / 2 ? (
                    <li key={techstack}>{techstack}</li>
                  ) : null;
                })}
              </ul>
              <ul className="list-disc marker:text-secondaryColor">
                {TECHSTACK.map((techstack) => {
                  return TECHSTACK.indexOf(techstack) >=
                    TECHSTACK.length / 2 ? (
                    <li key={techstack}>{techstack}</li>
                  ) : null;
                })}
              </ul>
            </div>
          </div>
          <div className="mt-[60px] mx-auto md:mx-0">
            <Image src={profile} alt="Avatar" height={350} width={350} />
          </div>
        </div>
      </div>
    </div>
  );
}
export default About;
