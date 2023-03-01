import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { JOB_TITLE, FULL_NAME } from "../utils/constants";
import { Tooltip } from "@material-tailwind/react";

const Main = () => {
    return (
        <div className="w-full h-screen text-center">
            <div 
                className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center"
            >
            
                <div 
                // className="absolute w-screen h-screen top-16"
                >
                    {/* <p className="uppercase text-sm tracking-widest text-gray-500">
                        Hi, I'm{' '}
                    </p> */}
                    <h1 className="py-4 text-gray-700 underline decoration-double decoration-slate-300">
                        I am <span className="text-[#5651e5]">{FULL_NAME}</span>
                    </h1>
                    <h1 className="py-4 text-gray-700">A {JOB_TITLE}</h1>
                    <p className="py-4 text-gray-600 max-w-[70%] m-auto">
                        I am highly motivated to create innovative and efficient applications, 
                        and I am committed to keeping myself informed about the latest advancements and most effective methodologies 
                        in the software engineering field.
                    </p>
                    <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
                        <Tooltip content="LinkedIn" placement="top" className="text-gray-600">
                            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300">
                                <a
                                    href='https://www.linkedin.com/in/ngtienloc1401/'
                                    target='_blank'
                                    rel='noreferrer'
                                >
                                    <FaLinkedinIn size={25} />
                                </a>
                            </div>
                        </Tooltip>
                        <Tooltip content="Github" placement="top" className="text-gray-600">
                            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300">
                                <a
                                    href='https://github.com/LOCNg0114'
                                    target='_blank'
                                    rel='noreferrer'
                                >
                                    <FaGithub size={25} />
                                </a>
                            </div>
                        </Tooltip>
                        <Tooltip content="Email" placement="top" className="text-gray-600">
                            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300">
                                <AiOutlineMail size={25} />
                            </div>
                        </Tooltip>
                        <Tooltip content="Resume" placement="top" className="text-gray-600">
                            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300">
                                <BsFillPersonLinesFill size={25} />
                            </div>
                        </Tooltip>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;
