import project from "../project.png";

function Project() {
  const projects = [1, 2, 3];
  return (
    <div className="bg-primaryColor">
      <div className="w-[65%] mx-auto">
        <h4 className="text-[28px] text-lightSlate inline-block font-sans font-bold">
          Some Things I’ve Built
        </h4>
        <div className="h-[1px] inline-block bg-lightSlate w-[300px] ml-[25px] my-auto"></div>
      </div>
      <div className="w-[65%]  mx-auto mt-[50px]">
        <ul>
          {projects.map((item, index) => {
            return index % 2 === 0 ? (
              <div
                key={index}
                className="w-[100%] relative justify-center flex items-center pb-[70px]"
              >
                <div className="w-[60%] h-[350px] bg-gray-400">
                  <img
                    src={project}
                    alt={project}
                    className="object-cover h-[350px] w-[100%]"
                  ></img>
                </div>
                <div className="absolute h-[350px] w-[60%] left-0 bg-secondaryColor opacity-10 hover:bg-transparent"></div>
                <div className="w-[40%] h-[350px] relative text-right">
                  <h5 className="text-secondaryColor ">Featured Project</h5>
                  <h5 className="text-lightSlate text-[24px] mb-[20px] font-sans font-bold">
                    Ecommerce Application
                  </h5>
                  <div className="absolute right-0  w-[120%] text-lightSlate">
                   <div className="bg-lightNavy py-[25px] px-[30px] rounded-[6px] text-right">
                     <p>
                      A minimal, dark blue theme for VS Code, Sublime Text,
                      Atom, iTerm, and more. Available on Visual Studio
                      Marketplace, Package Control, Atom Package Manager, and
                      npm.
                    </p>
                   </div>
                    <div className="mt-[10px] absolute right-0">
                    <p>Flutter&nbsp;&nbsp;&nbsp;&nbsp;Dart&nbsp;&nbsp;&nbsp;&nbsp;Firebase&nbsp;&nbsp;&nbsp;&nbsp;Material UI</p>
                  </div>
                   
                  </div>
                 
                </div>
              </div>
            ) : (
              <div
                key={index}
                className="w-[100%] relative justify-center flex items-center mb-[70px]"
              >
                <div className="absolute h-[350px] w-[60%] right-0 bg-secondaryColor opacity-10 hover:bg-transparent"></div>
                <div className="w-[40%] h-[350px] relative text-left">
                  <h5 className="text-secondaryColor ">Featured Project</h5>
                  <h5 className="text-lightSlate text-[24px] mb-[20px] font-sans font-bold">
                    Ecommerce Application
                  </h5>
                  <div className="absolute left-0 bg-lightNavy w-[120%] p-[25px] rounded-[6px] text-lightSlate">
                    <p>
                      A minimal, dark blue theme for VS Code, Sublime Text,
                      Atom, iTerm, and more. Available on Visual Studio
                      Marketplace, Package Control, Atom Package Manager, and
                      npm.
                    </p>
                  </div>
                </div>
                <div className="w-[60% h-[350px]">
                  <img
                    src={project}
                    alt={project}
                    className="h-[350px] w-fit"
                  ></img>
                </div>
              </div>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Project;
