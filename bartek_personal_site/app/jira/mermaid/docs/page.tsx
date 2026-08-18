function Code({ children }: { children: string }) {
    return (
        <pre className="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-4 overflow-x-auto text-sm font-mono text-slate-800">
            {children}
        </pre>
    );
}

export default function JiraMermaidDocs() {
    return (
        <div className="min-h-screen bg-white text-slate-900">

            <div className="max-w-3xl mx-auto px-6 py-16">
                <p className="text-sm font-medium text-emerald-700 mb-3">
                    Inline Mermaid Diagrams for Jira
                </p>
                <h1 className="text-4xl font-bold mb-3">
                    Documentation
                </h1>
                <p className="text-slate-500 mb-12">
                    Setup and usage
                </p>

                <div className="mb-10">
                    <h2 className="text-2xl font-semibold mb-4 text-emerald-700">
                        What it does
                    </h2>
                    <p className="text-slate-700">
                        Jira shows Mermaid source as plain text. This app draws it. Diagrams written
                        in an issue description or a comment are rendered in a panel on the issue.
                    </p>
                </div>

                <div className="mb-10">
                    <h2 className="text-2xl font-semibold mb-4 text-emerald-700">
                        Install
                    </h2>
                    <p className="text-slate-700 mb-4">
                        Install from the Atlassian Marketplace, choose your site, confirm.
                    </p>
                </div>

                <div className="mb-10">
                    <h2 className="text-2xl font-semibold mb-4 text-emerald-700">
                        Usage
                    </h2>
                    <p className="text-slate-700">
                        The app recognises a diagram by how the source starts:
                        <span className="font-mono text-sm"> graph TD</span>,
                        <span className="font-mono text-sm"> sequenceDiagram</span>,
                        <span className="font-mono text-sm"> gantt</span>, and so on.
                    </p>
                </div>

                <div className="mb-10">
                    <h2 className="text-2xl font-semibold mb-4 text-emerald-700">
                        Quick start
                    </h2>
                    <ol className="text-slate-700 list-decimal pl-5 space-y-2 mb-4">
                        <li>Open any Jira issue and click Edit on the description.</li>
                        <li>Insert a code block: type three backticks and press Enter.</li>
                        <li>Paste the source below into the block.</li>
                        <li>Save the issue.</li>
                        <li>Expand the Diagrams panel in the right-hand column.</li>
                    </ol>
                    <Code>{`graph TD
  A[Start] --> B{Ready?}
  B -->|Yes| C[Ship]
  B -->|No| A`}</Code>
                </div>

                <div className="mb-10">
                    <h2 className="text-2xl font-semibold mb-4 text-emerald-700">
                        Where the diagrams appear
                    </h2>
                    <p className="text-slate-700 mb-4">
                        <span className="font-medium">Diagrams panel</span>, right-hand column of the
                        issue.
                    </p>
                    <p className="text-slate-700 mb-4">
                        <span className="font-medium">Apps button</span> on the issue, then Diagrams.
                        Full width, better for wide diagrams.
                    </p>
                </div>

                <div className="mb-10">
                    <h2 className="text-2xl font-semibold mb-4 text-emerald-700">
                        What the app reads
                    </h2>
                    <p className="text-slate-700 mb-4">
                        The issue description first, then every comment, oldest first. Code blocks
                        inside panels, expands, tables and lists are found too.
                    </p>
                </div>

                <div className="mb-10">
                    <h2 className="text-2xl font-semibold mb-4 text-emerald-700">
                        Features
                    </h2>

                    <h3 className="text-lg font-semibold mb-2">Fullscreen</h3>
                    <p className="text-slate-700 mb-4">
                        Click Fullscreen on any diagram. Zoom with the + and &minus; buttons or the
                        <span className="font-mono text-sm"> + </span> and
                        <span className="font-mono text-sm"> - </span> keys. Reset with the button or
                        the <span className="font-mono text-sm">0</span> key. Drag to pan. Close with
                        the button or <span className="font-mono text-sm">Esc</span>.
                    </p>

                    <h3 className="text-lg font-semibold mb-2">Export</h3>
                    <p className="text-slate-700 mb-4">
                        PNG for pasting into a document or chat. SVG for vector editing, with the
                        text still selectable.
                    </p>

                    <h3 className="text-lg font-semibold mb-2">Source</h3>
                    <p className="text-slate-700 mb-4">
                        Shows the Mermaid text behind a diagram, for copying it to another issue.
                    </p>

                    <h3 className="text-lg font-semibold mb-2">Refresh</h3>
                    <p className="text-slate-700 mb-4">
                        Re-reads the issue. Use it after editing the description in another tab. The
                        time of the last refresh is shown.
                    </p>

                    <h3 className="text-lg font-semibold mb-2">Dark mode</h3>
                    <p className="text-slate-700 mb-4">
                        Diagrams follow the Jira theme and redraw with dark colours.
                    </p>

                    <h3 className="text-lg font-semibold mb-2">Large diagrams</h3>
                    <p className="text-slate-700 mb-4">
                        A diagram with more than 300 connections or 500 lines is not drawn straight
                        away. A Render it anyway button appears. This stops one enormous diagram from
                        freezing the issue view.
                    </p>

                    <h3 className="text-lg font-semibold mb-2">Syntax errors</h3>
                    <p className="text-slate-700">
                        A broken diagram shows the line number of the error and a toggle to view the
                        source. Other diagrams on the issue still render.
                    </p>
                </div>

                <div className="mb-10">
                    <h2 className="text-2xl font-semibold mb-4 text-emerald-700">
                        Diagrams to test with
                    </h2>
                    <p className="text-slate-700 mb-4">
                        Paste any of these into a Jira code block.
                    </p>

                    <h3 className="text-lg font-semibold mb-2">Flowchart</h3>
                    <Code>{`graph LR
  A[Request] --> B(Validate)
  B --> C{Valid?}
  C -->|Yes| D[Process]
  C -->|No| E[Reject]`}</Code>

                    <h3 className="text-lg font-semibold mb-2">Sequence</h3>
                    <Code>{`sequenceDiagram
  Customer->>API: POST /order
  API->>Database: INSERT
  Database-->>API: ok
  API-->>Customer: 201 Created`}</Code>

                    <h3 className="text-lg font-semibold mb-2">State</h3>
                    <Code>{`stateDiagram-v2
  [*] --> Open
  Open --> InProgress: assign
  InProgress --> Review: submit
  Review --> Done: approve
  Review --> InProgress: reject
  Done --> [*]`}</Code>

                    <h3 className="text-lg font-semibold mb-2">Gantt</h3>
                    <Code>{`gantt
  title Release plan
  dateFormat YYYY-MM-DD
  section Build
    Development   :a1, 2026-01-06, 20d
    Code freeze   :milestone, after a1, 0d
  section Ship
    QA            :a2, after a1, 10d
    Release       :after a2, 3d`}</Code>

                    <h3 className="text-lg font-semibold mb-2">Entity relationship</h3>
                    <Code>{`erDiagram
  CUSTOMER ||--o{ ORDER : places
  ORDER ||--|{ LINE_ITEM : contains
  PRODUCT ||--o{ LINE_ITEM : "appears in"`}</Code>

                    <h3 className="text-lg font-semibold mb-2">Pie</h3>
                    <Code>{`pie title Time spent
  "Development" : 45
  "Review" : 25
  "Meetings" : 30`}</Code>
                </div>

                <div className="mb-10">
                    <h2 className="text-2xl font-semibold mb-4 text-emerald-700">
                        Supported diagrams
                    </h2>
                    <p className="text-slate-700">
                        Every diagram type in Mermaid 11: architecture, block, C4, class, entity
                        relationship, flowchart, flowchart-elk, Gantt, gitGraph, info, journey,
                        kanban, mindmap, packet, pie, quadrant chart, radar, requirement, sankey,
                        sequence, state, timeline, treemap, XY chart and ZenUML.
                    </p>
                </div>

                <div className="mb-10">
                    <h2 className="text-2xl font-semibold mb-4 text-emerald-700">
                        Licensing
                    </h2>
                    <p className="text-slate-700 mb-4">
                        Up to 10 users: everything, free.
                    </p>
                    <p className="text-slate-700 mb-4">
                        More than 10 users: everything, paid via Atlassian.
                    </p>
                </div>

                <div className="mb-10">
                    <h2 className="text-2xl font-semibold mb-4 text-emerald-700">
                        Privacy
                    </h2>
                    <p className="text-slate-700 mb-4">
                        The app runs on Atlassian infrastructure, makes no outbound network requests
                        and stores nothing. Its only permission is
                        <span className="font-mono text-sm"> read:jira-work</span>, which is
                        read-only. It has no logging and no analytics.
                    </p>
                    <p className="text-slate-700">
                        <a
                            href="/jira/privacy"
                            className="text-emerald-700 hover:text-emerald-800 underline"
                        >
                            Full privacy policy
                        </a>
                    </p>
                </div>

                <div className="mb-10">
                    <h2 className="text-2xl font-semibold mb-4 text-emerald-700">
                        Troubleshooting
                    </h2>

                    <h3 className="text-lg font-semibold mb-2">The panel says there are no diagrams</h3>
                    <p className="text-slate-700 mb-4">
                        The code block has to start with a diagram type. Blank lines above it are
                        fine, other text is not. Then click Refresh.
                    </p>

                    <h3 className="text-lg font-semibold mb-2">A diagram did not update after an edit</h3>
                    <p className="text-slate-700 mb-4">
                        Click Refresh, or reload the issue.
                    </p>

                    <h3 className="text-lg font-semibold mb-2">The block is tagged as another language</h3>
                    <p className="text-slate-700 mb-4">
                        A block marked as JavaScript, Python or anything else is left alone on
                        purpose. Set the language back to none or plain text.
                    </p>

                    <h3 className="text-lg font-semibold mb-2">The panel is not on the issue</h3>
                    <p className="text-slate-700 mb-4">
                        Check the app is installed under Settings, Apps, Manage apps. Then reload the
                        issue.
                    </p>

                    <h3 className="text-lg font-semibold mb-2">A permission message appears</h3>
                    <p className="text-slate-700">
                        Your Jira account cannot view that issue. Ask the project administrator.
                    </p>
                </div>

                <div className="border-t border-slate-200 pt-8">
                    <h2 className="text-lg font-semibold mb-3">
                        Support
                    </h2>
                    <p className="text-slate-700">
                        <a
                            href="mailto:bartek.bordeaux@gmail.com"
                            className="text-emerald-700 hover:text-emerald-800 underline"
                        >
                            bartek.bordeaux@gmail.com
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
}
