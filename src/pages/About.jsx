import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import EstimateCTA from "../components/home/EstimateCTA";
import { Helmet } from "react-helmet-async";

<Helmet>
  <title>
    About Next Level Paintwork | Greenville, SC
  </title>

  <meta
    name="description"
    content="Learn about Next Level Paintwork LLC, a Greenville-area painting company focused on quality workmanship, fair pricing, and dependable service."
  />
</Helmet>

const values = [
  {
    number: "01",
    title: "Quality Workmanship",
    description:
      "Every project is completed with careful preparation, professional techniques, and attention to the final finish.",
  },
  {
    number: "02",
    title: "Honest Service",
    description:
      "Clear communication, straightforward recommendations, and fair pricing are part of every project.",
  },
  {
    number: "03",
    title: "Attention to Detail",
    description:
      "From surface preparation to the final coat, the details are treated as an important part of the job.",
  },
  {
    number: "04",
    title: "Customer Focus",
    description:
      "The goal is to make the process simple, dependable, and focused on delivering results the customer can feel good about.",
  },
];

function About() {
  return (
    <>
      <Navbar />

      <main>
        {/* Hero */}
        <section className="bg-[#171717] px-6 pb-24 pt-40 text-white md:pb-32 md:pt-48">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-4xl">
              <p className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
                About Us
              </p>

              <h1 className="text-5xl font-extrabold leading-[1.05] tracking-tight md:text-7xl">
                Local service.
                <br />
                Professional standards.
              </h1>

              <p className="mt-7 max-w-2xl text-lg leading-8 text-white/60 md:text-xl">
                Next Level Paintwork is a family-owned painting company serving
                Greenville and surrounding areas with professional painting and
                renovation services.
              </p>
            </div>
          </div>
        </section>

        {/* Story */}
        <section className="bg-white px-6 py-24 md:py-32">
          <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2 lg:items-center">
            <div className="overflow-hidden rounded-2xl">
              <img
                src={`${import.meta.env.BASE_URL}images/about-team.webp`}
                alt="Next Level Paintwork team"
                className="h-[560px] w-full object-cover"
              />
            </div>

            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
                Our Story
              </p>

              <h2 className="max-w-xl text-4xl font-extrabold leading-tight tracking-tight md:text-5xl">
                Built around quality, honesty, and dependable service.
              </h2>

              <p className="mt-6 text-lg leading-8 text-[var(--text-secondary)]">
                Next Level Paintwork LLC was founded by Stiven Rave and
                Brigitte Rave with the goal of helping customers transform and
                renew their spaces through professional painting and renovation
                services.
              </p>

              <p className="mt-5 text-lg leading-8 text-[var(--text-secondary)]">
                The company focuses on delivering high-quality workmanship at
                fair prices while maintaining clear communication and strong
                attention to detail throughout every project.
              </p>

              <p className="mt-5 text-lg leading-8 text-[var(--text-secondary)]">
                From preparation through the final coat, every project is
                approached with professional techniques, reliable tools, and
                quality products to create clean and lasting results.
              </p>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="bg-[#f7f7f5] px-6 py-24 md:py-32">
          <div className="mx-auto max-w-7xl">
            <div className="mb-16 max-w-2xl">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
                What We Stand For
              </p>

              <h2 className="text-4xl font-extrabold tracking-tight md:text-5xl">
                The standard behind every project.
              </h2>

              <p className="mt-5 text-lg leading-8 text-[var(--text-secondary)]">
                The way the work is done matters just as much as the final
                result.
              </p>
            </div>

            <div className="grid gap-px overflow-hidden rounded-2xl bg-black/10 md:grid-cols-2">
              {values.map((value) => (
                <div
                  key={value.number}
                  className="bg-white p-8 md:p-10"
                >
                  <span className="text-sm font-semibold text-[var(--accent)]">
                    {value.number}
                  </span>

                  <h3 className="mt-8 text-2xl font-bold">
                    {value.title}
                  </h3>

                  <p className="mt-4 max-w-lg leading-7 text-[var(--text-secondary)]">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Owners */}
        <section className="bg-[#171717] px-6 py-24 text-white md:py-32">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-end">
              <div>
                <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
                  Family Owned
                </p>

                <h2 className="max-w-xl text-4xl font-extrabold leading-tight tracking-tight md:text-5xl">
                  Led by Stiven & Brigitte Rave.
                </h2>
              </div>

              <div>
                <p className="max-w-xl text-lg leading-8 text-white/60">
                  As a family-owned company, Next Level Paintwork takes a
                  personal approach to every project, with a focus on building
                  trust, delivering dependable service, and creating results
                  customers are proud of.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <span className="rounded-full border border-white/15 px-4 py-2 text-sm font-medium text-white/75">
                    Greenville, SC
                  </span>

                  <span className="rounded-full border border-white/15 px-4 py-2 text-sm font-medium text-white/75">
                    Family Owned
                  </span>

                  <span className="rounded-full border border-white/15 px-4 py-2 text-sm font-medium text-white/75">
                    English & Español
                  </span>
                </div>
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

export default About;