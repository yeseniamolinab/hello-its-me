import Image from 'next/image';
import styles from '../styles/Home.module.css';

const MeetMe = ({ profilePhoto }) => {
  console.log(profilePhoto);
  return (
    <section id='hero-section' className={styles.hero}>
      <div className={styles.content}>
        <h1 className={styles.h1}>Hi, I am Yesi Molina 👋</h1>
        <h2 className={styles.h2}>I am a software engineer</h2>
        <p className={styles.p}>
          I am based in Chihuahua, Mexico. I am passionate about building amazing products that solve real world problems.
        </p>
        <p className={styles.p}>
          I have 12+ years of experience in software development working with different technologies and programming languages.
        </p>
      </div>
      <div className={styles.profilePhotoContainer}>
        <Image
          src={`https://yesimolinadev.imgix.net/${profilePhoto}`}
          alt='yesi molina profile picture'
          className={styles.profilePhoto}
          fill={true}
          priority={true}
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
        />
      </div>
    </section>
  );
};

// let's set a default photo
MeetMe.defaultProps = {
  profilePhoto: 'test.jpg',
};

export default MeetMe;