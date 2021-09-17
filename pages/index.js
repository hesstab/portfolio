/* eslint-disable react/no-unescaped-entities */
import Header from '../components/Header/Header'
import AboutMe from '../components/AboutMe/AboutMe';
import styles from '../styles/Home.module.css'
import Button from '../components/Button/Button';
import Project from '../components/Project/Project';

export default function Home() {
  return (
    <div id="main-top">
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
                  GET IN TOUCH
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
                <hr/>
              </h1>
              <AboutMe />
            </div>
            
            <div id="projects" className={styles.projects}>
              <h1 className={styles.projectsTitle}>
                Projects
                <hr/>
              </h1>
              <Project
                title="CovInfo"
                subtitle="NSW COVID information website  |  Sep 2021"
                description="COVID infographic app that uses government APIs to visualise NSW COVID info and a map that color codes suburbs based on infected cases."
                image1="/covidTop.png"
                image2="/covidMap.png"
                tech="Vue - Node - Express - Heroku - Mapbox"
                className="image1"
                urlDemo="https://cov-info-app.herokuapp.com/"
                urlGit="https://github.com/MoAbyari/CovInfo"
              />
              <Project
                title="Sweet & Sweat"
                subtitle="Activity-based dating web app  |  August 2021"
                description="This project was inspired by the current lockdown circumstances where people are isolated inside and might not have enough motivation to get out there and exercise! We created an activity-based dating app to light that fire in their hearts."
                image1="/sweet-sweat.png"
                tech="React - Firebase - GA"
                className="sweet-sweat"
                urlDemo="https://sweet-sweat.web.app/login"
                urlGit="https://github.com/hesstab/Sweet-Sweat"
              />
              <Project
                title="AdoptMeow"
                subtitle="A platform to find cats for adoption  |  July 2021"
                description="An MVC designed project that allow users to have profiles and browse or list cats for adoption."
                image1="/adoptMeow.png"
                tech="Ruby on Rails - PostgreSQL - S3(AWS) - Heroku"
                className="adoptMeow"
                urlDemo="https://adoptme-project-hessam.herokuapp.com/"
                urlGit="https://github.com/hesstab/AdoptMoew"
              />
            </div>
          </div>

        </div>
      </main>
      <footer id="footer" className={styles.footer}>
        <p className={styles.footerParagraph}>Site made with React, Next.js and Vercel</p>
        <p className={styles.footerParagraph}>hessam.tabatabaee@gmail.com</p>
            <p>© 2021 Hessam Tabatabaee</p>
      </footer>
    </div>
  )
}
