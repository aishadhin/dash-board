import React from "react";
import { BiLocationPlus } from "react-icons/bi";

const AllServices = () => {
  return (
    <div className="w-full mx-auto">
      <div className="bg-blue py-12 container mx-auto">
        <div className="px-6">
          <h1 className="text-4xl font-bold text-center text-white">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          </h1>
          <p className="text-xl mt-5 text-white text-center">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique,
            fugiat repellat? Est consequatur aperiam exercitationem.
          </p>
        </div>
      </div>
      <div>
        <h2 className="text-4xl font-bold text-center">Local SEO Services</h2>
        <div>
          <div>
            <div>
              <BiLocationPlus/>
            </div>
            <h3>Title</h3>
            <p>description</p>
            <span>price</span>
            <button>Read More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllServices;
