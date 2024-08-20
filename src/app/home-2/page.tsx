"use client";

import React, { useRef } from 'react';
import Wrapper from '@/layouts/wrapper';
import HeaderTwo from '@/layouts/headers/header-2';
import HeroBannerTwo from '../components/hero-banners/hero-banner-two';
import HowItWorksTwo from '../components/how-it-works/how-it-works-2';
import FeatureThree from '../components/features/feature-three';
import CategorySectionTwo from '../components/category/category-section-2';
import FeatureFour from '../components/features/feature-four';
import FeedbackTwo from '../components/feedBacks/feedback-two';
import BlogTwo from '../components/blogs/blog-two';
import JobPortalIntroTwo from '../components/job-portal-intro/job-portal-intro-2';
import FooterTwo from '@/layouts/footers/footer-2';
import ContactArea from '../components/contact/contact-area';
// import ImportAnkita from '@/layouts/footers/Ankita';



const HomeTwo = () => {
  const ankitaRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
   
  const scrollToAnkita = () => {

    console.log("Hii")

    if (ankitaRef.current) {
      ankitaRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    if (contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Wrapper>
      <div className='main-page-wrapper'>
        {/* header start */}
        <HeaderTwo scrollToContact={scrollToContact} />
        {/* header end */}

        {/* hero banner start */}
        <HeroBannerTwo />
        {/* hero banner end */}

        {/* how it works start */}
        <HowItWorksTwo />
        {/* how it works end */}

        {/* feature three start */}
        <FeatureThree />
        {/* feature three end */}

        {/* category section 2 start */}
        <CategorySectionTwo />
        {/* category section 2 end */}

        {/* feature four start */}
        {/* <FeatureFour /> */}
        {/* feature four end */}

        {/* feedback two start */}
        <FeedbackTwo />
        {/* feedback two end */}

        {/* blog two start */}
        <BlogTwo />
        {/* blog two end */}

        {/* job portal intro 2 */}
        <JobPortalIntroTwo />
        {/* job portal intro 2 end */}
       
        {/* Contact area start */}
        <div ref={contactRef}><ContactArea  /></div>
        {/* Contact area end */}

        {/* Button to scroll to Ankita */}
    

        {/* Footer start */}
        <FooterTwo />
        {/* Footer end */}

        {/* ImportAnkita section */}
      

      </div>
    </Wrapper>
  );
};

export default HomeTwo;
