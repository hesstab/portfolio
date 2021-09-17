import styles from './style.module.scss';

const NavItem = (props) => {
    return (
        <div className={styles.buttonContainer}>
            <button
                onClick={props.onClick}
                id={styles[props.id]}
                >
                {props.name}
            </button>
        </div>
    );
}

export default NavItem;