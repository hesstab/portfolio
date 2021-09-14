import React, { useRef, useState, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

// import dice from "../../public/befunky.jpg";

const Box = (props) => {
    // This reference will give us direct access to the mesh
    const mesh = useRef();

    // Set up state for the hovered and active state 
    const [active, setActive] = useState(false);

    // Rotate mesh every frame, this is outside of React without overhead
    useFrame(() => {
        mesh.current.rotation.y += props.ratio;
        mesh.current.rotation.x += props.ratio;
    });

    const texture = useMemo(() => new THREE.TextureLoader().load('/dice.png'), []);

    return (
        <mesh
            {...props}
            ref={mesh}
            scale={active ? [2, 2, 2] : [3, 3, 3]}
            onClick={(e) => setActive(!active)}
        >
            <boxBufferGeometry args={[1, 1, 1]} />
            <meshBasicMaterial attach="material" transparent side={THREE.DoubleSide}>
                <primitive attach="map" object={texture} />
            </meshBasicMaterial>
        </mesh>
    );
}

export default Box;
