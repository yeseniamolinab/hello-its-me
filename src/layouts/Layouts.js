import Header from '../components/Header';
import Footer from '../components/Footer';
import CookieConsent from '@/components/CookieConsent';


const Layout = ({ children }) => {
  return (
    <div className='page-container'>
      <Header />
      <main className='max-width-container main'>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;