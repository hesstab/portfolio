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

    return (
        <div className={`${styles.header} ${isObserved ? styles.darkNavBar : null}`}>
            <div className={styles.inner}>
                <ul>
                    <li className={styles.canvas}>
                        <Canvas style={{ height: 50, width: 100 }}>
                            <ambientLight intensity={0.5} />
                            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
                            <pointLight position={[-10, -10, -10]} />
                            <Box position={[-2, 0, 1]} ratio={0.01} />
                            <Box position={[2.5, -1, 0]} ratio={0.015} />
                        </Canvas>
                    </li>
                    <li>
                        <NavItem elementId="aboutMe" name="About Me" />
                    </li>
                    <li>
                        <NavItem elementId="projects" name="Projects"/>
                    </li>
                    <li>
                        <NavItem name="Resume"/>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Header;