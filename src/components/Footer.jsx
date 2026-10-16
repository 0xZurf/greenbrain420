import { Link } from "react-router-dom";
import Logo from "./Logo.jsx";
import { brand, nav } from "../data/content.js";

// Light footer on purpose: the mark's head is solid black, so it would vanish
// on a dark panel. The cream surface keeps the logo exactly as drawn.
export default function Footer() {
  return (
    <footer className="bg-surface border-t border-line">
      <div className="wrap py-16 grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <Logo size="footer" />
          <p className="mt-5 max-w-[28ch] text-muted">
            Independent quality control, reviews, and media for cannabis brands that smoke what they sell.
          </p>
        </div>

        <div>
          <p className="display-sm mb-4">Site</p>
          <ul className="space-y-2">
            {nav.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="text-muted hover:text-kelly-deep transition-colors">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="display-sm mb-4">Follow</p>
          <ul className="space-y-2">
            {brand.social.map((s) => (
              <li key={s.label}>
                <a href={s.href} target="_blank" rel="noreferrer" className="text-muted hover:text-kelly-deep transition-colors">
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="display-sm mb-4">Reach us</p>
          <a href={`mailto:${brand.email}`} className="link-underline">
            {brand.email}
          </a>
          <p className="mt-2 text-muted">{brand.location}</p>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="wrap py-6 flex flex-col sm:flex-row gap-3 justify-between small-note">
          <span>&copy; {new Date().getFullYear()} {brand.name}. All rights reserved.</span>
          <span>For adults 21 and over. Nothing here is medical advice.</span>
        </div>
      </div>
    </footer>
  );
}
