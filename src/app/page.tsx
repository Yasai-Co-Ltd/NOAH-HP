import { About } from "@/components/sections/About/About";
import { Business } from "@/components/sections/Business/Business";
import { ContactCta } from "@/components/sections/ContactCta/ContactCta";
import { Hero } from "@/components/sections/Hero/Hero";
import { NewsRecruit } from "@/components/sections/NewsRecruit/NewsRecruit";
import { Projects } from "@/components/sections/Projects/Projects";
import { Solution } from "@/components/sections/Solution/Solution";
import { Strengths } from "@/components/sections/Strengths/Strengths";

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Business />
      <Solution />
      <Strengths />
      <Projects />
      <NewsRecruit />
      <ContactCta />
    </>
  );
}
