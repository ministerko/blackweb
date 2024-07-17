import React, { useState, useEffect } from 'react';
import {
  AiOutlinePicture,
  AiOutlineClockCircle,
  AiOutlineRead,
  AiOutlineAim,
} from 'react-icons/ai';

const App = () => {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay with setTimeout
    setTimeout(() => {
      setLoading(false); // Set loading to false after timeout
    }, 2000); // Adjust timeout duration as needed
  }, []);

  return (
    <div className="h-screen w-full bg-black p-10 ">
      {isLoading ? ( // Conditionally render loader while isLoading is true
        <div className="flex items-center justify-center mt-[400px]">
          <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-white "></div>
        </div>
      ) : (
        <div>
          <div
            className="bg-[#545454] space-y-10 flex flex-col rounded-xl opacity-20 shadow-slate-600 shadow-sm pt-5"
            style={{ height: '800px', width: '250px' } }
          >
            <div>
              <div className="flex flex-row pt-3 rounded-xl h-16 pl-5 mx-4  hover:bg-black ">
                <AiOutlineAim className="text-white text-4xl" />
                <p className="text-white text-xl mt-1 ml-4">BlackChat</p> 
              </div>
              <div className="flex flex-row pt-3 rounded-xl h-16 pl-5 mx-4  hover:bg-black ">
                <AiOutlineRead className="text-white text-4xl" />
                <p className="text-white text-xl mt-1 ml-4">Read More</p>
              </div>
              <div className="flex flex-row pt-3 rounded-xl h-16 pl-5 mx-4  hover:bg-black ">
                <AiOutlinePicture className="text-white text-4xl" />
                <p className="text-white text-xl mt-1 ml-4 ">Gallery</p>
              </div>
              <div className="flex flex-row pt-3 rounded-xl h-16 pl-5 mx-4  hover:bg-black ">
                <AiOutlineClockCircle className="text-white text-4xl" />
                <p className="text-white text-xl mt-1 ml-4">waitlist</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
