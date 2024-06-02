import { lazy, Suspense } from 'react';

const AboutSection = lazy(() => import('./Components/ProjectsSection'));
import LoadingPage from './LoadingPage';

const Projects = () => {
    return (
        <>
            <div className="flex flex-col justify-center items-center">
                <Suspense fallback={<LoadingPage />}>
                    <AboutSection />
                </Suspense>
            </div>
        </>
    )
}

export default Projects