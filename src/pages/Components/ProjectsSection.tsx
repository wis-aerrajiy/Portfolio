
import { color } from 'framer-motion';
import React from 'react'

// const generateColor = () => {
//     var color = '#' + Math.floor(Math.random() * 16777215).toString(16);
//     return color;
// }

// const colors: string[] = [];

// for (let i = 0; i < 9; i++) {
//     colors.push(generateColor())
// }

const ProjectsSection = () => {
    const projects: any = [];
    for (let i = 0; i < 6; i++) {
        projects.push({
            title: 'Project',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates.',
            image: 'https://42.fr/wp-content/uploads/2021/07/Transcendence-e1629765085487.jpg',
            color: '[#D9F5AA]/55'
        })
    }

    return (
        <section id="projects">
            <div
                className="mt-28 shadow-sm relative md:overflow-scroll myscrollbar max-w-[90vw] min-w-[90vw] lg:min-w-[60vw] lg:max-w-[50vw] md:h-[90vh]  rounded-lg  p-5 lg:mx-5"
            >

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 rounded-lg lg:p-5 hover:place-items-stretch">
                    {
                        projects.map((project: any, index: any) => {
                            const randomIndex = Math.floor(Math.random() * 8)

                            return (
                                <div id={`${index}`}
                                    className={`
                                        stickyNote taped md:!rotate-[${(!(randomIndex % 2)) ? '-3' : '3'}deg] bg-${project.color}
                                        hover:shadow-2xl transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:rotate-6 
                                    `}
                                >
                                    <div className="
                                        relative flex flex-col justify-center items-center bg-blue-500/55 m-2 p-5 rounded-lg
                                    ">
                                        <img
                                            src={project.image}
                                            alt="Project"
                                            className="
                                                relative -top-10 rounded-lg object-cover w-[90%] shadow-lg shadow-lime-800
                                                hover:shadow-2xl transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-90 hover:rotate-6 
                                            "
                                        />
                                        <h1 className="text-2xl font-bold text-white underline underline-offset-4">
                                            {project.title}
                                        </h1>
                                        <p className="text-white">
                                            {project.description}
                                        </p>

                                        <button className="bg-white text-black py-2 px-8 rounded-lg mt-5">Discover Project</button>
                                    </div>
                                </div>
                            )
                        })
                    }

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


            </div>
        </section>
    )
}

export default ProjectsSection