import profile from '../../assets/profile.jpeg';
import '../../index.css';
import { BreadCrumb } from './';

const AboutSection = () => {
    return (
        <>
            <section id="about">
                <div className='flex flex-col md:flex-row justify-center items-center min-h-screen space-y-20 md:space-y-0 md:space-x-20 mt-24 md:mt-0 mb-20'>

                    <div className='flex justify-center items-center h-[40vh] md:h-[80vh] min-w-[49vh] bg-red-700' >
                        <div>
                            Image
                        </div>
                    </div>

                    <div className='md:overflow-scroll myscrollbar ring-1 ring-gray-200 shadow-md max-w-[90vw] md:max-w-[50vw] md:h-[60vh] px-8 pb-8 rounded-lg'>

                        <div className=' flex flex-col justify-center items-center min-w-[100%] bg-gray-20/15 mt-10'>
                            <div className='flex justify-center items-center w-full'>
                                <h1 className='underline underline-offset-4 font-extrabold text-2xl md:rotate-[0deg]' >About Me</h1>
                            </div>
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

                        <div className=' flex flex-col justify-center items-center min-w-[100%] bg-gray-20/15 mt-10'>
                            <h1 className=' underline underline-offset-4 font-extrabold text-2xl md:rotate-[0deg]' >Education</h1>

                            <div className="flex flex-col gap-5 md:ml-20 mt-10 pt-10">
                                <p className="text-lg text-slate-500 text-justify font-serif">
                                    I graduated from the National School of Applied Sciences in Kenitra, Morocco, with a degree in Computer Science.
                                    I have a solid understanding of computer science and software development, as well as experience in web development.
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