import React from "react";
import * as Icons from "./Icons";
import "../../index.css";
import { Slide, Fade } from "react-awesome-reveal";
import PersonalInfo from "./PersonalInfo";

const TechnicalSkills = [
    { id: 0, name: "Web Dev", level: "80%", icon: Icons.PiDevToLogoFill },
    { id: 1, name: "TypeScript", level: "80%", icon: Icons.SiTypescript },
    { id: 2, name: "JavaScript", level: "80%", icon: Icons.IoLogoJavascript },
    { id: 3, name: "C++", level: "80%", icon: Icons.TbBrandCpp },
    { id: 4, name: "Python", level: "70%", icon: Icons.FaPython },
    { id: 5, name: "React", level: "80%", icon: Icons.FaReact },
    { id: 6, name: "Node.js", level: "80%", icon: Icons.FaNodeJs },
    { id: 7, name: "Nest.js", level: "70%", icon: Icons.SiNestjs },
    { id: 8, name: "TailwindCSS", level: "80%", icon: Icons.RiTailwindCssFill },
    { id: 9, name: "MongoDB", level: "80%", icon: Icons.SiMongodb },
    { id: 10, name: "PostgreSQL", level: "70%", icon: Icons.BiLogoPostgresql },
];

const OtherSkills = [
    { id: 0, name: "Docker", level: "80%", icon: Icons.FaDocker },
    { id: 1, name: "VC Git", level: "80%", icon: Icons.FaGitAlt },
    { id: 2, name: "Socket.io", level: "80%", icon: Icons.SiSocketdotio },
    { id: 3, name: "DevOps", level: "80%", icon: Icons.SiAzuredevops },
    { id: 4, name: "Problem Solving", level: "80%", icon: Icons.ImCheckmark },
    { id: 5, name: "Teamwork", level: "80%", icon: Icons.ImCheckmark },
    { id: 6, name: "Communication", level: "80%", icon: Icons.ImCheckmark },
    { id: 7, name: "Time Management", level: "80%", icon: Icons.ImCheckmark },
    { id: 8, name: "Leadership", level: "80%", icon: Icons.ImCheckmark },
    { id: 9, name: "Creativity", level: "80%", icon: Icons.ImCheckmark },
];

const Certificates = [
    {
        id: 0,
        src: " 1337",
        name: "digital technology architect at 1337",
        link: "https://www.1337.ma/",
    },
    {
        id: 1,
        src: " Edx.org",
        name: "Google Cloud Computing Foundations at Coursera Edx.org Google Cloud",
        link: "https://courses.edx.org/dashboard/programs/1fcffef0-468a-483f-95aa-87e2d4d2c408/?_gl=1*1du810v*_ga*NDA3NzczOTguMTcxNjQ4ODE4Ng..*_ga_D3KS4KMDT0*MTcxNzI5MjY1Mi42LjAuMTcxNzI5MjY1Mi42MC4wLjA.",
    },
    {
        id: 2,
        src: " Edx.org",
        name: "DevOps, Cloud, and Agile Foundations at Edx.org IBM",
        link: "https://courses.edx.org/dashboard/programs/950b68bb-50db-445c-b271-5bd46648836c/?_gl=1*f5fsq0*_ga*NDA3NzczOTguMTcxNjQ4ODE4Ng..*_ga_D3KS4KMDT0*MTcxNzI5MjY1Mi42LjAuMTcxNzI5MjY1Mi42MC4wLjA.",
    },
];

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
        <div className="relative flex flex-row justify-between items-center px-2 py-1 !bg-[#EAF9D0] border border-slate-700 rounded-lg rounded-tl-md hover:scale-105 transition-all duration-500">
            <skill.icon className="text-4xl p-2 rounded-lg border border-gray-300" />

            <div className="flex justify-center items-start font-gochi text-2xl text-slate-700 ring-offset-opacity-50 px-1">
                <span className="font-gochi md:text-xl text-sm !font-bold">
                    {skill.name}
                </span>
            </div>
        </div>
    );
};

const AboutSection = () => {
    const [quote, setQuote] = React.useState("");

    const DownloadHandle = (type: string) => {
        const assestsUrl = "/assests/";
        const file = type === "resume" ? "Resume.pdf" : "Education.pdf";
        window.open(assestsUrl + file);
    };

    React.useEffect(() => {
        fetch("https://api.quotable.io/quotes/random?tags=technology,famous-quotes")
            .then((response) => response.json())
            .then((data) => {
                setQuote(data && data[0] ? data[0].content : "No Quote Found");
            });
    }, []);

    return (
        <>
            <section id="about">
                <div className="flex flex-col justify-center items-center min-h-screen space-y-1 lg:mt-0 mt-24">

                    <PersonalInfo />

                    <div className="shadow-sm relative grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2 md:gap-8 lg:grid-cols-2 max-w-[90vw] min-w-[90vw] lg:min-w-[50vw] lg:max-w-[50vw] md:h-[90vh]  rounded-lg  p-5 mx-5">
                        <Fade cascade direction="up" triggerOnce damping={0.1}>
                            <Slide direction="left" triggerOnce>
                                <div className="flex flex-col stickyNote taped space-y-5 shadow-md ring ring-red-600 bg-[#F6EDA9]/55 md:!rotate-[-3deg]">
                                    <div className="flex justify-center items-center w-full">
                                        <h1 className="underline underline-offset-4 font-extrabold text-2xl md:rotate-[0deg] font-gochi">
                                            Who Am I ?
                                        </h1>
                                    </div>

                                    <div className="flex flex-col gap-5">
                                        <p className="text-lg text-slate-500 text-justify font-gochi">
                                            I am a 24-year-old software developer at 1337 Coding
                                            School and a passionate full-stack developer. Specializing
                                            in Back-end development, database management, and Dev-Ops
                                            workflow. I thrive on creative problem-solving. I am
                                            dedicated to crafting innovative digital solutions.
                                        </p>

                                        <ul className="flex flex-col gap-3">
                                            <li className="flex flex-row items-center gap-2">
                                                <Icons.ImCheckmark className="text-2xl text-black/45" />
                                                <span className="text-lg text-slate-500 font-gochi">
                                                    Highly motivated and eager to learn new technologies.
                                                </span>
                                            </li>
                                            <li className="flex flex-row items-center gap-2">
                                                <Icons.ImCheckmark className="text-2xl text-black/45" />
                                                <span className="text-lg text-slate-500 font-gochi">
                                                    Strong problem-solving skills and a passion for
                                                    software development.
                                                </span>
                                            </li>
                                            <li className="flex flex-row items-center gap-2">
                                                <Icons.ImCheckmark className="text-2xl text-black/45" />
                                                <span className="text-lg text-slate-500 font-gochi">
                                                    Excellent communication and teamwork skills.
                                                </span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </Slide>

                            <Slide direction="right" triggerOnce>
                                <div className="flex flex-col stickyNote taped space-y-5 bg-[#F0F0F0]/55 md:!rotate-[-3deg]">
                                    <div className="flex justify-center items-center w-full">
                                        <h1 className="underline underline-offset-4 font-extrabold text-2xl md:rotate-[0deg] font-gochi">
                                            My Journey
                                        </h1>
                                    </div>

                                    <div className="flex flex-col">
                                        <p className="text-lg text-slate-500 text-justify font-gochi">
                                            with over 2 years of study in computer science and
                                            software develepment, I have developed a strong
                                            understanding of software development and computer science
                                            fundamentals.
                                        </p>
                                    </div>
                                </div>
                            </Slide>

                            <Slide direction="right" triggerOnce>
                                <div className=" md:col-start-1 md:col-span-1 md:row-start-2 md:row-span-1 flex flex-col stickyNote taped bg-[#D9F5AA]/55 md:rotate-[3deg]">
                                    <div className="flex justify-center items-center w-full">
                                        <h1 className="underline underline-offset-4 font-extrabold text-2xl md:rotate-[0deg] font-gochi">
                                            My Skilles
                                        </h1>
                                    </div>

                                    <div
                                        className="flex flex-row justify-center items-center bg-slate-700/40 mx-auto px-6 py-3 rounded-md m-4 hover:bg-slate-700/50 hover:-translate-y-2 transition-all duration-500"
                                        onClick={() => DownloadHandle("resume")}
                                    >
                                        <Icons.RxDownload className="mx-3" /> Download Resume
                                    </div>

                                    <div className="grid grid-cols-2 gap-2 md:gap-4">
                                        {TechnicalSkills.map((skill) => (
                                            <SkillComponent key={skill.id} skill={skill} />
                                        ))}
                                    </div>
                                </div>
                            </Slide>

                            <Slide direction="left" triggerOnce>
                                <div className="flex flex-col stickyNote taped bg-[#D9F5AA]/55 md:rotate-[3deg]">
                                    <div className="flex justify-center items-center w-full">
                                        <h1 className="underline underline-offset-4 font-extrabold text-2xl md:rotate-[0deg] font-gochi">
                                            My Skilles
                                        </h1>
                                    </div>

                                    <div
                                        className="flex flex-row justify-center items-center bg-slate-700/40 mx-auto px-6 py-3 rounded-md m-4 hover:bg-slate-700/50 hover:-translate-y-2 transition-all duration-500"
                                        onClick={() => DownloadHandle("education")}
                                    >
                                        <Icons.RxDownload className="mx-3" /> Education Path
                                    </div>

                                    <div className="grid grid-cols-2 gap-2 md:gap-4">
                                        {OtherSkills.map((skill) => (
                                            <SkillComponent key={skill.id} skill={skill} />
                                        ))}
                                    </div>
                                </div>
                            </Slide>

                            <Slide direction="right" triggerOnce>
                                <div className="flex flex-col stickyNote taped space-y-5 bg-[#AAE5F5]/55 md:rotate-[12deg]">
                                    <div className="flex justify-center items-center w-full">
                                        <h1 className="underline underline-offset-4 font-extrabold text-2xl md:rotate-[0deg] font-gochi">
                                            Development Philosophy
                                        </h1>
                                    </div>

                                    <div className="flex flex-col">
                                        <p className="text-lg text-slate-500 text-justify font-gochi">
                                            I believe in writing clean, maintainable code and
                                            continuously improving through feedback. Embracing Agile
                                            and DevOps principles, I focus on collaboration,
                                            automation, and bridging the gap between development and
                                            operations.
                                        </p>
                                    </div>
                                </div>
                            </Slide>

                            <Slide direction="left" triggerOnce>
                                <div className="flex flex-col stickyNote taped space-y-5 bg-[#A9F4DB]/55 md:rotate-[10deg]">
                                    <div className="flex justify-center items-center w-full">
                                        <h1 className="underline underline-offset-4 font-extrabold text-2xl md:rotate-[0deg] font-gochi">
                                            Education & Certifications
                                        </h1>
                                    </div>

                                    <div className="flex flex-col gap-5">
                                        <p className="text-lg text-slate-500 text-justify font-gochi">
                                            A digital technology architect with a passion for software
                                            development at 1337 Coding School.
                                            <br />
                                            <span className="font-bold text-slate-500">
                                                Certifications:
                                            </span>
                                        </p>

                                        <ul className="flex flex-col gap-3">
                                            {Certificates.map((cert) => (
                                                <li
                                                    className="flex flex-row items-center gap-2"
                                                    key={cert.id}
                                                >
                                                    <Icons.ImCheckmark className="text-2xl text-black/45" />
                                                    <span className="text-lg text-slate-500 font-gochi">
                                                        {" "}
                                                        {cert.name} at
                                                        <a
                                                            href={cert.link}
                                                            target="_blank"
                                                            rel="noreferrer"
                                                            className="text-blue-600 underline"
                                                        >
                                                            {cert.src}
                                                        </a>
                                                    </span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </Slide>
                        </Fade>
                        <div className="flex flex-col stickyNote taped space-y-5 bg-[#C0D2F5]/55 md:col-start-1 md:col-span-2 md:row-span-2">
                            <div className="flex justify-center items-center w-full">
                                <h1 className="underline underline-offset-4 font-extrabold text-2xl md:rotate-[0deg] font-gochi">
                                    Random Quote
                                </h1>
                            </div>

                            <div className="flex flex-col">
                                <p className="text-lg text-slate-500 text-justify font-gochi">
                                    {quote}
                                </p>
                            </div>
                        </div>
                    </div>

                    <svg className="fixed top-0">
                        <filter id="wavy2">
                            <feTurbulence
                                x="0"
                                y="0"
                                baseFrequency="0.02"
                                numOctaves="5"
                                seed="1"
                            />
                            <feDisplacementMap in="SourceGraphic" scale="20" />
                        </filter>
                    </svg>
                </div>
            </section>
        </>
    );
};

export default AboutSection;
