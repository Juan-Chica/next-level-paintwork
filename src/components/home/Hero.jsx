import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-neutral-900">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={`${import.meta.env.BASE_URL}images/hero-painting.webp`}
          alt="Professional painting project completed by Next Level Paintwork"
          className="h-full w-full object-cover object-center"
        />

        <div className="absolute inset-0 bg-black/60 md:bg-black/55" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-16 pt-32 sm:px-6 md:pb-20 md:pt-36">
        <div className="max-w-3xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-white/75 sm:text-sm sm:tracking-[0.2em]">
            Professional Painting • Greenville, SC
          </p>

          <h1 className="text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl md:text-7xl">
            Professional Quality.
            <br />
            Fair Prices.
            <br />
            <span className="text-[var(--accent)]">
              Next-Level Results.
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-7 text-white/80 sm:text-lg sm:leading-8 md:text-xl">
            Professional residential and commercial painting with careful
            preparation, clean finishes, and attention to every detail.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4">
            <a
              href="#estimate"
              className="w-full rounded-lg bg-[var(--accent)] px-6 py-4 text-center font-semibold text-white transition hover:bg-[var(--accent-hover)] sm:w-auto"
            >
              Get a Free Estimate
            </a>

            <Link
              to="/projects"
              className="w-full rounded-lg border border-white/30 bg-white/10 px-6 py-4 text-center font-semibold text-white backdrop-blur-sm transition hover:bg-white/20 sm:w-auto"
            >
              View Our Work →
            </Link>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-x-5 gap-y-3 text-sm text-white/70 sm:flex sm:flex-wrap sm:gap-x-8">
            <span>Residential</span>
            <span>Commercial</span>
            <span>Interior</span>
            <span>Exterior</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;