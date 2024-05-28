import profile from '../../assets/profile.jpeg'
import { BreadCrumb } from './';

const AboutSection = () => {
    return (
        <>
            <section id="about" className="">
                <div className="flex flex-col gap-16 h-screen md:max-w-[60vh] max-w-[50vh] mt-12 ">
                    <div className='flex flex-col justify-start space-y-20 md:min-h-[50vh]'>
                        <div className="flex flex-col items-start gap-2">

                            <BreadCrumb Section="About" />

                            <h3 className="text-2xl md:text-4xl text-blue-900 underline">
                                Aiman Errajiy
                            </h3>
                            <p className="text-lg md:text-lg text-slate-500 ml-20">
                                Else Known As <span className="text-blue-900 underline-offset-8 underline px-3">Wis</span>
                            </p>
                        </div>
                        <div className="mb-5">
                            <img src={profile} alt="profile" className="w-[100%] max-h-[400px] object-cover max-w-none rounded-lg filter border-gray-600 ring-1 ring-gray-600/6" />
                        </div>
                    </div>


                    <div className="flex flex-col md:flex-col gap-10 min-h-[90vh]">

                        <div className='relative flex flex-row justify-center items-center min-w-[100%] bg-gray-20/15 mb-10 md:-z-0 -z-10'>
                            <h1 className='absolute underline underline-offset-4 font-extrabold text-2xl md:rotate-[0deg] left-0 md:-left-5 top-2' >About Me</h1>

                            <div className="flex flex-col gap-5 md:ml-20 mt-10 pt-10">
                                <p className="text-lg text-slate-500 text-justify font-serif">
                                    I am a 24-year-old software developer at 1337 Coding School and a passionate full-stack developer.
                                    Specializing in Back-end development, database management, and Dev-Ops workflow.
                                    I thrive on creative problem-solving. I am dedicated to crafting innovative digital solutions.
                                </p>
                                <p className="text-lg text-slate-500 text-justify font-serif">
                                    I've got a solid grasp of computer science and software development from my studies.
                                    I'm comfortable with several programming languages and have built web applications during my time at university.
                                    Plus, I'm familiar with tools like Git, Docker, and Kubernetes, which I've used in projects and assignments.
                                </p>
                            </div>
                        </div>


                        {/* <h1 className='underline underline-offset-4 font-extrabold text-2xl' >About Me</h1>
                        <div className="flex flex-col gap-5">
                            <p className="text-lg text-slate-500 text-justify font-permanent">
                                I am a 24-year-old software developer at 1337 Coding School and a passionate full-stack developer.
                                Specializing in Back-end development, database management, and Dev-Ops workflow.
                                I thrive on creative problem-solving. I am dedicated to crafting innovative digital solutions.
                            </p>
                            <p className="text-lg text-slate-500 text-justify font-permanent">
                                I've got a solid grasp of computer science and software development from my studies.
                                I'm comfortable with several programming languages and have built web applications during my time at university.
                                Plus, I'm familiar with tools like Git, Docker, and Kubernetes, which I've used in projects and assignments.
                            </p>
                        </div> */}

                        {/* <h1 className='underline underline-offset-4 font-extrabold text-2xl' >Education</h1>
                        <div className="flex flex-col gap-5">
                            <p className="text-lg text-slate-500 text-justify font-permanent">
                                I graduated from the National School of Applied Sciences in Kenitra, Morocco, with a degree in Computer Science.
                                I have a solid understanding of computer science and software development, as well as experience in web development.
                            </p>
                        </div> */}

                        <div className='relative flex flex-row justify-center md:items-center items-start min-w-[100%] bg-gray-20/15 mb-10 md:-z-0 -z-10'>
                            <h1 className='absolute underline underline-offset-4 font-extrabold text-2xl md:rotate-[0deg] left-0 md:-left-5 top-2' >Education</h1>

                            <div className="flex flex-col gap-5 md:ml-20 mt-10 pt-10">
                                <p className="text-lg text-slate-500 text-justify font-serif">
                                    I graduated from the National School of Applied Sciences in Kenitra, Morocco, with a degree in Computer Science.
                                    I have a solid understanding of computer science and software development, as well as experience in web development.
                                </p>
                            </div>
                        </div>

                        <div className='relative flex flex-row justify-center items-center min-w-[100%] bg-gray-20/15 mb-10 md:-z-0 -z-10'>
                            <h1 className='absolute underline underline-offset-4 font-extrabold text-2xl md:rotate-[0deg] left-0 md:-left-5 top-2' >Skills</h1>
                            <div>
                                Body
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AboutSection