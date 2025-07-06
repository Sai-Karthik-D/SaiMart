import React from "react";
import { assets, footerLinks } from "../assets/assets";

const Footer = () => {
  return (
    <div className="px-6 md:px-16 lg:px-24 xl:px-32 mt-24 bg-[#f4fff6]">
      <div className="flex flex-col md:flex-row md:items-start items-center text-center md:text-left justify-between gap-10 py-10 border-b border-gray-300 text-gray-600">
        
        {/* Logo + Description */}
        <div className="md:border-r md:pr-10 border-gray-300">
          <img className="w-14 md:w-12 mx-auto md:mx-0" src={assets.logo} alt="Logo" />
          <p className="max-w-[410px] mt-6">
            <strong>SaiMart</strong> • Where your grocery needs meet speed, savings, and simplicity.
          </p>
        </div>

        {/* Footer Links */}
        <div className="flex flex-wrap justify-center md:justify-between w-full md:w-[60%] gap-6 mt-6 md:mt-0">
          {footerLinks.map((section, index) => (
            <div key={index}>
              <h3 className="font-semibold text-base text-gray-800 mb-3">{section.title}</h3>
              <ul className="text-sm space-y-1">
                {section.links.map((link, i) => (
                  <li key={i}>
                    <a
                      href={link.url}
                      className="hover:text-green-600 hover:underline transition duration-200"
                    >
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Copyright */}
      <p className="py-4 text-center text-sm md:text-base text-gray-500">
        © {new Date().getFullYear()} SaiMart. All Rights Reserved.
      </p>
    </div>
  );
};

export default Footer;
