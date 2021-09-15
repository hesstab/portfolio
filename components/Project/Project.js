import { RiGithubLine } from "react-icons/ri";
import { HiExternalLink } from "react-icons/hi";
import styles from './style.module.scss';
import classNames from 'classnames/bind'

const classes = classNames.bind(styles);

const Project = (props) => {
    return(
        <div className={styles.projectContainer}>
            <div className={styles.info}>
                <h2>
                    {props.title}
                </h2>
                <div className={styles.subtitleContainer}>
                    <p>
                        {props.subtitle}
                    </p>
                </div>
                <p className={styles.tech}>
                    {props.tech}
                </p>
                <div className={styles.icons}>
                    <RiGithubLine size={30} />
                    <HiExternalLink size={30} />
                </div>
            </div>
            <div className={classes('imageContainer')}>
                {props.image2 ? <img className={styles.image2} src={props.image2} alt="project-image" /> : null}
                <img className={classes(props.className)} src={props.image1} alt="project-image" />
            </div>
        </div>
    )
}

export default Project;

