import Head from 'next/head';
import Banner from '../components/Banner';
import Layout from '../components/Layout';
import AboutMe from '../components/AboutMe';
import Projects from '../components/Projects';

export default function Home() {
  return (
    <>
      <Head>
        <title>Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Banner />
        <div className="px-20 -tablet:px-5">
          <AboutMe />
          <Projects />
        </div>
      </Layout>
    </>
  );
}
