import styles from './style.module.scss';

const AboutMe = () => {
    return (
        <div className={styles.container}>
            <div className={styles.image}>
                <img src="/befunky.jpg" alt="photo" />
            </div>
            <div className={styles.content}>
                <h2>Hi, I'm Hessam</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt ratione obcaecati, quaerat sed ab explicabo dignissimos deserunt eos, itaque nesciunt quo? Aliquid ipsa cupiditate architecto deserunt, quisquam reiciendis nihil fugit!
                </p>
            </div>
        </div>
    );
}

export default AboutMe;