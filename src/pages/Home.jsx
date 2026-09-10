import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

import Hero from "../components/home/Hero";
import Services from "../components/home/Services";
import Projects from "../components/home/Projects";
import WhyUs from "../components/home/WhyUs";
import AboutPreview from "../components/home/AboutPreview";
import EstimateCTA from "../components/home/EstimateCTA";
import { Helmet } from "react-helmet-async";

function Home() {
  return (
    <>
      <Navbar />

      <Helmet>
        <title>
          Next Level Paintwork | Professional Painting in Greenville, SC
        </title>

        <meta
          name="description"
          content="Next Level Paintwork provides professional residential and commercial painting services in Greenville, SC with quality workmanship, fair pricing, and dependable service."
        />

        <meta
          property="og:title"
          content="Next Level Paintwork | Professional Painting in Greenville, SC"
        />

        <meta
          property="og:description"
          content="Professional residential and commercial painting in Greenville, South Carolina."
        />

        <meta property="og:image" content="/images/hero-painting.webp" />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HousePainter",
            name: "Next Level Paintwork LLC",
            description:
              "Professional residential and commercial painting services in Greenville, South Carolina.",
            email: "nextlevelpaint01@gmail.com",
            telephone: "+1-864-667-2019",
            areaServed: {
              "@type": "City",
              name: "Greenville",
              addressRegion: "SC",
              addressCountry: "US",
            },
            url: window.location.origin,
            sameAs: [
              "https://www.instagram.com/next.levelpaintworks",
              "https://www.facebook.com/share/14okyBrw8Lq/",
            ],
            knowsLanguage: ["English", "Spanish"],
            slogan: "Professional Quality. Fair Prices. Next-Level Results.",
            makesOffer: [
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Interior Painting",
                },
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Exterior Painting",
                },
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Commercial Painting",
                },
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Cabinet Painting",
                },
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "New Construction Painting",
                },
              },
            ],
          })}
        </script>
      </Helmet>

      <main>
        <Hero />
        <Services />
        <Projects />
        <WhyUs />
        <AboutPreview />
        <EstimateCTA />
      </main>

      <Footer />
    </>
  );
}

export default Home;
