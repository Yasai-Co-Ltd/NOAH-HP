import { About } from "@/components/sections/About/About";
import { AirbornePower } from "@/components/sections/AirbornePower/AirbornePower";
import { Business } from "@/components/sections/Business/Business";
import { ContactCta } from "@/components/sections/ContactCta/ContactCta";
import { Hero } from "@/components/sections/Hero/Hero";
import { NewsRecruit } from "@/components/sections/NewsRecruit/NewsRecruit";
import { OurValue } from "@/components/sections/OurValue/OurValue";
import { SecurityStandard } from "@/components/sections/SecurityStandard/SecurityStandard";
import { Solution } from "@/components/sections/Solution/Solution";
import { Strengths } from "@/components/sections/Strengths/Strengths";
import { Sustainability } from "@/components/sections/Sustainability/Sustainability";

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <OurValue />
      <Business />
      <SecurityStandard />
      <AirbornePower />
      <Solution />
      <Strengths />
      <Sustainability />
      <NewsRecruit />
      <ContactCta />
    </>
  );
}
