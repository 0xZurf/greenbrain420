import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import Logo from "./Logo.jsx";
import { nav } from "../data/content.js";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const linkClass = ({ isActive }) =>
    `text-[0.98rem] transition-colors ${isActive ? "text-head font-semibold" : "text-muted hover:text-head"}`;

  return (
    <>
      <header className="sticky top-0 z-40 bg-bg/90 backdrop-blur border-b border-line">
      <div className="wrap flex items-center justify-between h-[84px]">
        <Link to="/" aria-label="Green Brain home">
          <Logo />
        </Link>

        <nav className="hidden md:flex items-center gap-8" aria-label="Primary">
          {nav.map((item) => (
            <NavLink key={item.to} to={item.to} className={linkClass}>
              {item.label}
            </NavLink>
          ))}
          <Link to="/contact" className="btn btn-primary !py-2.5 !px-5 text-[0.95rem]">
            Send us product
          </Link>
        </nav>

        <button
          type="button"
          className="md:hidden flex flex-col justify-center gap-[5px] w-10 h-10 -mr-2"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <span className={`block h-[2px] w-6 mx-auto bg-head transition-transform ${open ? "translate-y-[7px] rotate-45" : ""}`} />
          <span className={`block h-[2px] w-6 mx-auto bg-head transition-opacity ${open ? "opacity-0" : ""}`} />
          <span className={`block h-[2px] w-6 mx-auto bg-head transition-transform ${open ? "-translate-y-[7px] -rotate-45" : ""}`} />
        </button>
      </div>
      </header>

      {/* The menu panel lives OUTSIDE <header> on purpose. The header carries
          backdrop-blur, and backdrop-filter makes an element the containing block
          for its position:fixed descendants. Nested here, `fixed inset-0` resolved
          against the 84px header box and the panel collapsed to zero height. */}
      {open && (
        <div
          id="mobile-menu"
          className="md:hidden fixed inset-x-0 top-[84px] bottom-0 bg-bg z-30 overflow-y-auto overscroll-contain"
        >
          <nav className="wrap flex flex-col pt-6 pb-10" aria-label="Mobile">
            {nav.map((item) => (
              <NavLink key={item.to} to={item.to} className="display-md py-4 border-b border-line text-head">
                {item.label}
              </NavLink>
            ))}
            <Link to="/contact" className="btn btn-primary mt-8 self-start">
              Send us product
            </Link>
          </nav>
        </div>
      )}
    </>
  );
}
