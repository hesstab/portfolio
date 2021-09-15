import styles from './style.module.scss';

const NavItem = (props) => {
    return (
        <button 
            onClick={() => document.getElementById(props.elementId).scrollIntoView({ behavior: 'smooth' })}
            className={styles.navButton}>
            {props.name}
        </button>
    );
}

export default NavItem;