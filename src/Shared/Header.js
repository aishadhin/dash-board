import React from "react";
import avatar from '../assets/images/profile-user.png'

const Header = () => {
  return (
    <div className="bg-slate-300">
      <div className="py-3 px-3 lg:px-0 container flex justify-between mx-auto">
        <div>
          <h2>logo</h2>
        </div>
        <div className="flex">
          <img className="w-8" src={avatar} alt="" />
          <p className="mt-[3px] ml-2">Hello,<span className="font-bold">Omuk</span></p>
        </div>
      </div>
    </div>
  );
};

export default Header;
