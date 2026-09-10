import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-[#111111] px-6 pt-16 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 border-b border-white/10 pb-14 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Link to="/" className="inline-flex items-center">
              <img
                src="/images/next-level-logo.png"
                alt="Next Level Paintwork"
                className="h-20 w-auto object-contain"
              />
            </Link>

            <p className="mt-5 max-w-sm leading-7 text-white/60">
              Professional quality, fair prices, and next-level results for
              residential and commercial painting projects.
            </p>

            <p className="mt-5 text-sm text-white/40">
              Serving Greenville and surrounding areas.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-white/40">
              Services
            </h3>

            <div className="mt-5 flex flex-col gap-3 text-white/70">
              <Link to="/services" className="transition hover:text-white">
                Interior Painting
              </Link>

              <Link to="/services" className="transition hover:text-white">
                Exterior Painting
              </Link>

              <Link to="/services" className="transition hover:text-white">
                Commercial Painting
              </Link>

              <Link to="/services" className="transition hover:text-white">
                Cabinet Painting
              </Link>

              <Link to="/services" className="transition hover:text-white">
                New Construction
              </Link>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-white/40">
              Company
            </h3>

            <div className="mt-5 flex flex-col gap-3 text-white/70">
              <Link to="/" className="transition hover:text-white">
                Home
              </Link>

              <Link to="/about" className="transition hover:text-white">
                About
              </Link>

              <Link to="/projects" className="transition hover:text-white">
                Our Work
              </Link>

              <Link to="/contact" className="transition hover:text-white">
                Contact
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-white/40">
              Contact
            </h3>

            <div className="mt-5 space-y-5 text-white/70">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-white/35">
                  English
                </p>

                <a
                  href="tel:+18646672019"
                  className="mt-1 inline-block transition hover:text-white"
                >
                  (864) 667-2019
                </a>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-white/35">
                  Español
                </p>

                <a
                  href="tel:+18649827861"
                  className="mt-1 inline-block transition hover:text-white"
                >
                  (864) 982-7861
                </a>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-white/35">
                  Email
                </p>

                <a
                  href="nextlevelpaint01@gmail.com"
                  className="mt-1 inline-block transition hover:text-white"
                >
                  nextlevelpaint01@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col justify-between gap-5 py-7 text-sm text-white/40 md:flex-row md:items-center">
          <p>
            © {new Date().getFullYear()} Next Level Paintwork LLC. All rights
            reserved.
          </p>

          <div className="flex flex-wrap gap-6">
            <a
              href="https://www.instagram.com/next.levelpaintworks?stkn=bzVwdHVsbG00eW9r&utm_source=qr
"
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-white"
            >
              Instagram
            </a>

            <a
              href="https://www.facebook.com/share/14okyBrw8Lq/?mibextid=wwXIfr"
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-white"
            >
              Facebook
            </a>

            <a
              href="https://neoevo.io"
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-white"
            >
              Website by NeoEvo
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
