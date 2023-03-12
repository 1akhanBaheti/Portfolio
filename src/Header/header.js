import logo from "../logo.svg";
import menu from "../menu.svg";
function Header() {
  const headerButton = ["About", "Experience", "Work", "Contact"];
  return (
    <>
      <nav className="flex justify-between bg-primaryColor items-center md:pr-[20px] py-[15px]">
        <img src={logo} height="75px" width="75px" alt="s"></img>
        <ul className="flex text-white opacity-0 md:opacity-100">
          {headerButton.map((headerButton) => {
            return <li key={headerButton} className="mr-[35px]">{headerButton}</li>;
          })}
        </ul>
        <button className="md:hidden h-[50px] w-[50px] mr-[10px] pl-auto">
      <img src={menu} className="stroke-secondaryColor" alt={menu}></img>
        </button>
      </nav>
      <div className="fixed bottom-0 ml-[30px] lg:ml-[50px] opacity-0 md:opacity-100">

        <img
          src={logo}
          height="35px"
          width="35px"
          alt="s"
          color="white"
          className="left-link-img"
        />
        <img
          src={logo}
          height="35px"
          width="35px"
          alt="s"
          color="white"
          className="left-link-img"
        />
        <img
          src={logo}
          height="35px"
          width="35px"
          alt="s"
          color="white"
          className="left-link-img"
        />
        <div className="h-[120px] w-[2px] bg-white mx-auto mt-[10px] "></div>
      </div>

      <div className="fixed text-gray-200 bottom-0 right-0 w-[50px] mr-[30px] lg:mr-[50px] opacity-0 md:opacity-100">
        <div className="rotate-90  mb-[190px] mx-auto text-[16px] tracking-wider ml-[5px]">Lakhanbaheti9@gmail.com</div>
        <div className="h-[120px] w-[2px] bg-gray-200 mx-auto mt-[10px] "></div>
      </div>
    </>
  );
}

export default Header;
