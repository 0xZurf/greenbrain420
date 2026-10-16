import { Link } from "react-router-dom";
import PageHeader from "../components/PageHeader.jsx";
import Placeholder from "../components/Placeholder.jsx";
import { services } from "../data/content.js";

export default function Services() {
  return (
    <>
      <PageHeader
        title="Three ways to work with us."
        lede="Quality control for the people making it. Reviews for the people smoking it. Media for the brands in between."
      />

      <div className="wrap pb-16 md:pb-24 space-y-24 md:space-y-32">
        {services.map((s, i) => (
          <section
            key={s.slug}
            id={s.slug}
            className={`grid gap-10 lg:gap-16 lg:grid-cols-2 items-start ${i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`}
          >
            <Placeholder label={s.title} ratio="4 / 5" rounded="rounded-3xl" className="lg:sticky lg:top-[96px]" />
            <div>
              <h2 className="display-lg">{s.title}</h2>
              <p className="mt-6 text-[1.1rem] leading-relaxed">{s.long}</p>
              <h3 className="display-sm mt-10 mb-4">What you get</h3>
              <ul className="divide-y divide-line border-y border-line">
                {s.deliverables.map((d) => (
                  <li key={d} className="py-3.5 flex gap-4">
                    <span aria-hidden="true" className="mt-[0.6rem] w-2 h-2 rounded-full bg-kelly shrink-0" />
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
              <Link to="/contact" className="btn btn-primary mt-10">
                Ask about {s.title.toLowerCase()}
              </Link>
            </div>
          </section>
        ))}
      </div>

      <section className="bg-surface">
        <div className="wrap section grid gap-8 md:grid-cols-[1.3fr_1fr] items-center">
          <h2 className="display-lg">Not sure which one you need?</h2>
          <div>
            <p className="text-muted mb-6">Tell us what you make and where it is going. We will point you at the right service or tell you if you do not need us yet.</p>
            <Link to="/contact" className="btn btn-ink">
              Start a conversation
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
