function Homepage() {
  return (
    <div className=" bg-primaryColor font-sans">
      <div className="h-[90vh] mx-[50px] md:mx-[15%] flex flex-col justify-center">
      <div className="font-sans text-secondaryColor mb-[20px]">Hi,  my name is</div>
      <div className="font-sans text-lightSlate md:text-[65px] text-[50px] font-bold leading-none">Lakhan Baheti.</div>
      <div className="font-sans text-darkSlate md:text-[65px] text-[50px] font-bold appearance-none">I build things for web.</div>
      <div className="font-sans text-gray-400 text-[17px] mt-[30px] lg:mr-[35%]">
        I’m a software engineer specializing in building (and occasionally
        designing) exceptional digital experiences. Currently, I’m focused on
        building accessible, human-centered products at Upstatement.
      </div>
      <button className="mr-auto mt-[50px] h-[65px] px-[25px] text-secondaryColor border-2 border-secondaryColor rounded-[4px]">
        Check out my resume!
      </button>
      </div>
    </div>
  );
}

export default Homepage;
