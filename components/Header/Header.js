import { Canvas } from "@react-three/fiber";
import Box from "../3D-dice/3D-dice";

import styles from './style.module.scss';
import NavItem from '../NavItem/NavItem';

const Header = () => {
    return (
        <div className={styles.header}>
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
                    <li><NavItem name="About"/></li>
                    <li><NavItem name="Projects"/></li>
                    <li><NavItem name="Resume"/></li>
                </ul>
            </div>
        </div>
    );
}

export default Header;