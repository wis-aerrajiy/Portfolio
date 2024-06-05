import { AboutSection } from './Components';

// import { lazy, Suspense } from 'react';
// const AboutSection = lazy(() => import('./Components/AboutSection'));
// import LoadingPage from './LoadingPage';

const About = () => {
    return (
        <>
            <div className="flex flex-col justify-center items-center min-w-[100vw]">
                {/* <Suspense fallback={<LoadingPage />}> */}
                    <AboutSection />
                {/* </Suspense> */}
            </div>
        </>
    )
}

export default About;
