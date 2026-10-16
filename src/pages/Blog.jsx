import { useState } from "react";
import PageHeader from "../components/PageHeader.jsx";
import Placeholder from "../components/Placeholder.jsx";
import { posts } from "../data/content.js";

const kinds = ["All", "Review", "Journal", "Video", "Media"];

export default function Blog() {
  const [kind, setKind] = useState("All");
  const shown = kind === "All" ? posts : posts.filter((p) => p.kind === kind);
  const [lead, ...rest] = shown;

  return (
    <>
      <PageHeader title="Blog" lede="Reviews, notes from the bench, and everything we film.">
        <div className="flex flex-wrap gap-2 mt-8" role="tablist" aria-label="Filter posts">
          {kinds.map((k) => (
            <button
              key={k}
              type="button"
              role="tab"
              aria-selected={kind === k}
              onClick={() => setKind(k)}
              className={`rounded-full px-4 py-1.5 text-[0.95rem] font-semibold border transition-colors ${
                kind === k ? "bg-head text-bg border-head" : "border-line text-muted hover:text-head"
              }`}
            >
              {k}
            </button>
          ))}
        </div>
      </PageHeader>

      <section className="wrap pb-24">
        {lead && (
          <article className="grid gap-8 lg:grid-cols-[1.4fr_1fr] items-end pb-16 border-b border-line mb-16">
            <Placeholder label={lead.kind} ratio="16 / 9" rounded="rounded-3xl" />
            <div>
              <div className="flex gap-4 text-muted text-[0.9rem] mb-3">
                <span>{lead.kind}</span>
                <span>{lead.date}</span>
              </div>
              <h2 className="display-md">{lead.title}</h2>
              <p className="mt-4 text-ink">{lead.excerpt}</p>
              <a href="#" className="link-underline inline-block mt-6">
                Read
              </a>
            </div>
          </article>
        )}

        <div className="grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((p) => (
            <article key={p.title}>
              <Placeholder label={p.kind} ratio="4 / 3" />
              <div className="flex gap-4 text-muted text-[0.9rem] mt-4 mb-2">
                <span>{p.kind}</span>
                <span>{p.date}</span>
              </div>
              <h3 className="display-sm">{p.title}</h3>
              <p className="mt-3 text-muted text-[0.98rem]">{p.excerpt}</p>
            </article>
          ))}
        </div>

        {shown.length === 0 && <p className="text-muted">Nothing filed under that yet.</p>}
      </section>
    </>
  );
}
