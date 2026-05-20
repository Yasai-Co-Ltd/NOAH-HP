import { About } from "@/components/sections/About/About";
import { Business } from "@/components/sections/Business/Business";
import { ContactCta } from "@/components/sections/ContactCta/ContactCta";
import { Hero } from "@/components/sections/Hero/Hero";
import { NewsRecruit } from "@/components/sections/NewsRecruit/NewsRecruit";
import { OurValue } from "@/components/sections/OurValue/OurValue";
import { Solution } from "@/components/sections/Solution/Solution";
import { Strengths } from "@/components/sections/Strengths/Strengths";

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <OurValue />
      <Business />
      <Solution />
      <Strengths />
      <NewsRecruit />
      <ContactCta />
    </>
  );
}
