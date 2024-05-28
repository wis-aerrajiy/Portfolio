import { lazy, Suspense } from 'react';

const HeroSection = lazy(() => import('./Components/HeroSection'));

export const Home = () => {
    return (
        <>
            <Suspense fallback={<div>Loading...</div>}>
                <HeroSection />
            </Suspense>

            {/* <section id="hero" className="md:mt-20">
                <div className="container mx-auto px-6 flex flex-col-reverse space-x-6 md:flex-row">
                    <div
                        className="md:w-1/2 flex flex-col space-y-5 justify-center py-8  text-center md:text-left text-slate-90000">
                        <h1 className="text-4xl md:text-5xl font-bold text-blue-900">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                        </h1>
                        <p className="text-lg text-slate-500">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, blanditiis hic. Eos
                            doloremque
                            magni accusamus quae ducimus hic mollitia animi at fugiat, vero deleniti magnam, veniam illo
                            suscipit impedit ullam.
                        </p>
                        <button
                            className="bg-green-600/15 text-green-600 py-2 px-6 rounded-lg mt-4 self-center md:self-start hover:bg-green-600/20 hover:text-green-700 transition duration-300 ease-in-out ">Get
                            Started</button>
                    </div>

                    <div className="md:w-1/2 ">
                        <img src="/hero_image.svg" alt="hero image" className="w-full h-full lg:none" />
                    </div>
                </div>
            </section>

            <section>
                <div className="container mx-auto my-32 text-center">
                    <h2 className="font-bold text-3xl">"Best Practices" don't actually work for everyone.</h2>
                    <div className="m-3 mt-10 flex flex-col space-x-0 space-y-5 md:flex-row md:space-x-5 md:space-y-0">

                        <div
                            className="container md:w-1/3 flex flex-col items-center p-6 space-y-2 rounded-md border border-slate-200 bg-slate-200/55 ring-1">
                            <img src="https://smtlabs.io/images/nodejs-bg.png" alt="adame image" className="w-16 rounded-full" />
                            <h3 className="text-lg font-bold text-slate-900">
                                Adam Wathan
                            </h3>
                            <p className="text-slate">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores ratione inventore quos,
                                officiis delectus est optio repellat maiores aliquam voluptas.
                            </p>
                        </div>

                        <div
                            className="container md:w-1/3 flex flex-col items-center p-6 space-y-2 rounded-md border border-slate-200 bg-slate-200/55 ring-1">
                            <img src="https://smtlabs.io/images/nodejs-bg.png" alt="adame image" className="w-16 rounded-full" />
                            <h3 className="text-lg font-bold text-slate-900">
                                Adam Wathan
                            </h3>
                            <p className="text-slate">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores ratione inventore quos,
                                officiis delectus est optio repellat maiores aliquam voluptas.
                            </p>
                        </div>

                        <div
                            className="container md:w-1/3 flex flex-col items-center p-6 space-y-2 rounded-md border border-slate-200 bg-slate-200/55 ring-1">
                            <img src="https://smtlabs.io/images/nodejs-bg.png" alt="adame image" className="w-16 rounded-full" />
                            <h3 className="text-lg font-bold text-slate-900">
                                Adam Wathan
                            </h3>
                            <p className="text-slate">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores ratione inventore quos,
                                officiis delectus est optio repellat maiores aliquam voluptas.
                            </p>
                        </div>
                    </div>
                </div>
            </section> */}
        </>
    )
}
