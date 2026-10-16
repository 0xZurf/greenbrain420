import { useState } from "react";
import PageHeader from "../components/PageHeader.jsx";
import { brand } from "../data/content.js";

export default function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <>
      <PageHeader
        title="Send us product. Or just say hi."
        lede="Brands, growers, dispensaries, and anyone who wants their work looked at properly."
      />

      <section className="wrap pb-24 grid gap-14 lg:grid-cols-[1fr_1.3fr]">
        <div className="space-y-10">
          <div>
            <h2 className="display-sm mb-3">Email</h2>
            <a href={`mailto:${brand.email}`} className="link-underline text-[1.1rem]">
              {brand.email}
            </a>
          </div>
          <div>
            <h2 className="display-sm mb-3">Based in</h2>
            <p>{brand.location}</p>
          </div>
          <div>
            <h2 className="display-sm mb-3">Sending samples</h2>
            <p className="text-muted max-w-[36ch]">
              Reach out first and we will send the intake form and address. Please do not ship anything before we confirm.
            </p>
          </div>
          <div>
            <h2 className="display-sm mb-3">Elsewhere</h2>
            <ul className="space-y-1">
              {brand.social.map((s) => (
                <li key={s.label}>
                  <a href={s.href} target="_blank" rel="noreferrer" className="text-muted hover:text-head transition-colors">
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {sent ? (
          <div className="bg-surface rounded-3xl p-10 self-start">
            <h2 className="display-md">Message sent.</h2>
            <p className="mt-4 text-muted">We read everything. Expect a reply within a few days.</p>
          </div>
        ) : (
          <form
            className="space-y-6"
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
          >
            <div className="grid gap-6 sm:grid-cols-2">
              <input className="field" placeholder="Name" aria-label="Name" required />
              <input className="field" type="email" placeholder="Email" aria-label="Email" required />
            </div>
            <input className="field" placeholder="Brand or company" aria-label="Brand or company" />
            <select className="field" aria-label="What are you looking for" defaultValue="">
              <option value="" disabled>
                What are you looking for
              </option>
              <option>Quality control</option>
              <option>A review</option>
              <option>Media production</option>
              <option>Something else</option>
            </select>
            <textarea className="field" placeholder="Tell us about the product and where it is going" aria-label="Message" />
            <button type="submit" className="btn btn-primary">
              Send message
            </button>
            <p className="small-note">This form is a placeholder and does not submit anywhere yet.</p>
          </form>
        )}
      </section>
    </>
  );
}
