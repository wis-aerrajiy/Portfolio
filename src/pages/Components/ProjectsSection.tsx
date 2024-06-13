import { Slide } from "react-awesome-reveal";

const ProjectsSection = () => {
    const projects = [
        {
            title: "Personal Portfolio",
            date: "2023-12-05",
            categorie: "web dev",
            image: "/projects/portfolio.png",
            description: "In this project, I used ReactJS and TailwindCSS to create a responsive and visually appealing user interface. Leveraging ReactJS allowed me to build dynamic and interactive components, while TailwindCSS enabled rapid styling with its utility-first approach. The project demonstrates my ability to integrate front-end technologies to deliver a polished and user-friendly experience.",
        },
        {
            title: "Projects",
            date: "2023-12-05",
            categorie: "web dev",
            image: "https://42.fr/wp-content/uploads/2021/07/Transcendence-e1629765085487.jpg",
            description: "In this project, we use Docker extensively with docker-compose to manage various constraints: hosting a multi-container WordPress, a reverse proxy, and SSL certificates. I leveraged my experience with Docker to implement all the additional features: a Redis cache, an FTP server, a database GUI, monitoring, and the creation and hosting of a NestJS site.",
        },
    ];

    return (
        <section id="projects">
            <div className="flex flex-col justify-center items-center min-h-screen max-w-[95vw] min-w-[95vw] xl:min-w-[90vw] xl:max-w-[40vw] rounded-lg  p-5 lg:mx-5">

                <div className="flex flex-col justify-between items-center max-w-[100vw] min-w-[100vw] xl:max-w-[70vw] xl:min-w-[70vw] md:max-w-[90vw] md:min-w-[90vw] mt-24">

                    {
                        projects.map((project: any, i: number) => (
                            <Slide key={i} direction={`${(i % 2) ? 'left' : 'right'}`} triggerOnce delay={i * 100} damping={0.1} className="">

                                <div
                                    className={`
                                        bg-slate-500/0 m-5 rounded-md
                                        flex flex-col-reverse
                                        ${((i % 2) ? 'md:flex-row' : 'md:flex-row-reverse')}
                                        justify-between items-center space-y-0
                                        filter drop-shadow-lg
                                        hover:filter-none hover:drop-shadow-2xl
                                        p-5 relative hover:scale-95 hover:duration-500 hover:ease-in-out
                                    `
                                    }>

                                    <div className=" relative rounded-lg p-5 max-w-[20rem]" >
                                        <img src={project.image} alt="project" className="rounded-lg w-[100%] object-cover shadow-2xl" />
                                        <div className="absolute bg-red-500 p-2 top-0 left-0 rounded-tl-md rounded-md shadow-lg" >
                                            {project.categorie}
                                        </div>
                                    </div>

                                    <div className="flex flex-col justify-between items-start space-y-6 p-5 xl:max-w-[70%] lg:max-w-[90%] ">

                                        <h5 className="text-2xl font-gochi">
                                            {project.title}
                                        </h5>

                                        <div className="flex justify-around items-start space-x-10 ">
                                            <p className="font-gochi">
                                                {project.date}
                                            </p>
                                        </div>

                                        <p className="font-gochi">
                                            {project.description}
                                        </p>
                                    </div>

                                    <div
                                        className="
                                            absolute top-0 left-0 w-[100%] h-[100%] bg-slate-500/55 rounded-md flex justify-center items-center p-5 z-10 
                                            opacity-0 hover:opacity-100 transition-opacity duration-500 ease-in-out 
                                            shadow-lg hover:shadow-xl
                                        "
                                    >
                                        <button
                                            className="
                                                py-2 md:px-24 px-5 backdrop-filter backdrop-blur-lg bg-red-500/55 text-white font-gochi rounded-md shadow-lg hover:shadow-xl transition-shadow duration-500 ease-in-out
                                            "
                                            onClick={() => {
                                                alert('Discover More ...')
                                            }}
                                        >
                                            Disover More ...
                                        </button>
                                    </div>

                                    <div className={`absolute bg-red-500 p-2 md:h-full top-0 ${(i % 2) ? 'left-0' : 'right-0'} rounded-tl-md rounded-br-md z-0 shadow-lg`} > </div>

                                </div>
                            </Slide>
                        ))
                    }
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
    )
}

export default ProjectsSection