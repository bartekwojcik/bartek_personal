import Link from 'next/link';

export default function JiraContact() {
    return (
        <div className="min-h-screen bg-white text-slate-900">

            <div className="max-w-3xl mx-auto px-6 py-16">
                <p className="text-sm font-medium text-emerald-700 mb-3">
                    Inline Mermaid Diagrams for Jira
                </p>
                <h1 className="text-4xl font-bold mb-6">
                    Support
                </h1>
                <p className="text-lg text-slate-700 leading-relaxed mb-12">
                    I wrote this app and I'm the one who answers the mail. There's no ticket
                    system and no bot in between.
                </p>

                <div className="mb-12">
                    <h2 className="text-2xl font-semibold mb-4 text-emerald-700">
                        Email me
                    </h2>
                    <a
                        href="mailto:bartek.bordeaux@gmail.com"
                        className="inline-block bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                    >
                        bartek.bordeaux@gmail.com
                    </a>
                    <p className="text-slate-600 mt-4">
                        I reply within two working days. I'm in Bordeaux, so that's CET.
                    </p>
                </div>

                <div className="mb-12">
                    <h2 className="text-2xl font-semibold mb-4 text-emerald-700">
                        Reporting a problem
                    </h2>
                    <p className="text-slate-700 mb-4">
                        Diagrams break in ways that are hard to guess at from a description.
                        Send me these and I'll usually have an answer the same day:
                    </p>
                    <div className="space-y-3 text-slate-700">
                        <div className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2 flex-shrink-0"></div>
                            <p>The Mermaid source that misbehaves, as text rather than a screenshot</p>
                        </div>
                        <div className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2 flex-shrink-0"></div>
                            <p>What you expected to see, and what you got</p>
                        </div>
                        <div className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2 flex-shrink-0"></div>
                            <p>Your browser, and whether Jira was in light or dark mode</p>
                        </div>
                        <div className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2 flex-shrink-0"></div>
                            <p>Your Jira site URL, if the problem only happens on one instance</p>
                        </div>
                    </div>
                </div>

                <div className="mb-12">
                    <h2 className="text-2xl font-semibold mb-4 text-emerald-700">
                        Feature requests
                    </h2>
                    <p className="text-slate-700">
                        Send them. The app renders every diagram type Mermaid supports, so if
                        something doesn't draw it's a bug rather than a missing feature. Anything
                        beyond rendering is fair game and I'd like to hear it.
                    </p>
                </div>

                <div className="border-t border-slate-200 pt-8">
                    <h2 className="text-lg font-semibold mb-3">
                        App owner
                    </h2>
                    <p className="text-slate-700">
                        Bartosz Wojcik, Bordeaux, France
                    </p>
                    <p className="text-slate-600 mt-4">
                        <Link href="/jira/privacy" className="text-emerald-700 hover:text-emerald-800 underline">
                            Privacy policy
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}
