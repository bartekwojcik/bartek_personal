export default function JiraPrivacy() {
    return (
        <div className="min-h-screen bg-white text-slate-900">

            <div className="max-w-3xl mx-auto px-6 py-16">
                <p className="text-sm font-medium text-emerald-700 mb-3">
                    Inline Mermaid Diagrams for Jira
                </p>
                <h1 className="text-4xl font-bold mb-3">
                    Privacy policy
                </h1>
                <p className="text-slate-500 mb-12">
                    Last updated 6 August 2026
                </p>

                <div className="mb-10">
                    <h2 className="text-2xl font-semibold mb-4 text-emerald-700">
                        What the app reads
                    </h2>
                    <p className="text-slate-700 mb-4">
                        When you open a Jira issue, the app requests that issue's description and
                        comments so it can find Mermaid code blocks in them. It holds the
                        <span className="font-medium"> read:jira-work </span>.
                    </p>
                </div>

                <div className="mb-10">
                    <h2 className="text-2xl font-semibold mb-4 text-emerald-700">
                        What the app stores
                    </h2>
                    <p className="text-slate-700">
                        Nothing.
                    </p>
                </div>

                <div className="mb-10">
                    <h2 className="text-2xl font-semibold mb-4 text-emerald-700">
                        Where processing happens
                    </h2>
                    <p className="text-slate-700 mb-4">
                        Entirely in browser.
                    </p>
                    <p className="text-slate-700">
                        No data leaves Atlassian.
                    </p>
                </div>

                <div className="mb-10">
                    <h2 className="text-2xl font-semibold mb-4 text-emerald-700">
                        Personal data
                    </h2>
                    <p className="text-slate-700">
                        The app does not collect, store or process personal data.
                    </p>
                </div>

                <div className="mb-10">
                    <h2 className="text-2xl font-semibold mb-4 text-emerald-700">
                        Billing
                    </h2>
                    <p className="text-slate-700">
                        Only for more than 10 users, paid via Atlassian
                    </p>
                </div>

                <div className="border-t border-slate-200 pt-8">
                    <h2 className="text-lg font-semibold mb-3">
                        Questions
                    </h2>
                    <p className="text-slate-700 mb-2">
                        Bartek Wojcik, Bordeaux, France
                    </p>
                    <p className="text-slate-700">
                        <a
                            href="mailto:support@networthview.net"
                            className="text-emerald-700 hover:text-emerald-800 underline"
                        >
                            support@networthview.net
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
}
