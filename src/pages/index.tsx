import Head from "next/head";

const Home = () => {
  return (
    <>
      <Head>
        <title>Squid</title>
        <meta
          name="description"
          content="Beautiful Landing Page Design for You"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>

      <div>Home Page</div>
    </>
  );
};

export default Home;
