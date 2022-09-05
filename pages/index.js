import Head from 'next/head';
import Banner from '../components/Banner';
import Layout from '../components/Layout';
import AboutMe from '../components/AboutMe';


export default function Home() {
  return (
    <>
      <Head>
        <title>Portofolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Banner />
        <AboutMe />
      </Layout>
    </>
  );
}
