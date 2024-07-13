import * as Icons from "../Icons";
import dabous from "../../../assets/dabous.png";
// import { Slide } from "react-awesome-reveal";

const PersonalInfo = () => {
    const socials = [
        { id: 0, link: "", icon: Icons.FaGithub },
        { id: 1, link: "", icon: Icons.SiLinkedin },
        { id: 2, link: "", icon: Icons.FaTwitter },
    ];

    const PersonalInfo = [
        { id: 0, icon: Icons.FaPhoneAlt, info: "+212 658506376" },
        { id: 1, icon: Icons.MdEmail, info: "aerrajiy.intra@gmail.com" },
    ];

    return (
        <div className="bg-rose-100/5 min-h-screen min-w-[90vw] rounded-md">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 justify-center items-center m-auto h-[auto] w-[85vw] xl:w-[50vw] md:h-screen max-w-[90vw] rounded-lg">
                {/* <Slide
                    direction="left" triggerOnce className="max-w-[90vw]"
                > */}
                    <div className="mx-1">
                        <div className="stickyNote bg-[#A9F4DB]/40 !rotate-[-3deg]">
                            <div className="relative -z-1 ring-1 ring-gray-600/15">
                                <img
                                    src="aerrajiy.svg"
                                    alt="profile"
                                    className="rounded-lg w-[100%] object-cover rotate-[5deg] filter opacity-90 shadow-2xl"
                                />
                                <img
                                    src={dabous}
                                    alt="dabous"
                                    className="absolute -top-4 left-[40%] md:left-[45%] rounded-lg w-[50px] filter  contrast-150 "
                                />
                            </div>

                            <h3 className="text-2xl text-center md:text-4xl text-blue-900 underline rotate-0 mt-5 ">
                                Aiman Errajiy
                            </h3>
                            <p className="text-lg md:text-lg text-right text-slate-500 ml-20 rotate-0 mt-2">
                                AkA{" "}
                                <span className="text-blue-900 underline-offset-8 underline px-1">
                                    wis
                                </span>
                            </p>
                        </div>
                    </div>
                {/* </Slide> */}

                {/* <Slide
                    direction="right" triggerOnce className="max-w-[90vw]"
                    // delay={2000}
                > */ }

                    <div className="mx-1">
                        <div className="stickyNote taped bg-[#A9F4DB] mx-5 ">
                            <div className="">
                                <ul className="flex justify-evenly items-center">
                                    {socials.map((item) => (
                                        <li
                                            key={item.id}
                                            className="p-4 rounded-lg flex items-center border border-gray-300 justify-center group transition-all duration-500 hover:-translate-y-2"
                                        >
                                            {" "}
                                            <item.icon />{" "}
                                        </li>
                                    ))}
                                </ul>
                                <div className=" mt-10 max-w-[100%]">
                                    <ul className="flex flex-col justify-between items-center gap-5">
                                        {PersonalInfo.map((item) => (
                                            <li
                                                key={item.id}
                                                className="m-2 w-full p-4 rounded-lg flex flex-row items-center border border-gray-300 group transition-all duration-500 hover:-translate-y-2"
                                            >
                                                <item.icon className="hidden md:block mx-3" />
                                                <span className="font-gochi text-slate-700 ring-offset-opacity-50">
                                                    {item.info}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                {/* </Slide> */}

                <div className="md:row-start-1 md:row-end-2 md:row-span-2 md:col-span-2 md:max-h-[1px]">
                    <div className="flex justify-center items-center stickyNote bg-[#A9F4DB]/40 !rotate-[-3deg] ">
                        <div className="body-container font-gochi">
                            I believe that every problem can be solved with one more <code className="code">&lt;if/&gt;</code> in the right place.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PersonalInfo