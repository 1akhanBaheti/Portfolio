import profile from "../profile.jpg"
function About() {
  var techStack = [
    "C++",
    "Dart",
    "Javascript",
    "HTML",
    "CSS",
    "Flutter",
    "Node js",
    "Express js",
    "Tailwind",
    "React",
    "Firebase",
  ];
  return (
    <div className="bg-primaryColor pb-[150px] pt-[80px]">
  <div className="text-white">
  <div className="flex flex-col md:flex-row md:mx-[21%] mx-[50px]">
 <div className="w-[100%] md:w-[70%] md:mr-[50px]">
   <div className="flex text-gray-300 text-[30px] mb-[50px] items-center font-bold">
        About me
        <div className="h-[1px] bg-darkSlate w-[50%] ml-[20px]"></div>
      </div>
        <p className="text-darkSlate text-[17px]">
          Hello! My name is Brittany and I enjoy creating things that live on
          the internet. My interest in web development started back in 2012 when
          I decided to try editing custom Tumblr themes — turns out hacking
          together a custom reblog button taught me a lot about HTML & CSS!{" "}
          <br />
          <br />
          Fast-forward to today, and I’ve had the privilege of working at an
          advertising agency, a start-up, a huge corporation, and a student-led
          design studio. My main focus these days is building accessible,
          inclusive products and digital experiences at Upstatement for a
          variety of clients. <br />
          <br />I also recently launched a course that covers everything you
          need to build a web app with the Spotify API using Node & React.   <br />
          <br /> Here
          are a few technologies I’ve been working with recently:
        </p>
        <div className="flex mt-[15px] ml-[15px] text-darkSlate">
          <ul className="mr-[100px] list-disc">
            {techStack.map((techstack) => {
              return techStack.indexOf(techstack) < techStack.length / 2 ? (
                <li key={techstack}>{techstack}</li>
              ) : null;
            })}
          </ul>
          <ul className="list-disc">
            {techStack.map((techstack) => {
            return   techStack.indexOf(techstack) >= techStack.length / 2 ? (
                <li key={techstack}>{techstack}</li>
              ) : null;
            })}
          </ul>
        </div>
      </div>
      <div className="mt-[100px]">
        <img src= {profile} height='300px' width= '350px' alt={profile}/>
        </div>
      </div>
</div>
    </div>
  );
}
export default About;
