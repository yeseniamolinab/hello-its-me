import Head from 'next/head';

const Meta = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name='keywords'
        content='yesi molina, yesi molina blog, yesi molina personal page, yesi molina software engineer, yesi molina developer, fullstack developer'
      />
      <meta name='description' content='Hi, I am Yesi Molina 👋 I am a software engineer. I have 12+ years of experience in software development working with different technologies and programming languages.' />
    </Head>
  );
};

export default Meta;

// let's set a default title
Meta.defaultProps = {
  title: 'Yesi Molina - Software Engineer',
};