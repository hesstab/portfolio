import { Canvas } from "@react-three/fiber";
import Box from "../3D-dice/3D-dice";

import styles from './style.module.scss';
import NavItem from '../NavItem/NavItem';
import { useEffect, useState } from "react";

const Header = () => {
    const [isObserved, setIsObserved] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(e => {
                setIsObserved(e.isIntersecting);
            });
        }, { threshold: 0.2 });

        observer.observe(document.getElementById('bodyElements'));
    }, []);

    const openPdf = () => {
        window.open('/Hessam-resume-sep21.pdf', "_blank");
    }

    return (
        <div className={`${styles.header} ${isObserved ? styles.darkNavBar : null}`}>
            <div className={styles.inner}>
                <ul>
                    <li className={styles.canvas}>
                        <button 
                            onClick={() => document.getElementById('main-top').scrollIntoView({ behavior: 'smooth' })}
                            className={styles.diceButton}
                        >
                            <Canvas style={{ height: 50, width: 110 }}>
                                <ambientLight intensity={0.5} />
                                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
                                <pointLight position={[-10, -10, -10]} />
                                <Box position={[-2, 0, 1]} ratio={0.01} />
                                <Box position={[2.5, -1, 0]} ratio={0.015} />
                            </Canvas>
                        </button>
                    </li>
                    <li>
                        <NavItem 
                            onClick={ () => document.getElementById('aboutMe').scrollIntoView({ behavior: 'smooth' }) } 
                            name="About Me"
                        />
                    </li>
                    <li>
                        <NavItem
                            onClick={ () => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' }) }
                            name="Projects"
                        />
                    </li>
                    <li>
                        <NavItem 
                            onClick={ () => document.getElementById('footer').scrollIntoView({ behavior: 'smooth' }) }
                            name="Contact Me"
                        />
                    </li>
                    <li>
                        <NavItem 
                            onClick={openPdf} 
                            name="Resume"
                            id="resumeButton"
                        />
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Header;