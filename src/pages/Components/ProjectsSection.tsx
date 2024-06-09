import { Slide } from "react-awesome-reveal";

const ProjectsSection = () => {
    const projects: any = [];

    for (let i = 0; i < 2; i++) {
        projects.push({
            title: 'Project',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates.',
            image: 'https://42.fr/wp-content/uploads/2021/07/Transcendence-e1629765085487.jpg',
            color: '[#D9F5AA]/55'
        })
    }

    return (
        <section id="projects">
            <div className="flex flex-col justify-center items-center min-h-screen max-w-[90vw] min-w-[90vw] xl:min-w-[90vw] xl:max-w-[40vw] rounded-lg  p-5 lg:mx-5">

                <div className="flex flex-col justify-between items-center max-w-[95vw] min-w-[95vw] xl:max-w-[70vw] xl:min-w-[70vw] md:max-w-[90vw] md:min-w-[90vw] mt-24">

                    {
                        Array.from({ length: 6 }).map((_, i) => (
                            <Slide key={i} direction={`${(i % 2) ? 'left' : 'right'}`} triggerOnce delay={i * 100} damping={0.1} className="">

                                <div
                                    className={`
                                    bg-slate-500/30 m-5 rounded-md
                                    flex flex-col-reverse
                                    ${(i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse')}
                                    justify-between items-center space-y-3
                                    filter drop-shadow-lg
                                    hover:filter-none hover:drop-shadow-2xl
                                    p-5 relative hover:scale-95 hover:duration-500 hover:ease-in-out hover:-z-30
                                    `
                                    }>

                                    <div
                                        className="rounded-lg p-5 max-w-[20rem]"
                                    >
                                        <img
                                            src="https://42.fr/wp-content/uploads/2021/07/Transcendence-e1629765085487.jpg"
                                            alt="project"
                                            className="rounded-lg w-[100%] object-cover shadow-2xl" />
                                    </div>

                                    <div className="flex flex-col justify-between items-start space-y-6 p-5 xl:max-w-[70%] lg:max-w-[90%] ">

                                        <h5 className="text-2xl font-gochi">Projects</h5>

                                        <div className="flex justify-around items-start space-x-10 ">
                                            <p className="font-gochi"> Date </p>
                                        </div>

                                        <p className="font-gochi">
                                            Voici un récap de mon cursus à l'école 42, des projects effectués, des notes obtenues et du code sources, HF ! Je suis sur le campus de 42 Lyon, de la promo 2021, piscine d'Août (objectivement la meilleure) !
                                        </p>
                                    </div>
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