import styles from './style.module.scss';

const NavItem = (props) => {
    return (
        <button 
            onClick={props.elementId ? (() => document.getElementById(props.elementId).scrollIntoView({ behavior: 'smooth' })) : null}
            className={styles.navButton}>
            {props.name}
        </button>
    );
}

export default NavItem;