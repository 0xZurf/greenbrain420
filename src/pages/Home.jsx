import { Link } from "react-router-dom";
import Scorecard from "../components/Scorecard.jsx";
import Placeholder from "../components/Placeholder.jsx";
import { services, latest, press, brand } from "../data/content.js";

const ticker = [
  "Quality control",
  "Strain reviews",
  "Brand media",
  "Grow tours",
  "Pre-roll testing",
  "Concentrate reviews",
  "Product photography",
  "Honest scores",
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="wrap pt-14 md:pt-24 pb-16 md:pb-24">
        <div className="grid gap-12 lg:grid-cols-[1.25fr_1fr] items-center">
          <div>
            <h1 className="display-xl">
              Cannabis,
              <br />
              held to a
              <br />
              standard.
            </h1>
            <p className="lede mt-8">
              Independent quality control, honest reviews, and media for brands that actually smoke what they sell.
            </p>
            <div className="flex flex-wrap gap-3 mt-10">
              <Link to="/services" className="btn btn-primary">
                See what we do
              </Link>
              <Link to="/blog" className="btn btn-secondary">
                Read the latest
              </Link>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end">
            <Scorecard />
          </div>
        </div>
      </section>

      {/* Ticker: the single ambient motion moment on the site */}
      <div className="bg-kelly text-black py-4 marquee" aria-hidden="true">
        <div className="marquee-track">
          {[...ticker, ...ticker].map((t, i) => (
            <span key={i} className="display-sm whitespace-nowrap">
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Latest */}
      <section className="section">
        <div className="wrap">
          <div className="flex items-end justify-between gap-6 mb-10">
            <h2 className="display-lg">Latest</h2>
            <Link to="/blog" className="link-underline">
              Everything
            </Link>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {latest.map((item, i) => (
              <Link key={item.title} to={item.to} className="group block">
                <Placeholder label={item.kind} ratio={i === 1 ? "4 / 5" : "4 / 5"} />
                <div className="flex justify-between text-muted text-[0.9rem] mt-4 mb-2">
                  <span>{item.kind}</span>
                  <span>{item.meta}</span>
                </div>
                <h3 className="display-sm group-hover:text-kelly-deep transition-colors">{item.title}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Services: three columns divided by rules, not cards */}
      <section className="section rule">
        <div className="wrap">
          <h2 className="display-lg mb-12">What we do</h2>
          <div className="grid md:grid-cols-3 border-t border-line">
            {services.map((s) => (
              <div key={s.slug} className="py-8 md:pr-10 border-b md:border-b-0 md:border-r border-line last:border-r-0 last:border-b-0">
                <h3 className="display-md">{s.title}</h3>
                <p className="mt-4 text-ink max-w-[32ch]">{s.short}</p>
                <Link to="/services" className="link-underline inline-block mt-6">
                  Details
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Standard: inverted black block, big statement, one photo.
          On the light page this block is what the cream block was on the dark one:
          the single hard contrast shift that breaks up the scroll. */}
      <section className="panel-ink">
        <div className="wrap section grid gap-12 lg:grid-cols-[1.1fr_1fr] items-center">
          <div>
            <h2 className="display-lg">
              We score it the same way every time. That is the whole point.
            </h2>
            <p className="mt-6 text-[1.1rem] leading-relaxed max-w-[44ch] text-cream/75">
              Five categories. One rubric. Every review, every batch, every brand. If the number moves, it is because the product moved.
            </p>
            <Link to="/about" className="btn btn-primary mt-8">
              How we work
            </Link>
          </div>
          <Placeholder label="Photo" ratio="5 / 4" className="!border-cream/20" />
        </div>
      </section>

      {/* Press strip */}
      <section className="wrap py-14">
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-muted font-[family-name:var(--font-display)] font-semibold text-[1.05rem]">
          {press.map((p) => (
            <span key={p}>{p}</span>
          ))}
        </div>
      </section>

      {/* Newsletter / CTA */}
      <section className="section rule">
        <div className="wrap grid gap-10 md:grid-cols-2 items-center">
          <div>
            <h2 className="display-lg">Get the next scorecard first.</h2>
            <p className="mt-4 text-muted max-w-[40ch]">
              New reviews, drops, and grow tours in your inbox. No spam, no sponsors in the newsletter.
            </p>
          </div>
          <form className="flex flex-col sm:flex-row gap-4" onSubmit={(e) => e.preventDefault()}>
            <input type="email" className="field" placeholder="Email address" aria-label="Email address" required />
            <button type="submit" className="btn btn-ink">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
