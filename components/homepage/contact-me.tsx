import React from "react";

export const ContactMeSection = () => {
  return (
    <div className="flex flex-col items-center h-full w-full mx-auto py-20">
      <h1 className="font-heading font-bold text-5xl text-custom-text-100 text-center w-full xl:max-w-4xl">
        Have an idea in mind? Let’s build cool thing together
      </h1>
      <p className="my-6 text-base font-paragraph text-custom-text-200">
        Feel free to get in touch if you need help in my area of expertise.
      </p>
      <a
        href={""}
        rel="noopener noreferrer"
        target="_blank"
        className="mx-auto flex items-center border border-custom-border-200 hover:bg-custom-text-100 text-base font-bold font-raleway mt-10 h-[65px] px-[25px] text-custom-text-100 hover:text-custom-background-100 rounded-lg"
      >
        LET’S {"  "} COLLABORATE
      </a>
    </div>
  );
};
