import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import styles from '@/styles/Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.social}>
                <a href="https://github.com/yeseniamolinab" className={styles.icon} target="_blank" rel="noopener noreferrer" aria-label='follow me on github'>
                    <FontAwesomeIcon icon={faGithub} fixedWidth />
                </a>
                <a href="https://www.linkedin.com/in/yesenia-molina-6a381368/" className={styles.icon} target="_blank" rel="noopener noreferrer" aria-label='follow me on linkedin'>
                    <FontAwesomeIcon icon={faLinkedin} target="_blank" fixedWidth />
                </a>
                <a href="https://twitter.com/yeseniamolinab" className={styles.icon} target="_blank" rel="noopener noreferrer" aria-label='Follow me on twitter'>
                    <FontAwesomeIcon icon={faTwitter} fixedWidth />
                </a>
            </div>
            <p className={styles.p}>
                © 2023 Yesi Molina
            </p>
        </footer>
    );
}

export default Footer; 