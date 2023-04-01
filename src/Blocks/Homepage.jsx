import { resumeDrive } from "../constants";
function Homepage() {
  return (
    <div className=" bg-primaryColor font-sans pt-[100px]">
      <div className="mx-[25px] h-[100vh] pb-[150px] lg:mx-[15%] md:mx-[80px] flex flex-col justify-center ">
        <div className=" text-secondaryColor tracking-[0.5px] text-hover mb-[20px]">
          Hi, my name is
        </div>
        <div className=" text-lightestSlate tracking-[0.3px] lg:text-[65px] sm:text-[50px] text-[38px] font-bold mb-[4px] leading-none">
          Lakhan Baheti.
        </div>
        <h6 className=" font-extrabold text-darkSlate tracking-[0.2px] lg:text-[65px] sm:text-[45px] text-[38px] lg:leading-[65px] sm:leading-[50px] leading-[42px] md:mr-0 mr-[25px] mt-[8px]">
          I build things for web & mobile.
        </h6>
        <div className=" text-darkSlate md:text-[17px] mt-[25px] lg:mr-[35%]">
          I’m a 20 year old undergraduate computer sceince student from India
          pursuing BTech at the SSIPMT, Raipur. I’m passionate about building
          apps and learning new technologies. Currently, I’m focused on building
          great products at{" "}
          <a
            target="_blank" rel="noopener noreferrer"
            className="text-secondaryColor transition-all ease-in duration-500 hover:underline hover:transition-all hover:duration-700"
            href="https://caravel.tech/"
          >
            Caravel.Tech
          </a>
        </div>
        <a href={resumeDrive} rel="noopener noreferrer" target="_blank" className="mr-auto flex items-center hover:bg-hoverTeal mt-[50px] h-[65px] px-[25px] text-secondaryColor border-2 border-secondaryColor rounded-[4px]">
          Check out my resume!
        </a>
      </div>
    </div>
  );
}

export default Homepage;
