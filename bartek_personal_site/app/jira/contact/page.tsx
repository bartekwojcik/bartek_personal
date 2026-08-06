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
                    <p>for bug report or feature request.</p>
                </div>
            </div>
        </div>
    );
}
