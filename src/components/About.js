import Link from 'next/link';
import styles from '@/styles/About.module.css';

const About = () => {
    return (
        <>
            <section id='introduction' className={styles.section}>
                <h2 className={styles.h2}>Introduction</h2>
                <p className={styles.p}>
                    I started my professional career in 2011 and since then, I have been passionate about programming and technology. As a software engineer, I value self-study, autonomy, and being part of a team that values contributions and teamwork.
                </p>
            </section><section id='background' className={styles.section}>
                <h2 className={styles.h2}>Background</h2>
                <p className={styles.p}>
                    I grew up in a small town called Saucillo, located in the state of Chihuahua, Mexico. I studied Computer Systems Engineering at Tecnologico de Ciudad Cuauhtemoc and upon graduation, I moved to the capital, Chihuahua city, where I started my career as a software developer.
                </p>
            </section><section id='expertise' className={styles.section}>
                <h2 className={styles.h2}>Expertise</h2>
                <p className={styles.p}>
                    As a software engineer, I have experience working with various programming languages and frameworks. C# was the first language I learned and worked with extensively for many years, but I have also gained proficiency in other languages such as Javascript, Typescript, and Node.js, as well as frontend frameworks. I have a versatile and adaptable skill set that allows me to easily pick up new technologies and programming languages.
                </p>
            </section><section id='personality' className={styles.section}>
                <h2 className={styles.h2}>Personality</h2>
                <p className={styles.p}>
                    In my free time, I enjoy being outdoors and engaging in physical activities such as hiking, running, or just walking in the park with my partner. I also find yoga to be a relaxing and rewarding way to unwind after a long day. As a self-motivated person, I am highly responsible and reliable, always striving to do my best and achieve my goals.
                </p>
            </section>
            <Link href='/projects' aria-label='see my work experience' className={styles.a}>See my work experience</Link>
        </>
    )
};

export default About;