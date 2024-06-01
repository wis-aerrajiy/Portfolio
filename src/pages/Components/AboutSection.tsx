// import profile from '../../assets/profile.jpeg';
import dabous from '../../assets/dabous.png';
import '../../index.css';
// import { BreadCrumb } from './';

import { FaGithub } from "react-icons/fa";
import { SiLinkedin } from "react-icons/si";
import { FaTwitter } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RxDownload } from "react-icons/rx";
// import { FaCheckDouble } from "react-icons/fa6";
import { ImCheckmark } from "react-icons/im";

import Draggable from 'react-draggable';

// import React from 'react';
// import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// const data = [
//     {
//         name: 'Page A',
//         uv: 4000,
//         pv: 2400,
//         amt: 2400,
//     },
//     {
//         name: 'Page B',
//         uv: 3000,
//         pv: 1398,
//         amt: 2210,
//     },
// ];

// const HorizontalBarChart = () => {
//     return (
//         <ResponsiveContainer width="100%" height={400}>
//             <BarChart
//                 layout="vertical"
//                 width={500}
//                 height={300}
//                 data={data}
//                 margin={{
//                     top: 5, right: 30, left: 20, bottom: 5,
//                 }}
//             >
//                 <CartesianGrid strokeDasharray="3 3" />
//                 <XAxis type="number" />
//                 <YAxis type="category" dataKey="name" />
//                 <Tooltip />
//                 <Legend />
//                 <Bar dataKey="pv" fill="#8884d8" />
//                 <Bar dataKey="uv" fill="#82ca9d" />
//             </BarChart>
//         </ResponsiveContainer>
//     );
// }

const socials = [
    { id: 0, link: '', icon: FaGithub },
    { id: 1, link: '', icon: SiLinkedin },
    { id: 2, link: '', icon: FaTwitter },
];

const PersonalInfo = [
    { id: 0, icon: FaPhoneAlt, info: '+212 658506376' },
    { id: 1, icon: MdEmail, info: 'aerrajiy.intra@gmail.com' },
];

const Skills = [
    { "id": 0, "name": "HTML5", "level": "90%", "icon": ImCheckmark },
    { "id": 1, "name": "CSS3", "level": "85%", "icon": ImCheckmark },
    { "id": 2, "name": "JavaScript", "level": "80%", "icon": ImCheckmark },
    { "id": 3, "name": "React", "level": "75%", "icon": ImCheckmark },
    { "id": 4, "name": "Node.js", "level": "70%", "icon": ImCheckmark },
    { "id": 5, "name": "Express.js", "level": "70%", "icon": ImCheckmark },
]

interface SkillProps {
    skill: {
        id: number;
        name: string;
        level: string;
        icon: any;
    };
}

const SkillComponent = ({ skill }: SkillProps) => {
    return (
        <div className="relative flex flex-row justify-between items-center px-4 py-2 border-b-2 border-red-800">
            <div
                className={`absolute left-11 top-1.5 noise min-h-[80%] -z-20 rounded-full`}
                style={{ width: skill.level }}
            ></div>
            <skill.icon className='text-4xl p-2 rounded-lg border border-gray-300' />
            <div className='flex flex-col items-start font-gochi text-2xl text-[#1E3A8A] ring-offset-opacity-50 bg-[#EAF9D0] px-2'>
                <span className='font-gochi text-x'>{skill.name}</span>
            </div>
            <div className='flex flex-row items-center'>
                <span
                    className='font-gochi text-2xl text-slate-700 ring-offset-opacity-50'

                >{skill.level}</span>
            </div>
            {/* <skill.icon /> */}
        </div>
    );
}

const AboutSection = () => {
    return (
        <>
            <section id="about">
                <div className='flex flex-col lg:flex-row justify-center items-center min-h-screen space-y-5 md:space-y-0 lg:space-x-50 mt-24 lg:mt-0'>

                    <div className='grid grid-cols-1 h-[auto] w-[90vw] lg:w-[auto] md:h-[90vh] max-w-[90vw] rounded-lg m-auto' >
                        <div className='mx-5'>
                            <div className="stickyNote bg-[#A9F4DB]/40 !rotate-[-3deg]">
                                <div className='relative -z-1 ring-1 ring-gray-600/15'>
                                    <img
                                        src="https://badge.mediaplus.ma/darkblue/aerrajiy"
                                        alt="profile"
                                        className='rounded-lg w-[100%] object-cover rotate-[5deg] filter opacity-90 shadow-2xl' />
                                    <img src={dabous} alt="dabous" className='absolute -top-4 left-[40%] md:left-[45%] rounded-lg w-[50px] filter  contrast-150 ' />
                                </div>

                                <h3 className="text-2xl md:text-4xl text-blue-900 underline rotate-6 mt-5">
                                    Aiman Errajiy
                                </h3>

                                <p className="text-lg md:text-lg text-slate-500 ml-20 rotate-6 mt-2">
                                    Also Known As <span className="text-blue-900 underline-offset-8 underline px-3">Wis</span>
                                </p>
                            </div>

                            <div className="stickyNote bg-[#A9F4DB]/40 !rotate-[-3deg]">
                                <p className="text-lg text-slate-500 text-justify font-gochi">
                                    I believe that every problem can be solved with one more if
                                </p>
                            </div>
                        </div>

                        <div className='mx-5'>
                            <div className="stickyNote taped bg-[#A9F4DB] mx-5 ">

                                <div className=''>
                                    <ul className='flex justify-evenly items-center'>
                                        {
                                            socials.map(item => (
                                                <li key={item.id} className='p-4 rounded-lg flex items-center border border-gray-300 justify-center group transition-all duration-500 hover:-translate-y-2'> <item.icon /> </li>
                                            ))
                                        }
                                    </ul>

                                    <div className=' mt-10 max-w-[100%]'>
                                        <ul className='flex flex-col justify-between items-center gap-5'>
                                            {
                                                PersonalInfo.map(item => (
                                                    <li key={item.id} className='m-5 w-full p-4 rounded-lg flex flex-row items-center border border-gray-300 justify-center group transition-all duration-500 hover:-translate-y-2'>
                                                        <item.icon className='mx-3' />
                                                        <span>{item.info}</span>
                                                    </li>
                                                ))
                                            }
                                        </ul>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>

                    <div
                        className='relative grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2 md:gap-8 lg:grid-cols-2 md:overflow-scroll myscrollbar max-w-[90vw] min-w-[90vw] lg:min-w-[50vw] lg:max-w-[50vw] md:h-[90vh]  rounded-lg  p-5 mx-5'
                    >

                        <Draggable
                            disabled={true}
                        >
                            <div
                                className="flex flex-col stickyNote taped space-y-5 shadow-md ring ring-red-600 bg-[#F6EDA9]/55 md:!rotate-[-3deg]"
                            >
                                <div className='flex justify-center items-center w-full'>
                                    <h1 className='underline underline-offset-4 font-extrabold text-2xl md:rotate-[0deg] font-gochi' >Who Am I ?</h1>
                                </div>

                                <div className="flex flex-col gap-5">
                                    <p className="text-lg text-slate-500 text-justify font-gochi">
                                        I am a 24-year-old software developer at 1337 Coding School and a passionate full-stack developer.
                                        Specializing in Back-end development, database management, and Dev-Ops workflow.
                                        I thrive on creative problem-solving. I am dedicated to crafting innovative digital solutions.
                                    </p>
                                </div>
                            </div>

                        </Draggable>

                        <div className="flex flex-col stickyNote taped space-y-5 bg-[#F0F0F0]/55 md:!rotate-[-3deg]">
                            <div className='flex justify-center items-center w-full'>
                                <h1 className='underline underline-offset-4 font-extrabold text-2xl md:rotate-[0deg] font-solway' >My Journey</h1>
                            </div>

                            <div className="flex flex-col">
                                <p className="text-lg text-slate-500 text-justify font-serif font-solway">
                                    with over 2 years of study in computer science and software develepment, I have developed a strong understanding of software development and computer science fundamentals.
                                </p>
                            </div>
                        </div>

                        <div
                            className="
                            md:col-start-1 md:col-span-1 md:row-start-2 md:row-span-1
                            flex flex-col stickyNote taped space-y-5 bg-[#D9F5AA]/55 md:rotate-[3deg]"
                        >
                            <div className='flex justify-center items-center w-full'>
                                <h1 className='underline underline-offset-4 font-extrabold text-2xl md:rotate-[0deg] font-gochi' >My Skilles</h1>
                            </div>

                            <Draggable>
                                <div className='flex flex-row gap-5 justify-center items-center bg-slate-700/40 mx-auto px-6 py-3 rounded-md'>
                                    <RxDownload /> Download Resume
                                </div>
                            </Draggable>

                            <div className="grid grid-cols-1 gap-3 md:gap-7 ">
                                {
                                    Skills.map(skill => (
                                        <SkillComponent key={skill.id} skill={skill} />
                                    ))
                                }

                            </div>
                        </div>

                        <div
                            className="
                            flex flex-col stickyNote taped space-y-5 bg-[#D9F5AA]/55 md:rotate-[3deg]"
                        >
                            <div className='flex justify-center items-center w-full'>
                                <h1 className='underline underline-offset-4 font-extrabold text-2xl md:rotate-[0deg] font-gochi' >My Skilles</h1>
                            </div>

                            <div className="grid grid-cols-1 gap-3 md:gap-7 ">
                                {
                                    Skills.map(skill => (
                                        <SkillComponent key={skill.id} skill={skill} />
                                    ))
                                }
                            </div>
                        </div>

                        <div className="flex flex-col stickyNote taped space-y-5 bg-[#AAE5F5]/55 md:rotate-[12deg]">
                            <div className='flex justify-center items-center w-full'>
                                <h1 className='underline underline-offset-4 font-extrabold text-2xl md:rotate-[0deg] font-gochi' >Development Philosophy</h1>
                            </div>

                            <div className="flex flex-col">
                                <p className="text-lg text-slate-500 text-justify font-gochi">
                                    I believe in writing clean, maintainable code and continuously improving through feedback. Embracing Agile and DevOps principles, I focus on collaboration, automation, and bridging the gap between development and operations.
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col stickyNote taped space-y-5 bg-[#A9F4DB]/55 md:rotate-[10deg]">
                            <div className='flex justify-center items-center w-full'>
                                <h1 className='underline underline-offset-4 font-extrabold text-2xl md:rotate-[0deg] font-gochi' >Education & Certifications</h1>
                            </div>

                            <div className="flex flex-col">
                                <p className="text-lg text-slate-500 text-justify font-gochi">
                                    As a dynamic junior full stack developer, I have a proven track record of delivering high-quality, scalable and maintainable software solutions. I have a strong understanding of web technologies and I am passionate about learning new technologies and frameworks.
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col stickyNote taped space-y-5 bg-[#C0D2F5]/55">
                            <div className='flex justify-center items-center w-full'>
                                <h1 className='underline underline-offset-4 font-extrabold text-2xl md:rotate-[0deg] font-gochi' >About Me 6</h1>
                            </div>

                            <div className="flex flex-col">
                                <p className="text-lg text-slate-500 text-justify font-gochi">
                                    As a dynamic junior full stack developer, I have a proven track record of delivering high-quality, scalable and maintainable software solutions. I have a strong understanding of web technologies and I am passionate about learning new technologies and frameworks.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default AboutSection;