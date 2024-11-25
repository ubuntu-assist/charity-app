import GetInvolvedSection from '@/components/GetInvolvedSection'
import Hero from '@/components/Hero'
import ImpactSection from '@/components/ImpactSection'
import NewsBlogSection from '@/components/NewsBlog'
import PartnerSponsorsSection from '@/components/Sponsors'
import SuccessStoriesSection from '@/components/SuccessStories'

const Home = () => {
  return (
    <>
      <Hero />
      <ImpactSection />
      <GetInvolvedSection />
      <SuccessStoriesSection />
      <NewsBlogSection />
      <PartnerSponsorsSection />
    </>
  )
}

export default Home
