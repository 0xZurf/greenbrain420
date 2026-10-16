import { scorecard } from "../data/content.js";

// The signature element: a QC scorecard. This is what Green Brain produces, so it leads the site.
export default function Scorecard({ tilt = true }) {
  return (
    <div
      className={`bg-surface border border-line rounded-3xl p-7 md:p-8 w-full max-w-[420px] shadow-[0_24px_60px_-30px_rgba(22,24,20,0.35)] ${
        tilt ? "md:rotate-[-3deg]" : ""
      }`}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="display-sm">{scorecard.sample}</p>
          <p className="text-muted text-[0.95rem] mt-1">
            {scorecard.cultivar}, {scorecard.form}
          </p>
        </div>
        <span className="rounded-full bg-kelly text-black px-3 py-1 text-[0.85rem] font-semibold">
          {scorecard.verdict}
        </span>
      </div>

      <div className="mt-7 space-y-4">
        {scorecard.categories.map((c) => (
          <div key={c.label}>
            <div className="flex justify-between text-[0.95rem] mb-1.5">
              <span className="text-ink">{c.label}</span>
              <span className="text-head font-semibold tabular-nums">{c.score.toFixed(1)}</span>
            </div>
            <div className="bar">
              <span style={{ width: `${c.score * 10}%` }} />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 pt-6 border-t border-line flex items-end justify-between">
        <span className="text-muted">Overall</span>
        <span className="display-lg text-head leading-none">
          {scorecard.total.toFixed(1)}
          <span className="text-muted text-[1.1rem] font-medium ml-1">/ 10</span>
        </span>
      </div>
    </div>
  );
}
