import Image from 'next/image';

export default function AboutMe() {
    return (
        <div className="min-h-screen bg-slate-900 text-slate-100">

            <div className="max-w-7xl mx-auto px-6 py-16">
                <div className="mb-16">
                    <h1 className="text-5xl font-bold mb-6 text-white">
                        Hey, I'm Bartosz
                    </h1>
                    <p className="text-xl text-slate-300 leading-relaxed max-w-3xl">
                        Thank you for visiting this page! I'd like you to know a little bit more about me.
                    </p>

                    <p className="text-xl text-slate-300 leading-relaxed max-w-3xl">
                        I build things with .NET and get humbled by Rust on a regular basis.
                        Currently based in Bordeaux where I'm learning that French bureaucracy is harder than distributed systems.
                    </p>
                </div>

                {/* About Section */}
                <div className="grid md:grid-cols-2 gap-12 mb-16">
                    <div>
                        <h2 className="text-3xl font-semibold mb-6 text-emerald-400">
                            What I'm About
                        </h2>
                        <div className="space-y-4 text-slate-300">
                            <div className="flex items-start space-x-3">
                                <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2 flex-shrink-0"></div>
                                <p>I'm currently based in Bordeaux. A place my wife and I picked after performing a multi-objective optimization on many different cities statistics. You can't beat the blend of sun, wine and TGV. </p>
                            </div>
                            <div className="flex items-start space-x-3">
                                <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2 flex-shrink-0"></div>
                                <p>Before that we lived in the USA, Michigan where I worked for LexisNexis and my wife at Michigan State University</p>
                            </div>
                            <div className="flex items-start space-x-3">
                                <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2 flex-shrink-0"></div>
                                <p>And before that we lived in Edinburgh where I did master's degree and worked with machine learning. I picked ML because it seemed absolutely stunning how useful these algorithms might be in the future (I wasn't wrong).</p>
                            </div>
                            <div className="flex items-start space-x-3">
                                <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2 flex-shrink-0"></div>
                                <p>And even before that I grew up in Warsaw where I had a chance to study computer science and put my foot in the industry.</p>
                            </div>
                            <div className="flex items-start space-x-3">
                                <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2 flex-shrink-0"></div>
                                <p>Bordeaux is hopefully our final stop where we plan to put our down roots.</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-slate-800 rounded-lg p-8 text-center border border-slate-800">
                        <div className="mb-4">
                            <Image
                                src="/bartek_morda.png"
                                alt="morda bartka"
                                width={1184}
                                height={864}
                                className="w-full max-w-[700px] h-auto rounded mx-auto"
                            />
                        </div>

                        <p className="text-sm text-slate-100">
                            Here is me hiking somewhere, probably Pyrenees. I had had a stupid hat and asked Gemini to remove it.
                        </p>
                    </div>
                </div>


                <div className="mb-16">
                    <h2 className="text-3xl font-semibold mb-8 text-emerald-400">
                        Things That Make Me Happy
                    </h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="space-y-4 text-slate-300">
                            <div className="flex items-start space-x-3">
                                <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2 flex-shrink-0"></div>
                                <p>Coding things that work (or don't, we learned something from that setback)</p>
                            </div>
                            <div className="flex items-start space-x-3">
                                <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2 flex-shrink-0"></div>
                                <p>Reading science, social science, psychology or philosophy</p>
                            </div>
                            <div className="flex items-start space-x-3">
                                <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2 flex-shrink-0"></div>
                                <p>Hiking and bouldering. Nothing better than a few weeks without screens.</p>
                            </div>
                            <div className="flex items-start space-x-3">
                                <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2 flex-shrink-0"></div>
                                <p>Playing BG3 with my wife (where usually I'm Dark Urge and she plays as Astarion)</p>
                            </div>
                            <div className="flex items-start space-x-3">
                                <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2 flex-shrink-0"></div>
                                <p>Currently trying to learn French well enough for natural conversations. Turns out speaking a language is much harder than reading documentation on it</p>
                            </div>
                        </div>

                        <div className="inline-block">
                            <Image
                                src="/happy_things.png"
                                alt="happy things"
                                width={800}
                                height={100}
                                className="h-auto rounded block"
                            />
                            <p className="text-sm text-slate-100 text-center ">
                            These makes me happy too!
                            </p>
                        </div>
                    </div>
                </div>

                {/* Things That Make Me Unhappy */}
                <div className="mb-16">
                    <h2 className="text-3xl font-semibold mb-6 text-red-400">
                        Things That Make Me Unhappy
                    </h2>
                    <div className="bg-slate-800 rounded-lg p-8 border border-slate-700">
                        <div className="space-y-4 text-slate-300">
                            <div className="flex items-start space-x-3">
                                <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                                <p>French bureaucracy. Can't count the poor trees that were cut for paper just so I could post already posted document.</p>
                            </div>
                            <div className="flex items-start space-x-3">
                                <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                                <p>LinkedIn posts. Enough said.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Message to Hiring Manager */}
                <div className="mb-16">
                    <h2 className="text-3xl font-semibold mb-6 text-emerald-400">
                        A Note for You, Hiring Manager
                    </h2>
                    <div className="bg-slate-800 rounded-lg p-8 border border-slate-700">
                        <div className="text-slate-300 leading-relaxed space-y-4">
                            <p>
                                I hope you appreciate that I made this page specifically for you. You might be here because
                                you found it strange that I mentioned kindness and intellectual honesty in my CV instead of the usual
                                "passionate about learning TurboFramework and leveraging cloud-native AI solutions" buzzword.
                                The reason is I've watched more projects crash and burn because of internal tensions
                                than because they picked the wrong database or used an outdated framework.
                            </p>
                            <p>
                                There's this persistent myth that programmers are antisocial nerds who just want to code in dark rooms.
                                Anyone who has actually worked in software engineering knows that building good software is fundamentally about people.
                                You need people who can explain complex technical decisions without being condescending.
                                People who can disagree about architecture choices without taking it personally.
                            </p>
                            <p>
                                The technical stuff matters too, obviously. I care deeply about writing maintainable code, choosing the right tools,
                                and understanding system trade-offs. Lately, I have been reading about and practicing distributed systems and microservices.
                            </p>
                            <p>One of my favorite tech role models is <a
                                href="https://www.linkedin.com/in/charity-majors"
                                target="_blank"
                                rel="noopener nonreferrer"
                                className="text-emerald-400 hover:text-emerald-300 underline"
                            >Charity Majors</a>, who writes insightful articles on technology, management
                                and simply people. That, and{' '}
                                <a
                                    href="https://newsletter.pragmaticengineer.com/p/observability-the-present-and-future"
                                    target="_blank"
                                    rel="noopener nonreferrer"
                                    className="text-emerald-400 hover:text-emerald-300 underline"
                                >observability</a>. She combined both deep technical knowledge, intellectual flexibility and understanding of human nature and it's impact on organizations.</p>

                            <p>
                                As for AI replacing us all, I think we're safe for now. And when that day comes, we'd better hope we've taught them
                                to be kind too. There's some interesting research suggesting that{' '}
                                <a
                                    href="https://arxiv.org/pdf/2402.14531"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-emerald-400 hover:text-emerald-300 underline"
                                >
                                    being polite to AI systems might actually improve their performance
                                </a>
                                . So being human is not going out of fashion anytime soon.
                            </p>
                        </div>
                    </div>
                </div>


                <div className="text-center">

                    <p className="text-xl text-slate-300 mb-8">
                        If you're working on software that solves actual problems and need someone to help you with that, send me an email at:
                    </p>
                    <div className="flex justify-center space-x-4">
                        <a
                            href="mailto:bartek.bordeaux@gmail.com"
                            className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-3 rounded-lg font-medium transition-colors"
                        >
                            bartek.bordeaux@gmail.com
                        </a>

                    </div>
                </div>
            </div>
        </div>
    );
}