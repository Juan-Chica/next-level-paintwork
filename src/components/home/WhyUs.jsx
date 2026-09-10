const reasons = [
  {
    number: "01",
    title: "Professional Quality",
    description:
      "Careful preparation, clean application, and detailed finishes on every project.",
  },
  {
    number: "02",
    title: "Fair Pricing",
    description:
      "Straightforward estimates and professional work without unnecessary costs.",
  },
  {
    number: "03",
    title: "Reliable Service",
    description:
      "Clear communication, dependable scheduling, and respect for your property.",
  },
  {
    number: "04",
    title: "Residential & Commercial",
    description:
      "Painting solutions for homes, businesses, renovations, and new construction.",
  },
];

function WhyUs() {
  return (
    <section className="bg-[#171717] px-6 py-24 text-white md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
              Why Next Level
            </p>

            <h2 className="max-w-xl text-4xl font-extrabold leading-tight tracking-tight md:text-5xl">
              Quality work.
              <br />
              Done the right way.
            </h2>

            <p className="mt-6 max-w-lg text-lg leading-8 text-white/60">
              Every project is approached with attention to detail,
              professional preparation, and a commitment to delivering
              results customers can feel confident about.
            </p>
          </div>

          <div className="grid gap-px overflow-hidden rounded-2xl bg-white/10 sm:grid-cols-2">
            {reasons.map((reason) => (
              <div
                key={reason.number}
                className="bg-[#1d1d1d] p-8 transition hover:bg-[#232323]"
              >
                <span className="text-sm font-semibold text-[var(--accent)]">
                  {reason.number}
                </span>

                <h3 className="mt-8 text-2xl font-bold">
                  {reason.title}
                </h3>

                <p className="mt-4 leading-7 text-white/60">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyUs;