import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

function EstimateCTA() {
  const form = useRef();
  const [status, setStatus] = useState("");
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    setIsSending(true);
    setStatus("");

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        },
      );

      setStatus("success");
      form.current.reset();
    } catch (error) {
      console.error("EmailJS error:", error);
      setStatus("error");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section
      id="estimate"
      className="bg-[#f7f7f5] px-5 py-20 sm:px-6 md:py-32"
    >
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14">
        {/* Left side */}
        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
            Free Estimate
          </p>

          <h2 className="max-w-lg text-4xl font-extrabold leading-tight tracking-tight md:text-5xl">
            Ready to transform your space?
          </h2>

          <p className="mt-5 max-w-lg text-base leading-7 text-[var(--text-secondary)] sm:text-lg sm:leading-8">
            Tell us a little about your project and Next Level Paintwork will
            get in touch to discuss your estimate.
          </p>

          <div className="mt-8 grid gap-6 sm:grid-cols-3 lg:mt-10 lg:grid-cols-1">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-black/40 sm:text-sm">
                Serving
              </p>

              <p className="mt-2 font-semibold sm:text-lg">
                Greenville & surrounding areas
              </p>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-black/40 sm:text-sm">
                Languages
              </p>

              <p className="mt-2 font-semibold sm:text-lg">
                English & Español
              </p>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-black/40 sm:text-sm">
                Estimate
              </p>

              <p className="mt-2 font-semibold sm:text-lg">
                Free project consultation
              </p>
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="rounded-2xl bg-white p-5 shadow-sm sm:p-7 md:p-10">
          <form
            ref={form}
            onSubmit={handleSubmit}
            className="space-y-5 sm:space-y-6"
          >
            <div className="grid gap-5 md:grid-cols-2 md:gap-6">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-semibold"
                >
                  Name
                </label>

                <input
                  id="name"
                  name="customer_name"
                  type="text"
                  required
                  placeholder="Your name"
                  className="min-h-12 w-full rounded-lg border border-black/10 bg-[#fafafa] px-4 py-3 text-base outline-none transition focus:border-[var(--accent)]"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="mb-2 block text-sm font-semibold"
                >
                  Phone
                </label>

                <input
                  id="phone"
                  name="customer_phone"
                  type="tel"
                  required
                  placeholder="(864) 000-0000"
                  className="min-h-12 w-full rounded-lg border border-black/10 bg-[#fafafa] px-4 py-3 text-base outline-none transition focus:border-[var(--accent)]"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-semibold"
              >
                Email
              </label>

              <input
                id="email"
                name="customer_email"
                type="email"
                required
                placeholder="you@example.com"
                className="min-h-12 w-full rounded-lg border border-black/10 bg-[#fafafa] px-4 py-3 text-base outline-none transition focus:border-[var(--accent)]"
              />
            </div>

            <div className="grid gap-5 md:grid-cols-2 md:gap-6">
              <div>
                <label
                  htmlFor="projectType"
                  className="mb-2 block text-sm font-semibold"
                >
                  Project Type
                </label>

                <select
                  id="projectType"
                  name="project_type"
                  required
                  defaultValue=""
                  className="min-h-12 w-full rounded-lg border border-black/10 bg-[#fafafa] px-4 py-3 text-base outline-none transition focus:border-[var(--accent)]"
                >
                  <option value="" disabled>
                    Select a service
                  </option>
                  <option value="Interior Painting">Interior Painting</option>
                  <option value="Exterior Painting">Exterior Painting</option>
                  <option value="Commercial Painting">
                    Commercial Painting
                  </option>
                  <option value="Cabinet Painting">Cabinet Painting</option>
                  <option value="New Construction">New Construction</option>
                  <option value="Specialty Work">Specialty Work</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="propertyType"
                  className="mb-2 block text-sm font-semibold"
                >
                  Property Type
                </label>

                <select
                  id="propertyType"
                  name="property_type"
                  required
                  defaultValue=""
                  className="min-h-12 w-full rounded-lg border border-black/10 bg-[#fafafa] px-4 py-3 text-base outline-none transition focus:border-[var(--accent)]"
                >
                  <option value="" disabled>
                    Select property type
                  </option>
                  <option value="Residential">Residential</option>
                  <option value="Commercial">Commercial</option>
                  <option value="New Construction">New Construction</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>

            <div>
              <label
                htmlFor="location"
                className="mb-2 block text-sm font-semibold"
              >
                Project Location
              </label>

              <input
                id="location"
                name="project_location"
                type="text"
                required
                placeholder="Greenville, SC"
                className="min-h-12 w-full rounded-lg border border-black/10 bg-[#fafafa] px-4 py-3 text-base outline-none transition focus:border-[var(--accent)]"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-semibold"
              >
                Tell us about your project
              </label>

              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder="What would you like painted?"
                className="w-full resize-none rounded-lg border border-black/10 bg-[#fafafa] px-4 py-3 text-base outline-none transition focus:border-[var(--accent)]"
              />
            </div>

            <button
              type="submit"
              disabled={isSending}
              className="min-h-13 w-full rounded-lg bg-[var(--accent)] px-6 py-4 font-semibold text-white transition hover:bg-[var(--accent-hover)] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isSending ? "Sending..." : "Request Free Estimate"}
            </button>

            {status === "success" && (
              <p className="rounded-lg bg-green-50 px-4 py-3 text-center text-sm font-medium text-green-700">
                Thank you! Your estimate request has been sent successfully.
              </p>
            )}

            {status === "error" && (
              <p className="rounded-lg bg-red-50 px-4 py-3 text-center text-sm font-medium text-red-700">
                Something went wrong. Please try again or contact us directly.
              </p>
            )}

            <p className="text-center text-xs leading-5 text-[var(--text-secondary)] sm:text-sm">
              No obligation. We'll contact you to discuss your project.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

export default EstimateCTA;