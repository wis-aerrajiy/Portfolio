// import profile from '../../assets/profile.jpeg';
import dabous from '../../assets/dabous.png';
import '../../index.css';
// import { BreadCrumb } from './';

// import { FaGithub } from "react-icons/fa";
// import { SiLinkedin } from "react-icons/si";
// import { FaTwitter } from "react-icons/fa";
// import { FaPhoneAlt } from "react-icons/fa";
// import { MdEmail } from "react-icons/md";
import Draggable from 'react-draggable';
// import { CSSTransition } from 'react-transition-group';

// const socials = [
//     { id: 0, link: '', icon: FaGithub },
//     { id: 1, link: '', icon: SiLinkedin },
//     { id: 2, link: '', icon: FaTwitter },
// ];

// const PersonalInfo = [
//     { id: 0, icon: FaPhoneAlt, info: '+212 658506376' },
//     { id: 1, icon: MdEmail, info: 'aerrajiy.intra@gmail.com' },
// ]

const AboutSection = () => {
    return (
        <>
            <section id="about">
                <div className='grid grid-cols-2 justify-center items-center min-h-screen space-y-20 md:space-y-0 lg:space-x-20 mt-24 lg:mt-0'>

                    <div className='flex md:flex-col justify-start items-center h-[auto] md:h-[80vh] min-w-[auto] max-w-[90vw] ring-1 ring-gray-200 shadow-sm rounded-lg px-5 mx-5' >
                        <div className='max-w-[70vw]'>
                            <div className='relative -z-1'>
                                <img src="https://badge.mediaplus.ma/darkblue/aerrajiy" alt="profile" className='rounded-lg mt-10 w-[500px] h-[200px] md:h-[300px] object-cover rotate-[5deg] filter grayscale contrast-150 shadow-2xl' />
                                <img src={dabous} alt="dabous" className='absolute -top-4 left-[40%] md:left-[45%] rounded-lg w-[50px] filter  contrast-150 ' />
                            </div>

                            <h3 className="text-2xl md:text-4xl text-blue-900 underline mt-10">
                                Aiman Errajiy
                            </h3>
                            <p className="text-lg md:text-lg text-slate-500 ml-20">
                                Else Known As <span className="text-blue-900 underline-offset-8 underline px-3">Wis</span>
                            </p>

                        </div>
                        {
                            /* 
                            <div>
                                <ul className='flex justify-between items-center space-x-20 mt-10'>
                                    {
                                        socials.map(item => (
                                            <li key={item.id} className='p-4 rounded-lg flex items-center border border-gray-300 justify-center group transition-all duration-500 hover:-translate-y-2'> <item.icon /> </li>
                                        ))
                                    }
                                </ul>
                            </div>
    
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
                            </div> */
                        }
                    </div>

                    <div
                        className='relative grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2 md:gap-8 lg:grid-cols-2 md:overflow-scroll myscrollbar max-w-[90vw] min-w-[90vw] lg:min-w-[50vw] lg:max-w-[50vw] md:h-[80vh]  rounded-lg  p-5 mx-5'
                    >

                        <Draggable
                            allowAnyClick={true}
                            disabled={false}
                        >
                            <div
                                className="flex flex-col stickyNote taped space-y-5 shadow-md ring ring-red-600 bg-[#F6EDA9] !rotate-[-3deg]"
                            >
                                <div className='flex justify-center items-center w-full'>
                                    <h1 className='underline underline-offset-4 font-extrabold text-2xl md:rotate-[0deg]' >About Me 1</h1>
                                </div>

                                <div className="flex flex-col gap-5">
                                    <p className="text-lg text-slate-500 text-justify font-serif">
                                        I am a 24-year-old software developer at 1337 Coding School and a passionate full-stack developer.
                                        Specializing in Back-end development, database management, and Dev-Ops workflow.
                                        I thrive on creative problem-solving. I am dedicated to crafting innovative digital solutions.
                                    </p>
                                </div>
                            </div>

                        </Draggable>

                        <div className="flex flex-col stickyNote taped space-y-5 bg-[#F0F0F0] !rotate-[-3deg]">
                            <div className='flex justify-center items-center w-full'>
                                <h1 className='underline underline-offset-4 font-extrabold text-2xl md:rotate-[0deg]' >Education</h1>
                            </div>

                            <div className="flex flex-col">
                                <p className="text-lg text-slate-500 text-justify font-serif">
                                    As a dynamic junior full stack developer, I have a proven track record of delivering high-quality, scalable and maintainable software solutions. I have a strong understanding of web technologies and I am passionate about learning new technologies and frameworks.
                                </p>
                            </div>
                        </div>

                        <div
                            className="
                            md:col-start-1 md:col-span-2 md:row-start-2 md:row-span-2
                            flex flex-col stickyNote taped space-y-5 bg-[#D9F5AA] rotate-[3deg]"
                        >
                            <div className='flex justify-center items-center w-full'>
                                <h1 className='underline underline-offset-4 font-extrabold text-2xl md:rotate-[0deg]' >About Me 3</h1>
                            </div>

                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2 shadow-md  md:gap-8 lg:grid-cols-2 ">
                                <div className='bg-red-500'>A</div>
                                <div className='bg-red-500'>A</div>
                                <div className='bg-red-500'>A</div>
                                <div className='bg-red-500'>A</div>
                                <div className='bg-red-500'>A</div>
                                <div className='bg-red-500'>A</div>
                                <div className='bg-red-500'>A</div>
                                <div className='bg-red-500'>A</div>
                                <div className='bg-red-500'>A</div>
                                <div className='bg-red-500'>A</div>
                                <div className='bg-red-500'>A</div>
                            </div>
                        </div>

                        <div className="flex flex-col stickyNote taped space-y-5 bg-[#AAE5F5] rotate-[12deg]">
                            <div className='flex justify-center items-center w-full'>
                                <h1 className='underline underline-offset-4 font-extrabold text-2xl md:rotate-[0deg]' >About Me 4</h1>
                            </div>

                            <div className="flex flex-col">
                                <p className="text-lg text-slate-500 text-justify font-serif">
                                    As a dynamic junior full stack developer, I have a proven track record of delivering high-quality, scalable and maintainable software solutions. I have a strong understanding of web technologies and I am passionate about learning new technologies and frameworks.
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col stickyNote taped space-y-5 bg-[#A9F4DB] rotate-[10deg]">
                            <div className='flex justify-center items-center w-full'>
                                <h1 className='underline underline-offset-4 font-extrabold text-2xl md:rotate-[0deg]' >About Me 5</h1>
                            </div>

                            <div className="flex flex-col">
                                <p className="text-lg text-slate-500 text-justify font-serif">
                                    As a dynamic junior full stack developer, I have a proven track record of delivering high-quality, scalable and maintainable software solutions. I have a strong understanding of web technologies and I am passionate about learning new technologies and frameworks.
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col stickyNote taped space-y-5 bg-[#C0D2F5]">
                            <div className='flex justify-center items-center w-full'>
                                <h1 className='underline underline-offset-4 font-extrabold text-2xl md:rotate-[0deg]' >About Me 6</h1>
                            </div>

                            <div className="flex flex-col">
                                <p className="text-lg text-slate-500 text-justify font-serif">
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