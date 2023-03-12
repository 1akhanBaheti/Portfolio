import { useState } from "react";

function Work() {
  const data = [
  {
'company':' Caravel.Tech',
'role':'SDE Intern ',
'duration':'June  2022  -  Present',
'description':[
  'Write modern, performant, maintainable code for a diverse array of client and internal projects',
  'Work with a variety of different languages, platforms, frameworks, and content management systems such as JavaScript, TypeScript, Gatsby, React, Craft, WordPress, Prismic, and Netlify',
  'Communicate with multi-disciplinary teams of engineers, designers, producers, and clients on a daily basis'
]
}
];
  const [currIndex,setIndex]=useState(0);
  return (
    <div className="bg-primaryColor h-[100vh]">
      <div className="flex font-sans max-w-[640px] mx-auto text-lightSlate text-[28px] font-bold items-center">
        Where I’ve Worked
        <div className="h-[2px] ml-[15px]  bg-lightSlate box-border"></div>
      </div>
      <div className="mx-auto max-w-[640px] mt-[50px] flex">
     
           {data.map((item,index) => {
          return (
            <div key={index} className={"hover:cursor-pointer text-[15px] max-w-fit h-[43px] py-[10px] px-[20px] border-l-[2px] rounded-sm hover:text-secondaryColor hover:bg-hoverTeal"+ (currIndex===index?" border-l-[3px] text-secondaryColor border-l-secondaryColor":" border-l-gray-400 border-l-[1.5px] text-gray-400") } onClick={()=>{setIndex(index)}}>
              {item.company}
            </div>
          );
        })}
        
       
        <div className="ml-[20px]">
         <h1 className="text-lightSlate text-[19px] font-medium inline">{data[currIndex].role}</h1>
         <h1 className="text-secondaryColor text-[19px] font-medium inline">@</h1>
        <a href="google.com" >
          <h1 className="text-secondaryColor text-[19px] font-medium inline hover:underline ">{data[currIndex].company}</h1>
          </a> 
        <h1 className="text-lightSlate text-[14px] mb-[25px]">{data[currIndex].duration}</h1>
         <ul className="ml-[15px]">
           {data[currIndex].description.map((item,index) => {
          return (
            <li key={index} className="text-darkSlate list-disc mb-[10px] list-outside">
              {item}
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
