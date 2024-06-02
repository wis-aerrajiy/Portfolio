
const ProjectsSection = () => {
    return (
        <section id="projects">
            <div className="relative flex flex-col lg:flex-row justify-center items-center min-h-[90vh] max-w-[50vw] mt-20 font-gochi text-8xl lg:space-y-0 lg:space-x-5">
                <div className="flex justify-center items-center bg-red-900 min-w-[20vw] lg:min-h-[90vh]">
                    1
                </div>

                <div
                    className="
                        grid grid-cols-1 gap-4 lg:grid-cols-1 lg:gap-10 justify-center items-center
                        md:overflow-scroll myscrollbar max-w-[90vw] min-w-[90vw] lg:min-w-[40vw] lg:max-w-[50vw] md:h-[90vh]
                        rounded-lg  p-2 lg:p-10 m-5 "
                >

                    <div className="flex flex-col lg:flex-row stickyNote taped shadow-md ring ring-red-600 bg-[#AAE5F5]/55 md:!rotate-[-3deg] !m-2 !p-5">
                        <div className="relative flex justify-center items-center rounded-md ">
                            <img src='https://42.fr/wp-content/uploads/2021/07/Transcendence-e1629765085487.jpg' alt="dabous" className="rounded-md w-[450px]" />
                            <p className="absolute top-0 left-0 bg-red-900/55 text-white p-1 text-sm rounded-md m-3 px-5">
                                Web App
                            </p>
                        </div>

                        <div className="flex flex-col justify-between items-center rounded-xl m-2 p-2">
                            <h1 className="text-sm ring rounded-lg py-2 px-10 lg:m-0 m-3">Project Title</h1>
                            <p className="text-sm">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam soluta iure amet reprehenderit distinctio placeat nam, incidunt maiores molestiae alias!
                            </p>
                            <div className="flex justify-center items-start space-x-4">
                                <button className="  p-2 px-16 rounded-xl text-sm bg-blue-600/25 hover:bg-blue-700/25">Discover</button>
                            </div>
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
    )
}

export default ProjectsSection