import React from "react";
import { features } from "../assets/assets";

const BottomFeatures = () => {
  return (
    <div className="mt-16 mb-12 px-4">
      <h2 className="text-2xl md:text-3xl font-semibold text-start mb-8">
        Why Shop With Us?
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 justify-center">
        {features.map((item, index) => (
          <div
            key={index}
            className="group bg-white border border-gray-200 rounded-xl p-5 text-center 
                       shadow-sm transition-transform duration-300 ease-in-out 
                       hover:shadow-md hover:scale-[1.03] hover:border-green-400"
          >
            <div className="flex justify-center items-center mb-4">
              <div className="w-16 h-16 rounded-full bg-gray-50 flex items-center justify-center shadow-inner">
                <img
                  className="w-12 h-12 object-contain group-hover:scale-105 transition-transform duration-200"
                  src={item.icon}
                  alt={item.title}
                />
              </div>
            </div>

            <h3 className="text-sm md:text-base font-semibold text-gray-800 mb-1">
              {item.title}
            </h3>
            <p className="text-xs md:text-sm text-gray-500">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BottomFeatures;
