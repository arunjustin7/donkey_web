
import SustainabilityMetrics from "./sustainability-metrics";
import HealthChallenges from "./health-challenges"
import NewsArticles from "./news-articles";
import Testimonials from "./testimonials";
import FAQSection from "./faq-section";
import KeyFacts from "./key-facts";
import Benefits from "./benefits";
import Feature from "./feature";
import Hero from "./hero";

function Page() {
  return (
    <>
      <Hero />
      <Feature />
      <Benefits />
      <SustainabilityMetrics />
      <HealthChallenges />
      <KeyFacts />
      <NewsArticles />
      <Testimonials />
      <FAQSection />
    </>
  )
}

export default Page
