const MyNavegacion = () => {
    return (
      <>
        <nav className="flex lg:w-2/5 flex-wrap items-center text-white text-sm md:text-base md:ml-auto">
          <a className="mr-5 hover:text-[#e0de90] font-medium cursor-pointer" href="#home">Home</a>
          <a className="mr-5 hover:text-[#e0de90] font-medium cursor-pointer" href="#services">Services</a>
          <a className="mr-5 hover:text-[#e0de90] font-medium cursor-pointer" href="#about_us">About us</a>
          <a className="mr-5 hover:text-[#e0de90] font-medium cursor-pointer" href="#contact">Contact</a>
        </nav>
        <div className="lg:w-2/5 inline-flex lg:justify-end md:ml-3 lg:ml-0">
          <button
            className="hidden md:inline-flex items-center bg-transparent border-2 py-1 px-3 focus:outline-none hover:text-[#5b4b45] font-medium hover:bg-white rounded-lg text-white text-base mt-4 md:mt-0"
          >
            Buy now
          </button>
        </div>
      </>
    );
  };
  
  export default MyNavegacion;
  