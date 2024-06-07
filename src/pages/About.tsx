// import { Zoom } from 'react-awesome-reveal';
import { AboutSection } from './Components';

const About = () => {
    return (
        <>
            <div className="flex flex-col justify-center items-center min-w-[100vw]">
                {/* <Zoom
                    triggerOnce
                    direction='up'
                    duration={2000}
                > */}
                    <AboutSection />
                {/* </Zoom> */}
            </div>
        </>
    )
}

export default About;
