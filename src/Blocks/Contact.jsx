function Contact(){
  return (
    <div className="bg-primaryColor justify-center justify-items-center items-center flex-col flex px-[20px] pt-[200px]" id="Contact">
    <div className="mx-auto max-w-[640px] text-center">
    <h5 className="text-secondaryColor text-[18px]">what's Next ?</h5>
    <h2 className="text-lightSlate text-[46px] mt-[5px] mb-[8px] font-bold font-sans">Get In Touch</h2>
    <p className="text-darkSlate text-[17px]">
    I’m currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you!
    </p>
    <button className="border-[1.5px] hover:bg-hoverTeal border-secondaryColor py-[15px] px-[30px] rounded-[4px] mt-[50px]">
        <a href="mailto:Lakhanbaheti9@gmail.com" className="text-secondaryColor ">
            Say Hello
        </a>
        
    </button>
    </div>
<a className="text-darkSlate hover:text-secondaryColor transition-all duration-300 mb-[10px] mt-[200px] font-medium text-center font-sans text-[15px]" href="https://github.com/1akhanBaheti/Portfolio.git">Designed & Built by <br/> Lakhan Baheti</a>
</div>
  );
}

export default Contact;