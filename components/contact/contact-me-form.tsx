import React from "react";

const ContactMeForm = () => {
  return (
    <div className="bg-[#235FE7] py-8 px-20 rounded-3xl w-[100%]">
      <label className="text-white text-base font-paragraph block">Name</label>
      <input
        type="text"
        name="name"
        placeholder="John Doe"
        className="w-full rounded-xl p-2.5 bg-white my-2 font-paragraph font-medium text-sm outline-none"
      />

      <label className="text-white text-base font-paragraph block mt-4">
        Email
      </label>
      <input
        type="text"
        name="email"
        placeholder="john@gmail.com"
        className="w-full rounded-xl p-2.5 bg-white my-2 font-paragraph font-medium text-sm outline-none"
      />

      <label className="text-white text-base font-paragraph block mt-4">
        Phone
      </label>
      <input
        type="text"
        name="phone"
        placeholder="+91 9111111111"
        className="w-full rounded-xl p-2.5 bg-white my-2 font-medium text-sm outline-none font-paragraph"
      />

      <label className="text-white text-base font-paragraph block mt-4">
        Message
      </label>
      <textarea
        rows={5}
        name="message"
        placeholder="How can I help you?"
        className="w-full rounded-xl p-2 bg-white my-2 font-paragraph font-medium text-sm outline-none"
      />
      <button
        type="submit"
        className="w-full font-raleway rounded-xl py-2.5 bg-white my-4 text-custom-primary-200 font-bold"
      >
        Send Message
      </button>
    </div>
  );
};

export default ContactMeForm;
