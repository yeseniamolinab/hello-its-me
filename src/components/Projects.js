import styles from '@/styles/Projects.module.css';

const Projects = () => {
    return (
        <section id='work-experience' className={styles.projects}>
            <h1>Work experience</h1>
            <section id='time-line'>
                <div className={styles.timeline}>
                    <div className={styles.timelineItem}>
                        <a className={styles.link} href='https://www.eko.org/' target='_blank' rel="noopener noreferrer" aria-label='visit eko website'>
                            <h1 className={styles.itemTitle}>Full Stack Developer at Ekō</h1>
                        </a>
                        <div className={styles.itemDescription} data-year='2021'>
                            <p>Support the development and maintenance of several applications, including the action and fundraiser pages.</p>
                            <p>Design and implement A/B tests to increase conversion rates and improve the member experience.</p>
                            <span className={styles.current}>Current</span>
                        </div>
                    </div>
                    <div className={styles.timelineItem}>
                        <a className={styles.link} href='https://xuppay.com/' target='_blank' rel="noopener noreferrer" aria-label='visit xup payments website'>
                            <h1 className={styles.itemTitle}>Backend Engineer at Xup Payments </h1>
                        </a>
                        <div className={styles.itemDescription} data-year='2020'>
                            <p>Guided the design and architecture of backend APIs to enhance customer experience.</p>
                            <p>Expanded product offerings by integrating additional payment gateways.</p>
                        </div>
                    </div>
                    <div className={styles.timelineItem}>
                        <a className={styles.link} href='https://www.opentable.com/' target='_blank' rel="noopener noreferrer" aria-label='visit opentable website'>
                            <h1 className={styles.itemTitle}>Software Engineer at OpenTable</h1>
                        </a>
                        <div className={styles.itemDescription} data-year='2016'>
                            <p>Maintained and improved user-related and booking features.</p>
                            <p>Built A/B tests that improved the conversion rate by 80%</p>
                            <p>Played an active role in migrating legacy systems to Node.js, React, and GraphQL.</p>
                            <p>Helped build the take-out functionality to address the COVID-19 pandemic.</p>
                            <p>Mentored interns and contributed to the internship program's success.</p>
                        </div>
                    </div>
                    <div className={styles.timelineItem}>
                        <a className={styles.link} href='https://catalyst.concentrix.com/gamma/' target='_blank' rel="noopener noreferrer" aria-label='visit gamma partners website'>
                            <h1 className={styles.itemTitle}>Software Engineer at Gamma Partners</h1>
                        </a>
                        <div className={styles.itemDescription} data-year='2012'>
                            <p>Developed and maintained e-commerce sites for various business lines such as <a className={styles.link} href='https://www.daigger.com/' target='_blank' rel='noopener noreferrer'>Daigger</a>, <a className={styles.link} href='https://www.dickblick.com/' target='_blank' rel='noopener noreferrer'>Blick Art Materials</a> and <a className={styles.link} href='https://www.utrechtart.com/' target='_blank' rel='noopener noreferrer'>Utrecht Art Supplies</a>.</p>
                            <p>Leveraged full-stack development skills to provide end-to-end solutions.</p>
                        </div>
                    </div>
                    <div className={styles.timelineItem}>
                        <h1 className={styles.itemTitle}>Full Stack Developer at Comité directivo estatal PRI</h1>
                        <div className={styles.itemDescription} data-year='2011'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc sit amet aliquet lacinia, nunc odio aliquam mauris, eget aliquet nisl nisl et nisl. Sed euismod, nunc sit amet aliquet lacinia, nunc odio aliquam mauris, eget aliquet nisl nisl et nisl.</div>
                    </div>
                </div>
            </section>
        </section>
    );
}

export default Projects;