import profile from '../../assets/profile.jpeg'

const AboutSection = () => {
    return (
        <>
            <section id="about" className="">
                <div className="flex flex-col gap-20 justify-center items-center h-screen max-w-[50vh]">
                    <div className="flex flex-col items-center">
                        <h1 className="text-2xl md:text-8xl text-blue-900">
                            About Me
                        </h1>
                    </div>

                    <div className="flex flex-col md:flex-row gap-10">
                        <div className="flex flex-col items-center">
                            <img src={profile} alt="profile" className="w-60 h-60 rounded-full object-cover max-w-none" />
                        </div>

                        <div className="flex flex-col gap-5">
                            <p className="text-lg text-slate-500 text-justify">
                                I am a full-stack developer with a passion for building high-quality software. I have experience in developing web applications, mobile applications, and APIs. I am proficient in JavaScript, TypeScript, React, Node.js, and other technologies. I am also a DevOps engineer with experience in setting up CI/CD pipelines, monitoring, and scaling applications.
                            </p>
                            <p className="text-lg text-slate-500 text-justify">
                                I have a Bachelor's degree in Computer Science from the University of XYZ. I have worked with several companies as a software engineer and have experience in working with teams to deliver high-quality software.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AboutSection