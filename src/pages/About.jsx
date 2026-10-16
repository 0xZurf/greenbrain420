import { Link } from "react-router-dom";
import PageHeader from "../components/PageHeader.jsx";
import Placeholder from "../components/Placeholder.jsx";
import Scorecard from "../components/Scorecard.jsx";
import { process, scorecard } from "../data/content.js";

export default function About() {
  return (
    <>
      <PageHeader
        title="Built by people who smoke."
        lede="Green Brain started because the gap between what a label says and what ends up in the jar kept getting wider. We wanted a scorecard we could trust. So we built one."
      />

      <section className="wrap pb-16 md:pb-24">
        <Placeholder label="Studio photo" ratio="21 / 9" rounded="rounded-3xl" />
      </section>

      <section className="wrap section rule grid gap-12 lg:grid-cols-[1fr_1.2fr]">
        <h2 className="display-lg">What we stand on</h2>
        <div className="space-y-6 text-[1.1rem] leading-relaxed">
          <p>
            Every brand says their flower is fire. Most of the time nobody outside the building has checked. We check. Same rubric, same process, no matter who sent the jar or how much they spent on the packaging.
          </p>
          <p>
            We are not a lab. Labs tell you potency and contaminants. We tell you if it is actually good to smoke: how it looks, how it smells, how it burns, how it hits. That is the part buyers and consumers care about and the part almost nobody measures.
          </p>
          <p>
            Scores are never for sale. Brands can pay for media, they can pay for QC, they cannot pay for a number.
          </p>
        </div>
      </section>

      {/* Process: a real sequence, so numbering earns its place */}
      <section className="wrap section rule">
        <h2 className="display-lg mb-12">How a batch moves through</h2>
        <ol className="grid gap-10 md:grid-cols-3">
          {process.map((p, i) => (
            <li key={p.step} className="border-t border-kelly pt-6">
              <span className="text-kelly-deep font-[family-name:var(--font-display)] font-bold text-[1.1rem]">
                {i + 1}
              </span>
              <h3 className="display-md mt-3">{p.step}</h3>
              <p className="mt-4 text-ink">{p.text}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Rubric */}
      <section className="wrap section rule grid gap-12 lg:grid-cols-2 items-center">
        <div>
          <h2 className="display-lg">The rubric</h2>
          <p className="mt-6 text-[1.1rem] leading-relaxed max-w-[44ch]">
            Five categories, each scored out of ten, averaged into one overall number. A batch passes at 7.5 or above with no single category under 6.
          </p>
          <ul className="mt-8 divide-y divide-line border-y border-line">
            {scorecard.categories.map((c) => (
              <li key={c.label} className="py-4 grid grid-cols-[9rem_1fr] gap-4">
                <span className="text-head font-semibold">{c.label}</span>
                <span className="text-muted">{rubricNote[c.label]}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex justify-center lg:justify-end">
          <Scorecard tilt={false} />
        </div>
      </section>

      <section className="wrap section rule text-center">
        <h2 className="display-lg mx-auto max-w-[16ch]">Want your product on the card?</h2>
        <Link to="/contact" className="btn btn-primary mt-8">
          Send us product
        </Link>
      </section>
    </>
  );
}

const rubricNote = {
  Appearance: "Trim, structure, trichome coverage, color, and any visible defects.",
  Aroma: "Intensity and clarity of the nose, dry and after the grind.",
  Flavor: "Does the taste match the nose, and does it hold through the session.",
  Smoke: "Burn rate, ash color, harshness, and how well it stays lit.",
  Effect: "Onset, character, duration, and whether it matches the label.",
};
