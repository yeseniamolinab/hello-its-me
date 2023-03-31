import Link from 'next/link';
import styles from '../styles/Header.module.css';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faClose } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    const router = useRouter();
    const [isNavOpen, setIsNavOpen] = useState(true);
    const [isMobile, setIsMobile] = useState(false);

    const getActiveLinkClass = (url, pathname) => (pathname === url && pathname !== '/') ? styles.active : "";

    const routes = {
        'home': '/',
        'blog': '/blog',
        'about': '/about',
        'resume': '/resume',
        'projects': '/projects',
    };

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };

    const handleMediaQueryChange = (mediaQuery) => {
        if (mediaQuery.matches) {
            setIsMobile(true);
            setIsNavOpen(false);
        } else {
            setIsMobile(false);
        }
    };

    const mobileNavAriaLabel = isNavOpen ? 'close navigation' : 'open navigation';

    useEffect(() => {
        const mediaQuery = window.matchMedia('(max-width: 700px)');
        mediaQuery.addEventListener('change', handleMediaQueryChange);
        handleMediaQueryChange(mediaQuery);

        return () => {
            mediaQuery.removeEventListener('change', handleMediaQueryChange);
        }
    }, []);

    useEffect(() => {
        setIsNavOpen(false);
    }, [router.pathname])


    return (
        <header className={styles.header}>
            <h2>
                <Link href={routes.home} className={classNames(styles.navItem, getActiveLinkClass(routes.home, router.pathname))}>YM</Link>
            </h2>
            {(!isMobile || isNavOpen) && (
                <nav className={styles.navigation}>
                    <Link href={routes.blog} className={classNames(styles.navItem, getActiveLinkClass(routes.blog, router.pathname))}>Blog</Link>

                    <Link href={routes.projects} className={classNames(styles.navItem, getActiveLinkClass(routes.projects, router.pathname))}>Projects</Link>

                    <Link href={routes.about} className={classNames(styles.navItem, getActiveLinkClass(routes.about, router.pathname))}>About</Link>

                    <Link href={routes.resume} className={classNames(getActiveLinkClass(routes.resume, router.pathname), styles.resume)}>Resume</Link>
                </nav>
            )}
            <a href='#' onClick={toggleNav} className={styles.burger} aria-label={mobileNavAriaLabel}>
                {isNavOpen ? <FontAwesomeIcon icon={faClose} className={styles.icon} /> : <FontAwesomeIcon icon={faBars} className={styles.icon} />}

            </a>
        </header>
    );
};

export default Header;
