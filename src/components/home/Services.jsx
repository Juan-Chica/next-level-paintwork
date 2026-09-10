import { Link } from "react-router-dom";

const services = [
  {
    number: "01",
    title: "Interior Painting",
    description:
      "Professional finishes for walls, ceilings, trim, doors, and interior spaces.",
    details: "Walls • Ceilings • Trim • Doors",
  },
  {
    number: "02",
    title: "Exterior Painting",
    description:
      "Exterior painting designed to refresh, protect, and transform your property.",
    details: "Homes • Trim • Exterior Surfaces",
  },
  {
    number: "03",
    title: "Commercial Painting",
    description:
      "Professional painting services for businesses, commercial spaces, and properties.",
    details: "Businesses • Offices • Commercial Spaces",
  },
  {
    number: "04",
    title: "Cabinet Painting",
    description:
      "Give kitchens and built-ins a fresh, modern finish without replacing your cabinetry.",
    details: "Kitchens • Built-ins • Cabinetry",
  },
  {
    number: "05",
    title: "New Construction",
    description:
      "Complete painting services for new homes, renovations, and construction projects.",
    details: "New Homes • Remodels • Construction",
  },
  {
    number: "06",
    title: "Specialty Work",
    description:
      "Detailed finishing services for projects that need extra preparation and attention.",
    details: "Bathtubs • Preparation • Color Consultation",
  },
];

function Services() {
  return (
    <section className="bg-[#f7f7f5] px-6 py-24 md:py-32">
      <div className="mx-auto max-w-7xl">

        {/* Section heading */}
        <div className="mb-16 grid gap-8 md:grid-cols-2 md:items-end">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
              Our Services
            </p>

            <h2 className="max-w-xl text-4xl font-extrabold leading-tight tracking-tight md:text-5xl">
              Professional painting for every space.
            </h2>
          </div>

          <p className="max-w-lg text-lg leading-8 text-[var(--text-secondary)] md:justify-self-end">
            From interior transformations to commercial projects, Next Level
            Paintwork provides professional preparation and quality finishes
            from start to finish.
          </p>
        </div>

        {/* Services */}
        <div className="border-t border-black/10">
          {services.map((service) => (
            <div
              key={service.number}
              className="group grid gap-5 border-b border-black/10 py-8 transition-all duration-300 md:grid-cols-[80px_1fr_1fr_auto] md:items-center md:py-10"
            >
              {/* Number */}
              <span className="text-sm font-semibold text-[var(--accent)]">
                {service.number}
              </span>

              {/* Title */}
              <h3 className="text-2xl font-bold tracking-tight transition-transform duration-300 group-hover:translate-x-2 md:text-3xl">
                {service.title}
              </h3>

              {/* Details */}
              <div>
                <p className="max-w-md leading-7 text-[var(--text-secondary)]">
                  {service.description}
                </p>

                <p className="mt-2 text-sm font-medium text-black/45">
                  {service.details}
                </p>
              </div>

              {/* Arrow */}
              <Link
                to="/services"
                aria-label={`Learn more about ${service.title}`}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-black/15 transition-all duration-300 group-hover:border-[var(--accent)] group-hover:bg-[var(--accent)] group-hover:text-white"
              >
                →
              </Link>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 flex flex-col justify-between gap-6 md:flex-row md:items-center">
          <p className="text-[var(--text-secondary)]">
            Have a project that isn't listed?
          </p>

          <Link
            to="/contact"
            className="font-semibold text-[var(--accent)] transition-opacity hover:opacity-70"
          >
            Tell us about your project →
          </Link>
        </div>

      </div>
    </section>
  );
}

export default Services;