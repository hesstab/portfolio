import { ImGithub } from "react-icons/im";
import styles from './style.module.scss';

const Project = (props) => {
    return(
        <div className={styles.projectContainer}>
            <div className={styles.info}>
                <h2>
                    {props.title}
                </h2>
                <p>
                    {props.subtitle}
                </p>
                <div className={styles.icons}>
                    <ImGithub />
                    <ImGithub />
                </div>
            </div>
            <div className={styles.imageContainer}>
                <img className={styles.image1} src={props.image1} alt="project-image" />
                <img className={styles.image2} src={props.image2} alt="project-image" />
            </div>
            
        </div>
    )
}

export default Project;

