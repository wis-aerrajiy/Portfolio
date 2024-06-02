import { lazy, Suspense } from 'react';

const AboutSection = lazy(() => import('./Components/ProjectsSection'));

const Projects = () => {
    return (
        <>
            <div className="flex flex-col justify-center items-center">
                <Suspense fallback={<div>Loading...</div>}>
                    <AboutSection />
                </Suspense>
            </div>
        </>
    )
}

export default Projects