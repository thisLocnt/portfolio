import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { JOB_TITLE } from "../interfaces/constants";

const Main = () => {
    return (
        <div className="w-full h-screen text-center">
            <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
                <div>
                    <p className="uppercase text-sm tracking-widest text-gray-500">
                        Coding something together
                    </p>
                    <h1 className="py-4 text-gray-700">
                        Hi, Im <span className="text-[#5651e5]">Nguyen Tien Loc</span>
                    </h1>
                    <h1 className="py-2 text-gray-700">A {JOB_TITLE}</h1>
                    <p className="py-4 text-gray-600 max-w-[70%] m-auto">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Sed bibendum vitae leo in placerat. 
                    Praesent in diam a lorem vestibulum convallis. 
                    Morbi sodales, sem aliquet elementum pretium, tortor justo feugiat felis.
                    </p>
                    <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
                        <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300">
                            <FaLinkedinIn size={25} />
                        </div>
                        <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300">
                            <FaGithub size={25} />
                        </div>
                        <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300">
                            <AiOutlineMail size={25} />
                        </div>
                        <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300">
                            <BsFillPersonLinesFill size={25} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
  );
};

export default Main;
