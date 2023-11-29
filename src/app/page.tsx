"use client";

import Ads from "./components/Ads";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navigation from "./components/Navigation";
import Services from "./components/Services";
import Stats from "./components/Stats";
import { banerContact, bannerIa } from "./constants";

export default function Home() {
  return (
    <main className="w-full h-full px-4">
      <Navigation />
      <section className="flex flex-col space-y-12">
        <Hero />
        <Ads
          title={banerContact.title}
          description={banerContact.description}
          button={banerContact.button}
        />
        <Stats />
        <section
          className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-4 gap-6 w-full md:max-w-[1000px] lg:max-w-[1200px] xl:max-w-[1400px] mx-auto"
          id="Servicios"
        >
          <Services />
          <Services />
          <Services />
          <Services />
        </section>

        <Contact />
        <Ads title={bannerIa.title} description={bannerIa.description} />
      </section>
      <Footer />
    </main>
  );
}
