/* eslint-disable react/no-unescaped-entities */
import Header from '../components/Header/Header'
import AboutMe from '../components/AboutMe/AboutMe';
import styles from '../styles/Home.module.css'
import Button from '../components/Button/Button';
import Project from '../components/Project/Project';

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
                A software engineer based in Sydney, with a passion for adventure and innovation..
              </p>
              <div className={styles.buttonContainer}>
                <Button>
                  Say Hi!
                </Button>
              </div>
            </div>
            <img className={styles.curve} src="/bottom.png" alt="curve1" />
            <img className={styles.curve} src="/DarkTop.png" alt="curve1" />
          </div>

          <div id="bodyElements">
            <div id="aboutMe" className={styles.aboutme}>
              <h1 className={styles.aboutmeTitle}>
                About Me
              </h1>
              <AboutMe />
            </div>
            
            <div id="projects" className={styles.projects}>
              <h1 className={styles.projectsTitle}>
                Projects
              </h1>
              <Project
                title="CovInfo"
                subtitle="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta deserunt quia magni hic porro exercitationem eos ex ducimus molestias, nihil repellendus reprehenderit, corporis dignissimos nisi, iure deleniti laborum beatae ratione. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta deserunt quia magni hic porro exercitationem eos ex ducimus molestias, nihil repellendus reprehenderit, corporis dignissimos nisi, iure deleniti laborum beatae ratione."
                image1="/covidTop.png"
                image2="/covidMap.png"
                tech="Vue - Node - Heroku - Mapbox"
                className="image1"
              />
              <Project
                title="Sweet & Sweat"
                subtitle="This project was inspired by the current lockdown circumstances where people are isolated inside and might not have enough motivation to get out there and exercise! We created an activity-based dating app to light that fire in their hearts.<br>
                Features: <br>
                Challenges:"
                image1="/sweet.png"
                tech="React - Firebase - GA"
                className="sweet-sweat"
              />
              <Project
                title="AdoptMeow"
                subtitle="NSW COVID information"
                image1="/covidTop.png"
                tech="Rails - Ruby - PostgreSQL - S3(AWS) - Heroku"
                className="image1"
              />
            </div>
          </div>

        </div>
      </main>
      <footer className={styles.footer}>
        <p>Site made with React, Next.js and Vercel</p>
            <p>© 2021 Hessam Tabatabaee</p>
      </footer>
    </div>
  )
}
