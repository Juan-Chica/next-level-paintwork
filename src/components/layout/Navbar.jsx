import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-black/5 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-6">
        <Link to="/" onClick={closeMenu} className="flex items-center">
          <img
            src={`${import.meta.env.BASE_URL}images/next-level-logo.png`}
            alt="Next Level Paintwork"
            className="h-11 w-auto object-contain sm:h-12"
          />
        </Link>
        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          <Link
            to="/"
            className="text-sm font-medium transition hover:opacity-60"
          >
            Home
          </Link>

          <Link
            to="/services"
            className="text-sm font-medium transition hover:opacity-60"
          >
            Services
          </Link>

          <Link
            to="/projects"
            className="text-sm font-medium transition hover:opacity-60"
          >
            Our Work
          </Link>

          <Link
            to="/about"
            className="text-sm font-medium transition hover:opacity-60"
          >
            About
          </Link>

          <Link
            to="/contact"
            className="text-sm font-medium transition hover:opacity-60"
          >
            Contact
          </Link>

          <button
            type="button"
            onClick={() => {
              document.getElementById("estimate")?.scrollIntoView({
                behavior: "smooth",
              });
            }}
            className="rounded-lg bg-[var(--accent)] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[var(--accent-hover)]"
          >
            Get a Free Estimate
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMenuOpen((current) => !current)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          className="flex h-11 w-11 items-center justify-center rounded-lg border border-black/10 text-xl transition hover:bg-black/5 md:hidden"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="border-t border-black/5 bg-white md:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col px-5 py-6">
            <Link
              to="/"
              onClick={closeMenu}
              className="border-b border-black/5 py-4 text-base font-semibold"
            >
              Home
            </Link>

            <Link
              to="/services"
              onClick={closeMenu}
              className="border-b border-black/5 py-4 text-base font-semibold"
            >
              Services
            </Link>

            <Link
              to="/projects"
              onClick={closeMenu}
              className="border-b border-black/5 py-4 text-base font-semibold"
            >
              Our Work
            </Link>

            <Link
              to="/about"
              onClick={closeMenu}
              className="border-b border-black/5 py-4 text-base font-semibold"
            >
              About
            </Link>

            <Link
              to="/contact"
              onClick={closeMenu}
              className="py-4 text-base font-semibold"
            >
              Contact
            </Link>

            <button
              type="button"
              onClick={() => {
                document.getElementById("estimate")?.scrollIntoView({
                  behavior: "smooth",
                });
              }}
              className="rounded-lg bg-[var(--accent)] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[var(--accent-hover)]"
            >
              Get a Free Estimate
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Navbar;
