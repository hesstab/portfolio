import styles from './style.module.scss';

const AboutMe = () => {
    return (
        <div className={styles.container}>
            <div className={styles.image}>
                <img src="/befunky.jpg" alt="photo" />
            </div>
            <div className={styles.content}>
                <h2>The most dangerous phrase in human language is, `We have always done it this way.` - Grace Hopper</h2>
                <p>
                    Hi, I am Hessam, a junior software engineer with over 10 years of experience in Molecular biology, Bioinformatics and Cancer Genomics. 
                </p>
                <p>
                    My exposure to sequencing technology during my PhD studies and the enormous power of informatics in deciphering hidden code within our most fundamental building blocks, DNA, made me curious in pursuing Computer science in more depth.
                </p>
                <p>
                    I am passionate about the world of software engineering and believe to have the drive and skill-set to excel in fast-paced leadership roles. I am always willing to learn new skills and hoping to bring my enthusiasm for problem solving in software development into tackling real world challenges.
                </p>
            </div>
        </div>
    );
}

export default AboutMe;