import dabous from '../../assets/dabous.png';

const ProjectsSection = () => {
    return (
        <section id="projects">
            <div className="flex flex-col lg:flex-row justify-center items-center min-h-[90vh] max-w-[60vw] mt-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                    <div className=''>
                        <div className="flex flex-col -stickyNote bg-[#A9F4DB]/40 !rotate-[-3deg]">
                            <div className='relative flex justify-center items-center -z-1 ring-1 ring-gray-600/15'>
                                <img
                                    src="https://badge.mediaplus.ma/darkblue/aerrajiy"
                                    alt="profile"
                                    className='rounded-lg w-[100%] object-cover rotate-[5deg] filter opacity-90 shadow-2xl' />
                                <img src={dabous} alt="dabous" className='absolute -top-4 left-[40%] md:left-[45%] rounded-lg w-[50px] filter  contrast-150 ' />
                            </div>

                            <div className='p-4'>
                                <h1 className='text-2xl font-bold'>Project Title</h1>
                                <p className='text-gray-700'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatem.</p>
                            </div>
                        </div>
                    </div>

                    <div className=''>
                        <div className="flex flex-col -stickyNote bg-[#A9F4DB]/40 !rotate-[-3deg]">
                            <div className='relative flex justify-center items-center -z-1 ring-1 ring-gray-600/15'>
                                <img
                                    src="https://badge.mediaplus.ma/darkblue/aerrajiy"
                                    alt="profile"
                                    className='rounded-lg w-[100%] object-cover rotate-[5deg] filter opacity-90 shadow-2xl' />
                                <img src={dabous} alt="dabous" className='absolute -top-4 left-[40%] md:left-[45%] rounded-lg w-[50px] filter  contrast-150 ' />
                            </div>

                            <div className='p-4'>
                                <h1 className='text-2xl font-bold'>Project Title</h1>
                                <p className='text-gray-700'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatem.</p>
                            </div>
                        </div>
                    </div>

                    <div className=''>
                        <div className="flex flex-col -stickyNote bg-[#A9F4DB]/40 !rotate-[-3deg]">
                            <div className='relative flex justify-center items-center -z-1 ring-1 ring-gray-600/15'>
                                <img
                                    src="https://badge.mediaplus.ma/darkblue/aerrajiy"
                                    alt="profile"
                                    className='rounded-lg w-[100%] object-cover rotate-[5deg] filter opacity-90 shadow-2xl' />
                                <img src={dabous} alt="dabous" className='absolute -top-4 left-[40%] md:left-[45%] rounded-lg w-[50px] filter  contrast-150 ' />
                            </div>

                            <div className='p-4'>
                                <h1 className='text-2xl font-bold'>Project Title</h1>
                                <p className='text-gray-700'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatem.</p>
                            </div>
                        </div>
                    </div>

                    <div className=''>
                        <div className="flex flex-col -stickyNote bg-[#A9F4DB]/40 !rotate-[-3deg]">
                            <div className='relative flex justify-center items-center -z-1 ring-1 ring-gray-600/15'>
                                <img
                                    src="https://badge.mediaplus.ma/darkblue/aerrajiy"
                                    alt="profile"
                                    className='rounded-lg w-[100%] object-cover rotate-[5deg] filter opacity-90 shadow-2xl' />
                                <img src={dabous} alt="dabous" className='absolute -top-4 left-[40%] md:left-[45%] rounded-lg w-[50px] filter  contrast-150 ' />
                            </div>

                            <div className='p-4'>
                                <h1 className='text-2xl font-bold'>Project Title</h1>
                                <p className='text-gray-700'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatem.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProjectsSection