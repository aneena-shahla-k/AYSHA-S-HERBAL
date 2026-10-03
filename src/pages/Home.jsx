import React from 'react';
import HomeHero from '../components/HomeMain/HomeHero';
// import TrustFeatures from '../components/HomeMain/TrustFeatures';
import FeaturedSection from '../components/HomeMain/FeaturedSection';
import WhyChooseUs from '../components/HomeMain/WhyChooseUs';
import AboutPreview from '../components/HomeMain/AboutPreview';
import CustomerReviews from '../components/HomeMain/CustomerReviews';
import FinalCTA from '../components/HomeMain/FinalCTA';
import CollectionSectionn from '../components/HomeMain/CollectionSectionn';
import FeaturedHerbalSoaps from '../components/HomeMain/FeaturedHerbalSoaps';
import SkinCareSection from '../components/HomeMain/SkinCareSection';
// import FeaturedProducts from '../components/HomeMain/FeaturedProducts';

export default function Home() {
  return (
    <div className="home-page animate-fade-in">
      <HomeHero />
    <AboutPreview />
    <CollectionSectionn/>
    <FeaturedHerbalSoaps/>
    {/* <FeaturedProducts/> */}
          <SkinCareSection/>

          <WhyChooseUs />


            <FeaturedSection />
                      {/* <TrustFeatures /> */}

      <CustomerReviews />
      <FinalCTA />
    </div>
  );
}
