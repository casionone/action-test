import React from 'react';
import Layout from '@theme/Layout';
import Hero from '../components/Hero';
import Features from '../components/Features';

const Home = (): JSX.Element => (
  <Layout
    description="Apache EventMesh (Incubating)"
  >
    <Hero />
    <main>
      <Features />
    </main>
  </Layout>
);

export default Home;
