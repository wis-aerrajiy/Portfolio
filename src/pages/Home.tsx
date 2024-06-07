import { lazy, Suspense } from 'react';
import { HeroSection } from './Components';

// const HeroSection = lazy(() => import('./Components/HeroSection'));
// import LoadingPage from './LoadingPage';

export const Home = ({ setSelectedBar } : any) => {
    return (
        <>
            {/* <Suspense fallback={<LoadingPage />}> */}
                <HeroSection />
            {/* </Suspense> */}
        </>
    )
}
