import React from "react";
import { LuUser } from "react-icons/lu";

const Features = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="text-4xl font-semibold mt-5">Features..</div>

      <div className="grid grid-cols-1 md:grid-cols-2 mt-5 bg-gray-950">
        <div className="p-10">
          <div className="text-3xl mt-5">
            Download Your Movies Watch Offline. Enjoy On Your Mobile
          </div>
          <div className="mt-8">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries..
          </div>
          <div className="flex flex-wrap gap-4 mt-10">
            <button className="bg-black text-red-600 font-bold text-xl p-2">
              HD 4K
            </button>
            <button className="flex justify-center items-center gap-2 bg-black text-red-600 font-bold text-xl p-2">
              <span>
                <LuUser />
              </span>
              2K
            </button>
          </div>
        </div>
        <div className="p-10">
          <img
            src={require("../assets/mobile.png")}
            alt="img"
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Features;
