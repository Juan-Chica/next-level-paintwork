import { Link } from "react-router-dom";

function AboutPreview() {
  return (
    <section className="bg-white px-6 py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">
        
        {/* Image */}
        <div className="overflow-hidden rounded-2xl">
          <img
            src={`${import.meta.env.BASE_URL}images/about-team.webp`}
            alt="Next Level Paintwork team"
            className="h-[520px] w-full object-cover"
          />
        </div>

        {/* Content */}
        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
            About Next Level
          </p>

          <h2 className="max-w-xl text-4xl font-extrabold leading-tight tracking-tight md:text-5xl">
            Local service.
            <br />
            Professional standards.
          </h2>

          <p className="mt-6 max-w-xl text-lg leading-8 text-[var(--text-secondary)]">
            Next Level Paintwork LLC is a Greenville-area painting company
            focused on quality workmanship, fair pricing, and dependable
            service for residential and commercial projects.
          </p>

          <p className="mt-5 max-w-xl leading-7 text-[var(--text-secondary)]">
            Led by Stiven and Brigitte Rave, the company approaches every
            project with careful preparation, clear communication, and
            attention to the details that create a professional finish.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <span className="rounded-full border border-black/10 px-4 py-2 text-sm font-medium">
              Greenville, SC
            </span>

            <span className="rounded-full border border-black/10 px-4 py-2 text-sm font-medium">
              Residential
            </span>

            <span className="rounded-full border border-black/10 px-4 py-2 text-sm font-medium">
              Commercial
            </span>

            <span className="rounded-full border border-black/10 px-4 py-2 text-sm font-medium">
              English & Español
            </span>
          </div>

          <Link
            to="/about"
            className="mt-9 inline-flex items-center gap-2 font-semibold text-[var(--accent)] transition hover:gap-3"
          >
            Learn more about Next Level →
          </Link>
        </div>
      </div>
    </section>
  );
}

export default AboutPreview;