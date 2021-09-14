import Header from '../components/Header/Header'
import AboutMe from '../components/AboutMe/AboutMe';
import styles from '../styles/Home.module.css'
import Button from '../components/Button/Button';

export default function Home() {
  return (
    <div>
      <Header />
      <main className={styles.main}>
        <div className={styles.inner}>
          <div className={styles.background}>
            <div className={styles.intro}>
              <h1>
                Hessam Tabatabaee
              </h1>
              <p className={styles.introText}>
                I'm a software engineer based in Sydney, with a passion for tech and creating delightful web experience 
              </p>
              <div className={styles.buttonContainer}>
                <Button>
                  Say Hi!
                </Button>
              </div>
            </div>
            <img className={styles.curve} src="/bottom.png" alt="curve1" />
            <img className={styles.curve} src="/top.png" alt="curve1" />
          </div>
          {/* <AboutMe /> */}
        </div>
        
      </main>
      <footer className={styles.footer}>
          © 2021 Hessam Tabatabaee
          <span className={styles.logo}>
          </span>
      </footer>
    </div>
  )
}
