import React from 'react';
import { ThemeProvider } from 'theme-ui';
import { StickyProvider } from 'contexts/app/app.provider';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout';
import Banner from 'sections/banner';
import KeyFeature from 'sections/key-feature';
import WhyUs from 'sections/why-us';
import PartnerSection from 'sections/partner';
import WorkFlow from 'sections/workflow';
import Faq from 'sections/faq';

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <StickyProvider>
        <Layout>
          <SEO title="Kabb.in" />
          <Banner />
          <KeyFeature />
          <WhyUs />
          <PartnerSection />
          <WorkFlow />
          <Faq />
        </Layout>
      </StickyProvider>
    </ThemeProvider>
  );
}
