import React, { useState, useEffect } from "react";
import Link from 'next/link'
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { JOB_TITLE, FULL_NAME } from "../utils/constants";
import { Tooltip } from "@material-tailwind/react";

const textArray = ['Front-End Developer', 'Software Engineering'];

const Main = () => {
    const [roleText, setRoleText] = useState('')
    const [start, setStart] = useState(0);
    const [isNext, setIsNext] = useState(true);
    const [delay, setDelay] = useState(50)

    useEffect(() => {
        setTimeout(() => {
            const currentText = textArray[start]
            if (isNext) {
                if (roleText.length < currentText.length) {
                    const split = currentText.split('')
                    setRoleText(roleText + split[roleText.length])
                } else {
                    setIsNext(false)
                    setDelay(500)
                }
            } else {
                if (roleText.length !== 0) {
                    setRoleText(roleText.slice(0, -1))
                    setDelay(50)
                } else {
                    setIsNext(true)
                    if (start === textArray.length - 1) {
                        setStart(0)
                    } else {
                        setStart(start + 1)
                    }
                }
            }
        }, delay)
    }, [roleText, isNext])

    return (
        <div className="w-full h-screen text-center">
            <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
                <div>
                    <h1 className="py-4 text-gray-700">
                        👋 Hi, I'm{' '}<span className="text-[#5651e5]">{FULL_NAME}</span>
                    </h1>
                    <h2 className="py-4 text-gray-700 underline decoration-single decoration-slate-300">
                        {roleText}
                        <span className='animate-[flicker_1s_infinite]'>_</span>
                    </h2>
                    <p className="py-4 text-gray-600 max-w-[70%] m-auto">
                        I'm just a programmer who enjoys learning and traveling.
                    </p>
                    <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
                        <Tooltip content="LinkedIn" placement="bottom" className="text-gray-600">
                            <a
                                href={process.env.LINKEDIN_URL}
                                target='_blank'
                                rel='noreferrer'
                                className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300"
                            >
                                <FaLinkedinIn size={25} />
                            </a>
                        </Tooltip>
                        <Tooltip content="Github" placement="bottom" className="text-gray-600">
                            <a
                                href={process.env.GITHUB_URL}
                                target='_blank'
                                rel='noreferrer'
                                className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300"
                            >
                                <FaGithub size={25} />
                            </a>
                        </Tooltip>
                        <Tooltip content="Email" placement="bottom" className="text-gray-600">
                            <a
                                href={`mailto:${process.env.EMAIL}`}
                                className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300"
                            >
                                <AiOutlineMail size={25} />
                            </a>
                        </Tooltip>
                        <Tooltip content="Resume" placement="bottom" className="text-gray-600">
                            <Link href='/api/download-cv'>
                                <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300">
                                    <BsFillPersonLinesFill size={25} />
                                </div>
                            </Link>
                        </Tooltip>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;