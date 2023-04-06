import '@/styles/globals.css'
import { MDXProvider } from '@mdx-js/react';
import MDXComponents from '../components/MDXComponents';
import Layout from '@/layouts/Layouts';

export default function App({ Component, pageProps }) {
  return (
    <MDXProvider components={MDXComponents}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </MDXProvider>
  );
}
