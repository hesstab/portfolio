import styles from './style.module.scss';

const NavItem = (props) => {
    return (
        <a className={styles.link} href="#">
            {props.name}
        </a>
    );
}

export default NavItem;