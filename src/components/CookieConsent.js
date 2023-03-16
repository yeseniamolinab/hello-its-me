import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCookieBite } from '@fortawesome/free-solid-svg-icons';
import styles from '@/styles/Cookie.module.css';

const CookieConsent = () => {
    return (
        <section id='cookie-consent' class={styles.cookieConsent}>
            <div className={styles.container}>
                <FontAwesomeIcon icon={faCookieBite} className={styles.icon} />
                <p>
                    This website uses cookies to improve your browsing experience and to help us understand how our site is being used. By continuing to browse the site, you consent to our use of cookies. <a href="#" className={styles.a}>Learn more</a>
                </p>

            </div>
            <div className={styles.buttonContainer}>
                <button className={styles.button}>Accept all</button>
                <button className={styles.button}>Necessary only</button>
            </div>
        </section>

    );
}

export default CookieConsent;
