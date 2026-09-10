import { Link } from "react-router-dom";

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
];

function Projects() {
  return (
    <section className="bg-white px-5 py-20 sm:px-6 md:py-32">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-10 flex flex-col justify-between gap-6 md:mb-14 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
              Our Work
            </p>

            <h2 className="text-4xl font-extrabold tracking-tight md:text-5xl">
              See the difference.
            </h2>

            <p className="mt-5 text-base leading-7 text-[var(--text-secondary)] sm:text-lg sm:leading-8">
              Real projects completed by Next Level Paintwork throughout the
              Greenville area.
            </p>
          </div>

          <Link
            to="/projects"
            className="font-semibold text-[var(--accent)] transition hover:opacity-70"
          >
            View all projects →
          </Link>
        </div>

        {/* Featured Project */}
        <div className="group relative overflow-hidden rounded-2xl">
          <img
            src={projects[0].image}
            alt={projects[0].title}
            className="h-[420px] w-full object-cover transition duration-700 group-hover:scale-[1.02] sm:h-[520px] md:h-[650px]"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent" />

          <div className="absolute bottom-0 left-0 p-6 text-white sm:p-7 md:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/60 sm:text-sm">
              {projects[0].category}
            </p>

            <h3 className="mt-2 text-2xl font-bold sm:text-3xl md:text-4xl">
              {projects[0].title}
            </h3>

            <p className="mt-2 text-sm text-white/70 sm:text-base">
              {projects[0].location}
            </p>
          </div>
        </div>

        {/* Before & After */}
        <div className="mt-14 md:mt-16">
          <div className="mb-7 md:mb-8">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--accent)]">
              Before & After
            </p>

            <h3 className="mt-3 text-3xl font-bold tracking-tight">
              A visible transformation.
            </h3>
          </div>

          <div className="grid gap-8 md:grid-cols-2 md:gap-5">
            {/* Before */}
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-black/45">
                Before
              </p>

              <div className="overflow-hidden rounded-2xl">
                <img
                  src={`${import.meta.env.BASE_URL}images/before-1.webp`}
                  alt="Painting project before"
                  className="h-[340px] w-full object-cover sm:h-[420px]"
                />
              </div>
            </div>

            {/* After */}
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-black/45">
                After
              </p>

              <div className="overflow-hidden rounded-2xl">
                <img
                  src={`${import.meta.env.BASE_URL}images/after-1.webp`}
                  alt="Painting project after"
                  className="h-[340px] w-full object-cover sm:h-[420px]"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Additional Projects */}
        <div className="mt-14 grid gap-10 md:mt-16 md:grid-cols-2 md:gap-6">
          {projects.slice(1).map((project) => (
            <article
              key={project.title}
              className="group overflow-hidden rounded-2xl"
            >
              <div className="overflow-hidden rounded-2xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-[340px] w-full object-cover transition duration-700 group-hover:scale-105 sm:h-[420px]"
                />
              </div>

              <div className="pt-5">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--accent)] sm:text-sm">
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
  );
}

export default Projects;