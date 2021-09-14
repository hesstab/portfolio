import styles from './style.module.scss';
import NavItem from '../NavItem/NavItem';

const Header = () => {
    return (
        <div className={styles.header}>
            <div className={styles.inner}>
                <ul>
                    <li><NavItem name="About"/></li>
                    <li><NavItem name="Projects"/></li>
                    <li><NavItem name="Resume"/></li>
                </ul>
            </div>
        </div>
    );
}

export default Header;