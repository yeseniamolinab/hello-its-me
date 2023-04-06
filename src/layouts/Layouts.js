import Header from '../components/Header';
import Footer from '../components/Footer';
import CookieConsent from '@/components/CookieConsent';
import { Lato } from '@next/font/google';
import classNames from 'classnames';

const lato = Lato({
  subsets: ['latin'],
  style: 'normal',
  weight: ["300", "400", "700"],
});


const Layout = ({ children }) => {
  return (
    <div className={classNames('page-container', lato.className)}>
      <Header />
      <main className='max-width-container main'>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;