import styles from './style.module.scss';

const Skills = (props) => {
    return (
        <div className={styles.skillsContainer}>
            <div className={styles.iconWrapper}>
                <img src={props.icon} alt="icon-image" />

                <h2>
                    {props.iconText}
                </h2>
            </div>
        </div>
    );
}

export default Skills;