import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import EstimateCTA from "../components/home/EstimateCTA";
import { Helmet } from "react-helmet-async";

<Helmet>
  <title>
    Get a Free Painting Estimate | Next Level Paintwork
  </title>

  <meta
    name="description"
    content="Contact Next Level Paintwork for a free residential or commercial painting estimate in Greenville, South Carolina and surrounding areas."
  />
</Helmet>

function Contact() {
  return (
    <>
      <Navbar />

      <main>
        {/* Hero */}
        <section className="bg-[#171717] px-6 pb-24 pt-40 text-white md:pb-32 md:pt-48">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-4xl">
              <p className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
                Contact
              </p>

              <h1 className="text-5xl font-extrabold leading-[1.05] tracking-tight md:text-7xl">
                Tell us about
                <br />
                your project.
              </h1>

              <p className="mt-7 max-w-2xl text-lg leading-8 text-white/60 md:text-xl">
                Contact Next Level Paintwork to discuss your painting project,
                ask a question, or request a free estimate.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Info */}
        <section className="bg-white px-6 py-24 md:py-32">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
              <div>
                <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
                  Get In Touch
                </p>

                <h2 className="max-w-lg text-4xl font-extrabold leading-tight tracking-tight md:text-5xl">
                  We're ready to hear about your project.
                </h2>

                <p className="mt-6 max-w-lg text-lg leading-8 text-[var(--text-secondary)]">
                  Reach out directly or use the estimate form below. Next Level
                  Paintwork serves Greenville and surrounding areas.
                </p>
              </div>

              <div className="grid gap-px overflow-hidden rounded-2xl bg-black/10 sm:grid-cols-2">
                {/* English Phone */}
                <a
                  href="tel:+18646672019"
                  className="group bg-[#f7f7f5] p-8 transition hover:bg-white"
                >
                  <p className="text-sm font-semibold uppercase tracking-[0.16em] text-black/40">
                    English
                  </p>

                  <h3 className="mt-8 text-2xl font-bold">
                    Call Us
                  </h3>

                  <p className="mt-3 text-lg text-[var(--text-secondary)]">
                    (864) 667-2019
                  </p>

                  <p className="mt-8 font-semibold text-[var(--accent)]">
                    Call now →
                  </p>
                </a>

                {/* Spanish Phone */}
                <a
                  href="tel:+18649827861"
                  className="group bg-[#f7f7f5] p-8 transition hover:bg-white"
                >
                  <p className="text-sm font-semibold uppercase tracking-[0.16em] text-black/40">
                    Español
                  </p>

                  <h3 className="mt-8 text-2xl font-bold">
                    Llámanos
                  </h3>

                  <p className="mt-3 text-lg text-[var(--text-secondary)]">
                    (864) 982-7861
                  </p>

                  <p className="mt-8 font-semibold text-[var(--accent)]">
                    Llamar ahora →
                  </p>
                </a>

                {/* Email */}
                <a
                  href="mailto:nextlevelpaint01@gmail.com"
                  className="group bg-[#f7f7f5] p-8 transition hover:bg-white"
                >
                  <p className="text-sm font-semibold uppercase tracking-[0.16em] text-black/40">
                    Email
                  </p>

                  <h3 className="mt-8 text-2xl font-bold">
                    Send a Message
                  </h3>

                  <p className="mt-3 break-all text-lg text-[var(--text-secondary)]">
                    nextlevelpaint01@gmail.com
                  </p>

                  <p className="mt-8 font-semibold text-[var(--accent)]">
                    Send email →
                  </p>
                </a>

                {/* Service Area */}
                <div className="bg-[#f7f7f5] p-8">
                  <p className="text-sm font-semibold uppercase tracking-[0.16em] text-black/40">
                    Service Area
                  </p>

                  <h3 className="mt-8 text-2xl font-bold">
                    Greenville, SC
                  </h3>

                  <p className="mt-3 text-lg leading-7 text-[var(--text-secondary)]">
                    Serving Greenville and surrounding communities throughout
                    the Upstate.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Social */}
        <section className="bg-[#f7f7f5] px-6 py-20 md:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col justify-between gap-8 md:flex-row md:items-center">
              <div>
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
                  Follow Our Work
                </p>

                <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">
                  See more from Next Level Paintwork.
                </h2>
              </div>

              <div className="flex flex-wrap gap-4">
                <a
                  href="https://www.instagram.com/next.levelpaintworks"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-lg border border-black/10 bg-white px-6 py-4 font-semibold transition hover:border-[var(--accent)]"
                >
                  Instagram →
                </a>

                <a
                  href="https://www.facebook.com/share/14okyBrw8Lq/"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-lg border border-black/10 bg-white px-6 py-4 font-semibold transition hover:border-[var(--accent)]"
                >
                  Facebook →
                </a>
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

export default Contact;