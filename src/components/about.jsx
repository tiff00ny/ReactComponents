const MyAbout = () => {
    return (
      <>
       <div className="bg-[#ffaed5] flex flex-col md:flex-row w-full md:w-1/2">
            <div className="flex flex-col justify-center md:justify-start items-center md:items-start pt-10 md:pt-6 lg:pt-10 px-16 md:px-6 lg:px-16">
                <h1 className="font-medium text-2xl mb-3 text-center md:text-start">Lorem ipsum dolor sit amet consectetur.
                </h1>
                <p class="text-center pb-5 md:pb-0 lg:pb-5 text-lg">Lorem ipsum</p>
                <button
                    class="bg-[#e0de90] text-[#5b4b45] hover:bg-black hover:bg-opacity-30 py-3 px-5 md:my-4 lg:my-0 rounded-lg font-bold">Order
                    now</button>
            </div>
         </div>

         <div className="bg-[#e0de90] flex flex-col md:flex-row w-full md:w-1/2">
            <div className="flex flex-col justify-center md:justify-start items-center md:items-start pt-10 md:pt-6 lg:pt-10 px-16 md:px-6 lg:px-16">
                <h1 className="font-medium text-2xl mb-3 text-center md:text-start">Lorem ipsum dolor sit amet consectetur.
                </h1>
                <p className="text-center pb-5 md:pb-0 lg:pb-5 text-lg">Lorem, ipsum</p>
                <button
                    className="bg-[#ffaed5] text-[#5b4b45] hover:bg-black hover:bg-opacity-30 py-3 px-5 md:my-4 lg:my-0 rounded-lg font-bold">Order
                    now</button>
            </div>
           </div>
      </>
    );
  };
  
  export default MyAbout;