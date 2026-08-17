"use client";

import { useEffect, useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import gsap from "gsap";

const LAYER_COUNT = 4;
const REST_GAP = 0.85;
const START_GAP = 1.9;
const PANEL_WIDTH = 3.1;
const PANEL_HEIGHT = 1.9;
const PANEL_DEPTH = 0.06;

export default function LayeredPanels() {
  const settleGroupRef = useRef<THREE.Group>(null);
  const tiltGroupRef = useRef<THREE.Group>(null);
  const panelRefs = useRef<(THREE.Mesh | null)[]>([]);

  const edgesGeometry = useMemo(
    () => new THREE.EdgesGeometry(new THREE.BoxGeometry(PANEL_WIDTH, PANEL_HEIGHT, PANEL_DEPTH)),
    []
  );

  const restY = useMemo(
    () => Array.from({ length: LAYER_COUNT }, (_, i) => ((LAYER_COUNT - 1) / 2 - i) * REST_GAP),
    []
  );

  // One-time entrance: the whole stack scales/rotates in, panels compress into their resting gap
  useEffect(() => {
    if (settleGroupRef.current) {
      gsap.fromTo(
        settleGroupRef.current.scale,
        { x: 0.8, y: 0.8, z: 0.8 },
        { x: 1, y: 1, z: 1, duration: 1.3, ease: "power3.out" }
      );
      gsap.fromTo(
        settleGroupRef.current.rotation,
        { x: -0.55, y: -0.85 },
        { x: -0.32, y: -0.42, duration: 1.5, ease: "power3.out" }
      );
    }
    panelRefs.current.forEach((mesh, i) => {
      if (!mesh) return;
      const startY = ((LAYER_COUNT - 1) / 2 - i) * START_GAP;
      gsap.fromTo(
        mesh.position,
        { y: startY },
        { y: restY[i], duration: 1.4, ease: "power3.out", delay: 0.06 * i }
      );
    });
  }, [restY]);

  // Continuous pointer tilt — isolated in its own group so it never fights the GSAP entrance
  useFrame((state) => {
    if (!tiltGroupRef.current) return;
    const targetX = state.pointer.y * 0.12;
    const targetY = state.pointer.x * 0.16;
    tiltGroupRef.current.rotation.x += (targetX - tiltGroupRef.current.rotation.x) * 0.05;
    tiltGroupRef.current.rotation.y += (targetY - tiltGroupRef.current.rotation.y) * 0.05;
  });

  return (
    <group ref={settleGroupRef} rotation={[-0.32, -0.42, 0]}>
      <group ref={tiltGroupRef}>
        {restY.map((y, i) => (
          <group key={i}>
            <mesh
              ref={(el) => { panelRefs.current[i] = el; }}
              position={[0, y, 0]}
            >
              <boxGeometry args={[PANEL_WIDTH, PANEL_HEIGHT, PANEL_DEPTH]} />
              <meshPhysicalMaterial
                  color="#0a0a0a"
                  metalness={0.35}
                  roughness={0.45}
                  transparent
                  opacity={0.85}
                  transmission={0.1}
                  thickness={0.4}
                  clearcoat={0.3}
                />
            </mesh>
            <lineSegments geometry={edgesGeometry} position={[0, y, PANEL_DEPTH / 2 + 0.002]}>
              <lineBasicMaterial color="#10b981" transparent opacity={0.55} />
            </lineSegments>
          </group>
        ))}
      </group>
    </group>
  );
}