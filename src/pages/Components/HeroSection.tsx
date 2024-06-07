import { TypeAnimation } from 'react-type-animation';
import { useNavigate } from 'react-router-dom';
import React from 'react';
import { Fade } from "react-awesome-reveal";
import { SelectedBarContext } from '../../Context/SelectedBarContext';


const HeroSection = () => {
    const navigate = useNavigate();
    const { setSelectedBar } = React.useContext(SelectedBarContext);

    const InfosAnimation = () => {
        return (
            <TypeAnimation
                sequence={[
                    'Fullstack Developer ',
                    1000,
                    'DevOps Engineer ',
                    1000,
                    'Software Engineer ',
                ]}

                wrapper="h1"
                speed={60}
                style={{ display: 'inline-block' }}
                repeat={Infinity}
                cursor={true}
                className='md:text-4xl font-gochi'
            />
        );
    };


    const moreButton = () => {
        setSelectedBar(1);
        navigate('/about');
    }

    React.useEffect(() => {
        const handleScroll = (event: any) => {
            if (Math.ceil(window.innerHeight + window.scrollY) >= Math.floor(document.body.scrollHeight) && event.deltaY > 0) {
                setSelectedBar(1);
                navigate('/about');
            }

            console.table({
                innerHeight: window.innerHeight,
                scrollY: window.scrollY,
                bodyScrollHeight: document.body.scrollHeight,
            });
        };
        window.addEventListener('wheel', handleScroll);
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('wheel', handleScroll);
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <section id="hero">
                <div className="flex flex-col justify-center items-center  min-h-screen">
                    <div className="flex flex-col ">
                        <Fade direction="down" triggerOnce big cascade damping={0.5} duration={2000}>
                            <h1 className="text-2xl md:text-6xl text-blue-900 ">
                                Hi, I'm <span className="text-blue-900">Aiman Errajiy</span>
                            </h1>
                        </Fade>

                        <div className="flex justify-start items-center space-x-4">
                            <Fade direction="left" triggerOnce className='align-middle'>
                                <span className="md:text-[2.5em] text-blue-900/80 left-0 font-gochi">I'm a </span>
                            </Fade>

                            <Fade direction="right" triggerOnce className='align-middle'>
                                <InfosAnimation />
                            </Fade>
                        </div>

                        <div className="mt-10" onClick={moreButton}>
                            <a href="#about" className="bg-blue-600/40 text-blue-900 px-14  py-3 rounded-xl hover:bg-blue-200 transition duration-300 ease-in-out">
                                Discover More ...
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* <section id="hero">
                <div className="flex flex-col justify-center items-center w-[100%] h-[100vh] min-h-[100vh] gap-52 pb-52">
                    <div className="flex flex-col -mt-10">
                        <h1 className="text-2xl md:text-8xl text-blue-900">
                            Hi, I'm <span className="text-blue-900">Aiman Errajiy</span>
                        </h1>

                        <div className="">
                            <span className="md:text-[2.5em] text-slate-500 mx-3 left-0">I'm a </span>
                            <InfosAnimation />
                        </div>
                    </div>
                </div>
            </section> */}
        </>
    )
}

export default HeroSection