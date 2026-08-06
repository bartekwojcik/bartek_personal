import Link from 'next/link';

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

                <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-6 mb-12">
                    <p className="text-slate-800 leading-relaxed">
                        The app stores nothing and sends nothing anywhere. It runs inside Atlassian,
                        reads the issue you're looking at, draws the diagram in your browser, and
                        forgets about it.
                    </p>
                </div>

                <div className="mb-10">
                    <h2 className="text-2xl font-semibold mb-4 text-emerald-700">
                        What the app reads
                    </h2>
                    <p className="text-slate-700 mb-4">
                        When you open a Jira issue, the app requests that issue's description and
                        comments so it can find Mermaid code blocks in them. It holds the
                        <span className="font-medium"> read:jira-work </span>
                        scope and nothing else, so it cannot edit, delete or create anything in
                        your Jira.
                    </p>
                    <p className="text-slate-700">
                        Reading happens on demand while you have the issue open. Close the issue
                        and the request stops.
                    </p>
                </div>

                <div className="mb-10">
                    <h2 className="text-2xl font-semibold mb-4 text-emerald-700">
                        What the app stores
                    </h2>
                    <p className="text-slate-700">
                        Nothing. There's no database, no cache and no log of your content. The
                        diagram source stays in the Jira issue where you wrote it, which is also
                        the only copy. Uninstall the app and there's nothing of yours left behind,
                        because there never was anything.
                    </p>
                </div>

                <div className="mb-10">
                    <h2 className="text-2xl font-semibold mb-4 text-emerald-700">
                        Where processing happens
                    </h2>
                    <p className="text-slate-700 mb-4">
                        Entirely in your browser. The app is built on Atlassian Forge and runs on
                        Atlassian's infrastructure. Your issue content is turned into a diagram
                        locally, on your machine.
                    </p>
                    <p className="text-slate-700">
                        No data leaves Atlassian. There are no external servers, no analytics, no
                        trackers and no third parties. I have no way of seeing what you draw.
                    </p>
                </div>

                <div className="mb-10">
                    <h2 className="text-2xl font-semibold mb-4 text-emerald-700">
                        Personal data
                    </h2>
                    <p className="text-slate-700">
                        The app does not collect, store or process personal data. Comment authors'
                        display names appear as labels next to their diagrams while you're looking
                        at the issue, and that's read live from Jira rather than kept.
                    </p>
                </div>

                <div className="mb-10">
                    <h2 className="text-2xl font-semibold mb-4 text-emerald-700">
                        Billing
                    </h2>
                    <p className="text-slate-700">
                        Payment and licensing are handled by Atlassian Marketplace. I see the
                        billing and licence records Atlassian shares with app vendors. I never see
                        payment details. Atlassian's own privacy policy covers that side.
                    </p>
                </div>

                <div className="mb-10">
                    <h2 className="text-2xl font-semibold mb-4 text-emerald-700">
                        Changes
                    </h2>
                    <p className="text-slate-700">
                        If the app ever starts storing or sending data, this page changes first and
                        the date at the top moves. That would need a new app version and new
                        permissions, which your Jira admin has to approve.
                    </p>
                </div>

                <div className="border-t border-slate-200 pt-8">
                    <h2 className="text-lg font-semibold mb-3">
                        Questions
                    </h2>
                    <p className="text-slate-700 mb-2">
                        Bartosz Wojcik, Bordeaux, France
                    </p>
                    <p className="text-slate-700">
                        <a
                            href="mailto:bartek.bordeaux@gmail.com"
                            className="text-emerald-700 hover:text-emerald-800 underline"
                        >
                            bartek.bordeaux@gmail.com
                        </a>
                    </p>
                    <p className="text-slate-600 mt-4">
                        <Link href="/jira/contact" className="text-emerald-700 hover:text-emerald-800 underline">
                            Support
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}
