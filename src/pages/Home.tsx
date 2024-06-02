import { lazy, Suspense } from 'react';

const HeroSection = lazy(() => import('./Components/HeroSection'));

export const Home = () => {
    return (
        <>
            <Suspense fallback={<div>Loading...</div>}>
                <HeroSection />
            </Suspense>
        </>
    )
}
