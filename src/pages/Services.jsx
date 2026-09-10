import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import EstimateCTA from "../components/home/EstimateCTA";
import { Helmet } from "react-helmet-async";

<Helmet>
  <title>Painting Services | Next Level Paintwork Greenville, SC</title>

  <meta
    name="description"
    content="Explore interior, exterior, commercial, cabinet, new construction, and specialty painting services from Next Level Paintwork in Greenville, SC."
  />
</Helmet>;

const services = [
  {
    number: "01",
    title: "Interior Painting",
    description:
      "Refresh and transform your interior spaces with professional painting and careful attention to every detail.",
    features: [
      "Walls & ceilings",
      "Trim & doors",
      "Surface preparation",
      "Color consultation",
    ],
  },
  {
    number: "02",
    title: "Exterior Painting",
    description:
      "Give your property a clean, refreshed appearance with professional exterior painting designed for a lasting finish.",
    features: [
      "Exterior surfaces",
      "Trim & details",
      "Surface preparation",
      "Residential properties",
    ],
  },
  {
    number: "03",
    title: "Commercial Painting",
    description:
      "Professional painting solutions for businesses and commercial properties with an emphasis on quality and dependable service.",
    features: [
      "Commercial spaces",
      "Business interiors",
      "Property improvements",
      "Professional finishes",
    ],
  },
  {
    number: "04",
    title: "Cabinet Painting",
    description:
      "Transform kitchens, bathrooms, and built-ins with professionally prepared and painted cabinetry.",
    features: [
      "Kitchen cabinets",
      "Bathroom cabinets",
      "Built-ins",
      "Professional preparation",
    ],
  },
  {
    number: "05",
    title: "New Construction",
    description:
      "Complete painting services for new homes, renovations, and construction projects from preparation through the final coat.",
    features: ["New homes", "Renovations", "Walls & ceilings", "Trim & doors"],
  },
  {
    number: "06",
    title: "Specialty Work",
    description:
      "Additional painting and finishing services for projects requiring detailed preparation and specialized attention.",
    features: [
      "Bathtubs",
      "Surface preparation",
      "Color consultation",
      "Custom projects",
    ],
  },
];

function Services() {
  return (
    <>
      <Navbar />

      <main>
        {/* Hero */}
        <section className="bg-[#171717] px-6 pb-24 pt-40 text-white md:pb-32 md:pt-48">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-4xl">
              <p className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
                Our Services
              </p>

              <h1 className="text-5xl font-extrabold leading-[1.05] tracking-tight md:text-7xl">
                Professional painting
                <br />
                for every space.
              </h1>

              <p className="mt-7 max-w-2xl text-lg leading-8 text-white/60 md:text-xl">
                From interior transformations to new construction, Next Level
                Paintwork provides professional preparation, quality finishes,
                and dependable service throughout the Greenville area.
              </p>

              <a
                href="#estimate"
                className="mt-9 inline-flex rounded-lg bg-[var(--accent)] px-6 py-4 font-semibold text-white transition hover:bg-[var(--accent-hover)]"
              >
                Get a Free Estimate
              </a>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="bg-[#f7f7f5] px-6 py-24 md:py-32">
          <div className="mx-auto max-w-7xl">
            <div className="mb-16 grid gap-8 md:grid-cols-2 md:items-end">
              <div>
                <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
                  What We Do
                </p>

                <h2 className="max-w-xl text-4xl font-extrabold leading-tight tracking-tight md:text-5xl">
                  Complete painting services.
                </h2>
              </div>

              <p className="max-w-lg text-lg leading-8 text-[var(--text-secondary)] md:justify-self-end">
                Every project starts with careful preparation and ends with a
                clean, professional finish.
              </p>
            </div>

            <div className="border-t border-black/10">
              {services.map((service) => (
                <article
                  key={service.number}
                  className="grid gap-8 border-b border-black/10 py-12 md:grid-cols-[80px_1fr_1fr] md:py-16"
                >
                  <div>
                    <span className="text-sm font-semibold text-[var(--accent)]">
                      {service.number}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-3xl font-bold tracking-tight md:text-4xl">
                      {service.title}
                    </h3>

                    <p className="mt-5 max-w-xl text-lg leading-8 text-[var(--text-secondary)]">
                      {service.description}
                    </p>
                  </div>

                  <div className="md:pl-10">
                    <p className="mb-5 text-sm font-semibold uppercase tracking-[0.16em] text-black/40">
                      Includes
                    </p>

                    <ul className="space-y-4">
                      {service.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-center gap-3 border-b border-black/5 pb-4 font-medium"
                        >
                          <span className="text-[var(--accent)]">✓</span>

                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="bg-white px-6 py-24 md:py-32">
          <div className="mx-auto max-w-7xl">
            <div className="mb-16 max-w-2xl">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
                Our Process
              </p>

              <h2 className="text-4xl font-extrabold tracking-tight md:text-5xl">
                Simple from start to finish.
              </h2>

              <p className="mt-5 text-lg leading-8 text-[var(--text-secondary)]">
                A straightforward process designed to make your painting project
                easier.
              </p>
            </div>

            <div className="grid gap-px overflow-hidden rounded-2xl bg-black/10 md:grid-cols-4">
              <div className="bg-[#f7f7f5] p-8">
                <span className="text-sm font-semibold text-[var(--accent)]">
                  01
                </span>

                <h3 className="mt-10 text-xl font-bold">
                  Tell Us About Your Project
                </h3>

                <p className="mt-4 leading-7 text-[var(--text-secondary)]">
                  Send us your project details through our estimate form.
                </p>
              </div>

              <div className="bg-[#f7f7f5] p-8">
                <span className="text-sm font-semibold text-[var(--accent)]">
                  02
                </span>

                <h3 className="mt-10 text-xl font-bold">
                  Project Consultation
                </h3>

                <p className="mt-4 leading-7 text-[var(--text-secondary)]">
                  We'll discuss the space, scope of work, and what you want to
                  accomplish.
                </p>
              </div>

              <div className="bg-[#f7f7f5] p-8">
                <span className="text-sm font-semibold text-[var(--accent)]">
                  03
                </span>

                <h3 className="mt-10 text-xl font-bold">
                  Preparation & Painting
                </h3>

                <p className="mt-4 leading-7 text-[var(--text-secondary)]">
                  The project is carefully prepared and completed using
                  professional techniques.
                </p>
              </div>

              <div className="bg-[#f7f7f5] p-8">
                <span className="text-sm font-semibold text-[var(--accent)]">
                  04
                </span>

                <h3 className="mt-10 text-xl font-bold">Final Results</h3>

                <p className="mt-4 leading-7 text-[var(--text-secondary)]">
                  We finish with attention to detail and a clean, professional
                  result.
                </p>
              </div>
            </div>
          </div>
        </section>

        <EstimateCTA />
      </main>

      <Footer />
    </>
  );
}

export default Services;
