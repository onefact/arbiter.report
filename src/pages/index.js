import { useEffect } from 'react';
import Head from 'next/head';
import { Divider } from '@mui/material';
import { MainLayout } from '../components/main-layout';
import { HomeClients } from '../components/home/home-clients';
import { HomeHero } from '../components/home/home-hero';
import { HomeDevelopers } from '../components/home/home-developers';
import { HomeDesigners } from '../components/home/home-designers';
import { HomeFeatures } from '../components/home/home-features';
import { HomeTestimonials } from '../components/home/home-testimonials';
import { gtm } from '../lib/gtm';
import { useRouter } from 'next/router'

const Home = () => {
  
  const router = useRouter();
  
  useEffect(() => {
    //gtm.push({ event: 'page_view' });
    //router.push("/dashboard");
    router.push("/authentication/login");
  }, []);

  return (
    <>
      <Head>
        <title>
          SimPPL
        </title>
      </Head>
      <main>
        <HomeHero />
        <Divider />
        <HomeDevelopers />
        <Divider />
        <HomeDesigners />
        <HomeTestimonials />
        <HomeFeatures />
        <Divider />
        <HomeClients />
      </main>
    </>
  );
};

Home.getLayout = (page) => (
  <MainLayout>
    {page}
  </MainLayout>
);

export default Home;
