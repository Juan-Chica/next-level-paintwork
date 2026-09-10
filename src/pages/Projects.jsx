import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import EstimateCTA from "../components/home/EstimateCTA";
import { Helmet } from "react-helmet-async";

<Helmet>
  <title>
    Painting Projects | Next Level Paintwork Greenville, SC
  </title>

  <meta
    name="description"
    content="View completed painting projects and transformations by Next Level Paintwork in Greenville and the Upstate South Carolina area."
  />
</Helmet>

const projects = [
  {
    title: "Interior Transformation",
    category: "Interior Painting",
    location: "Greenville, SC",
    image: `${import.meta.env.BASE_URL}images/project-1.webp`,
  },
  {
    title: "Cabinet Refresh",
    category: "Cabinet Painting",
    location: "Greenville Area",
    image: `${import.meta.env.BASE_URL}images/project-2.webp`,
  },
  {
    title: "Residential Finish",
    category: "Residential Painting",
    location: "Upstate South Carolina",
    image: `${import.meta.env.BASE_URL}images/project-3.webp`,
  },
  {
    title: "Detail Work",
    category: "Trim & Finish",
    location: "Greenville Area",
    image: `${import.meta.env.BASE_URL}images/project-4.webp`,
  },
  {
    title: "Fresh Interior",
    category: "Interior Painting",
    location: "Greenville, SC",
    image: `${import.meta.env.BASE_URL}images/project-5.webp`,
  },
  {
    title: "Cabinet Upgrade",
    category: "Cabinet Painting",
    location: "Upstate South Carolina",
    image: `${import.meta.env.BASE_URL}images/project-6.webp`,
  },
];

function Projects() {
  return (
    <>
      <Navbar />

      <main>
        {/* Hero */}
        <section className="bg-[#171717] px-6 pb-24 pt-40 text-white md:pb-32 md:pt-48">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-4xl">
              <p className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
                Our Work
              </p>

              <h1 className="text-5xl font-extrabold leading-[1.05] tracking-tight md:text-7xl">
                Real projects.
                <br />
                Real transformations.
              </h1>

              <p className="mt-7 max-w-2xl text-lg leading-8 text-white/60 md:text-xl">
                Explore completed painting projects from Next Level Paintwork
                throughout Greenville and surrounding areas.
              </p>

              <a
                href="#estimate"
                className="mt-9 inline-flex rounded-lg bg-[var(--accent)] px-6 py-4 font-semibold text-white transition hover:bg-[var(--accent-hover)]"
              >
                Start Your Project
              </a>
            </div>
          </div>
        </section>

        {/* Featured Project */}
        <section className="bg-white px-6 py-24 md:py-32">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
                Featured Project
              </p>

              <h2 className="text-4xl font-extrabold tracking-tight md:text-5xl">
                See the difference.
              </h2>
            </div>

            <div className="group relative overflow-hidden rounded-2xl">
              <img
                src={`${import.meta.env.BASE_URL}images/project-1.webp`}
                alt="Interior painting project completed by Next Level Paintwork"
                className="h-[520px] w-full object-cover transition duration-700 group-hover:scale-[1.02] md:h-[680px]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />

              <div className="absolute bottom-0 left-0 p-7 text-white md:p-10">
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-white/60">
                  Interior Painting
                </p>

                <h3 className="mt-2 text-3xl font-bold md:text-4xl">
                  Interior Transformation
                </h3>

                <p className="mt-2 text-white/70">
                  Greenville, South Carolina
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Before & After */}
        <section className="bg-[#f7f7f5] px-6 py-24 md:py-32">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 max-w-2xl">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
                Before & After
              </p>

              <h2 className="text-4xl font-extrabold tracking-tight md:text-5xl">
                A visible transformation.
              </h2>

              <p className="mt-5 text-lg leading-8 text-[var(--text-secondary)]">
                Careful preparation and professional finishes can completely
                change the look and feel of a space.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-black/40">
                  Before
                </p>

                <div className="overflow-hidden rounded-2xl">
                  <img
                    src={`${import.meta.env.BASE_URL}images/before-1.webp`}
                    alt="Painting project before"
                    className="h-[450px] w-full object-cover"
                  />
                </div>
              </div>

              <div>
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-black/40">
                  After
                </p>

                <div className="overflow-hidden rounded-2xl">
                  <img
                    src={`${import.meta.env.BASE_URL}images/after-1.webp`}
                    alt="Painting project after"
                    className="h-[450px] w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Project Gallery */}
        <section className="bg-white px-6 py-24 md:py-32">
          <div className="mx-auto max-w-7xl">
            <div className="mb-14 grid gap-8 md:grid-cols-2 md:items-end">
              <div>
                <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
                  Project Gallery
                </p>

                <h2 className="text-4xl font-extrabold tracking-tight md:text-5xl">
                  More completed work.
                </h2>
              </div>

              <p className="max-w-lg text-lg leading-8 text-[var(--text-secondary)] md:justify-self-end">
                A selection of real work completed by Next Level Paintwork.
              </p>
            </div>

            <div className="grid gap-x-6 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
              {projects.map((project) => (
                <article key={project.title} className="group">
                  <div className="overflow-hidden rounded-2xl">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-[420px] w-full object-cover transition duration-700 group-hover:scale-105"
                    />
                  </div>

                  <div className="pt-5">
                    <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[var(--accent)]">
                      {project.category}
                    </p>

                    <h3 className="mt-2 text-2xl font-bold">
                      {project.title}
                    </h3>

                    <p className="mt-2 text-[var(--text-secondary)]">
                      {project.location}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Quality Statement */}
        <section className="bg-[#171717] px-6 py-24 text-white md:py-32">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-10 lg:grid-cols-2 lg:items-end">
              <div>
                <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
                  Our Standard
                </p>

                <h2 className="max-w-2xl text-4xl font-extrabold leading-tight tracking-tight md:text-5xl">
                  The details make the difference.
                </h2>
              </div>

              <p className="max-w-xl text-lg leading-8 text-white/60 lg:justify-self-end">
                From preparation to the final coat, every project is approached
                with care, professional techniques, and attention to the
                details that create a clean, finished result.
              </p>
            </div>
          </div>
        </section>

        <EstimateCTA />
      </main>

      <Footer />
    </>
  );
}

export default Projects;