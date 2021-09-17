import styles from './style.module.scss';

const Button = (props) => {
    return(
        <button 
        className={styles.button}
        onClick={() => document.getElementById('footer').scrollIntoView({ behavior: 'smooth' })}
        >
            {props.children}
        </button>
    )
}

export default Button;