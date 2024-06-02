import { lazy, Suspense } from 'react';

const HeroSection = lazy(() => import('./Components/HeroSection'));
import LoadingPage from './LoadingPage';

export const Home = () => {
    return (
        <>
            <Suspense fallback={<LoadingPage />}>
                <HeroSection />
            </Suspense>
        </>
    )
}
