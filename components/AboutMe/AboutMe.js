import styles from './style.module.scss';

const AboutMe = () => {
    return (
        <div className={styles.container}>
            <div className={styles.image}>
                <img src="/myself-pic.jpg" alt="photo" />
            </div>
            <div className={styles.content}>
                <h2>The most dangerous phrase in human language is, `We have always done it this way.` - Grace Hopper</h2>
                <p>
                    Hi, I am Hessam, a junior software engineer with over 10 years of experience in agile, life sciences industry. 
                </p>
                <p>
                    My exposure to sequencing technology during my phD studies in the field of cancer genomics, and the enormous power of informatics in deciphering hidden code within our most fundamental building blocks, DNA, made me curious in pursuing Computer science in more depth.
                </p>
                <p>
                    I am passionate about the world of tech and believe to have the drive and skill-set to excel in fast-paced leadership roles. I am always willing to grow and learn new skills.
                </p>
                <p>
                    As a scientist with enthusiasm for solving problems, I am determined to leverage my unique approach to experiment & learn as well as my skills in software development, to tackle real world challenges.
                </p>
            </div>
        </div>
    );
}

export default AboutMe;