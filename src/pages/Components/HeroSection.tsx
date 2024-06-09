import { TypeAnimation } from 'react-type-animation';
import { useNavigate } from 'react-router-dom';
import React, { useEffect } from 'react';
import { Fade} from "react-awesome-reveal";
import { SelectedBarContext } from '../../Context/SelectedBarContext';

const InfosAnimation = ({
    isInfinity,
    Wordsequence,
    className
}: any) => {
    return (
        <TypeAnimation
            sequence={Wordsequence}

            wrapper="h1"
            speed={60}
            style={{ display: 'inline-block' }}
            repeat={isInfinity}
            cursor={true}
            className={className}
        />
    );
};

const DiscoverMore = () => {
    const navigate = useNavigate();
    const { setSelectedBar } = React.useContext(SelectedBarContext);
    const [showDiscover, setShowDiscover] = React.useState(false);

    useEffect(() => {
        if (!showDiscover) {
            setTimeout(() => {
                setShowDiscover(true);
            }, 2000);
        }
    }, []);

    const moreButton = () => {
        setSelectedBar(1);
        navigate('/about');
    }
    return (
        showDiscover &&

        <Fade triggerOnce direction="up" duration={1000}>
            <div className="" onClick={moreButton}>
                <a href="#about" className="bg-blue-600/40 text-blue-900 px-14  py-3 rounded-xl hover:bg-blue-200 transition duration-300">
                    Discover More ...
                </a>
            </div>
        </Fade>
    )
};

const InfosAnimationPrononciation = () => {
    const [showInfo, setShowInfo] = React.useState(false);

    useEffect(() => {
        if (!showInfo) {
            setTimeout(() => {
                setShowInfo(true);
            }, 1000);
        }
    }, []);

    return (
        showInfo &&
        <div className={`flex justify-start items-center space-x-4 `}>
            <span className="md:text-[2.5em] text-blue-900/80 left-0 font-gochi">I'm a </span>

            <InfosAnimation
                Wordsequence={
                    [
                        'Fullstack Developer ',
                        1000,
                        'DevOps Engineer ',
                        1000,
                        'Software Engineer ',
                        1000,
                    ]
                }
                isInfinity={Infinity}
                className='md:text-4xl font-gochi'
            />
        </div>
    );
}

const HeroSection = () => {

    const images = [
        { src: "/images/nodejs.svg", alt: "nodejs" },
        { src: "/images/nestjs.svg", alt: "nestjs" },
        { src: "/images/reactjs.svg", alt: "reactjs" },
    ];

    // const navigate = useNavigate();
    const { setSelectedBar } = React.useContext(SelectedBarContext);
    const imageRefs = images.map(() => React.useRef<HTMLImageElement>(null));

    React.useEffect(() => {


        const randomPosition = (element: any) => {
            if (element.current) {
                element.current.style.top = `${Math.floor(Math.random() * 80)}%`;
                element.current.style.left = `${Math.floor(Math.random() * 60) + 10}%`;
                element.current.style.animationDuration = `${Math.floor(Math.random() * 4)}s`;

                element.current.style.width = `${Math.floor(Math.random() * 150) + 100}px`;
            }
        };

        imageRefs.forEach(randomPosition);

        const handleScroll = (event: any) => {
            if (Math.ceil(window.innerHeight + window.scrollY) >= Math.floor(document.body.scrollHeight) && event.deltaY > 0) {
                setSelectedBar(1);
                // navigate('/about');
            }
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
                <div className="relative flex flex-col justify-center items-center  min-h-screen">
                    <div className="flex flex-col space-y-6 z-10">
                        <h1 className="text-blue-900">
                            <InfosAnimation
                                isInfinity={false}
                                className="text-2xl md:text-6xl text-blue-900 font-bold"
                                Wordsequence={
                                    [ 'Hi, I\'m Aiman Errajiy', ]
                                }
                            />
                        </h1>

                        <InfosAnimationPrononciation />

                        <DiscoverMore />
                    </div>

                    {
                        images.map((image, index) => (
                            <img
                                ref={imageRefs[index]}
                                src={image.src}
                                alt={image.alt}
                                className="
                                    absolute bottom-0 right-0 blur-[10px] transition duration-300 transform hover:scale-110 opacity-45
                                    shadow-lg animate-bounce object-cover
                                "
                            />
                        ))
                    }

                </div>
            </section>
        </>
    )
}

export default HeroSection