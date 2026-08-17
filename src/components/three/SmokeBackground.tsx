"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

const vertexShader = `
  varying vec2 vUv;

  void main() {
    vUv = uv;

    gl_Position = vec4(position, 1.0);
  }
`;

const fragmentShader = `
  precision highp float;

  varying vec2 vUv;

  uniform float uTime;

  float hash(vec2 p) {
    return fract(
      sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123
    );
  }

  float noise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);

    f = f * f * (3.0 - 2.0 * f);

    float a = hash(i);
    float b = hash(i + vec2(1.0, 0.0));
    float c = hash(i + vec2(0.0, 1.0));
    float d = hash(i + vec2(1.0, 1.0));

    return mix(
      mix(a, b, f.x),
      mix(c, d, f.x),
      f.y
    );
  }

  float fbm(vec2 p) {
    float value = 0.0;
    float amplitude = 0.5;

    for (int i = 0; i < 5; i++) {
      value += noise(p) * amplitude;
      p *= 2.0;
      amplitude *= 0.5;
    }

    return value;
  }

  void main() {

    vec2 uv = vUv;

    // Keep the smoke slightly stretched horizontally.
    vec2 p = uv * vec2(2.2, 1.25);

    // Slow natural movement.
    p.x += uTime * 0.025;
    p.y += sin(uTime * 0.18) * 0.08;

    // --------------------------------------------------
    // DOMAIN WARPING
    // --------------------------------------------------

    float n1 = fbm(p * 1.4);

    vec2 warp = vec2(
      fbm(p * 1.7 + n1),
      fbm(p * 1.7 - n1)
    );

    p += (warp - 0.5) * 0.55;

    float smoke = fbm(p * 2.2);

    float detail = fbm(
      p * 4.5 +
      vec2(uTime * 0.01, -uTime * 0.008)
    );

    smoke = mix(smoke, detail, 0.12);

    // --------------------------------------------------
    // SOFT ATMOSPHERE
    // --------------------------------------------------

    float centerGlow = 1.0 - distance(
      uv,
      vec2(0.55, 0.48)
    );

    centerGlow = smoothstep(
      0.0,
      0.85,
      centerGlow
    );

    float alpha = smoothstep(
      0.56,
      0.78,
      smoke
    );

    alpha *= 0.12;
    alpha *= 0.35 + centerGlow * 0.65;

    // Very subtle cool-white smoke.
    vec3 smokeColor = vec3(
      0.24,
      0.26,
      0.30
    );

    // Slight highlight inside the smoke.
    smokeColor += vec3(0.06) * smoke;

    gl_FragColor = vec4(
      smokeColor,
      alpha
    );
  }
`;

function SmokePlane() {
  const materialRef = useRef<THREE.ShaderMaterial>(null);

  useFrame((state) => {
    if (!materialRef.current) return;

    materialRef.current.uniforms.uTime.value =
      state.clock.elapsedTime;
  });

  return (
    <mesh>
      <planeGeometry args={[2, 2]} />

      <shaderMaterial
        ref={materialRef}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        transparent
        depthWrite={false}
        uniforms={{
          uTime: { value: 0 },
        }}
      />
    </mesh>
  );
}

export default function SmokeBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0">
      <Canvas
        camera={{
          position: [0, 0, 1],
          fov: 75,
        }}
        dpr={[1, 1.5]}
        gl={{
          antialias: false,
          alpha: true,
          powerPreference: "high-performance",
        }}
      >
        <SmokePlane />
      </Canvas>
    </div>
  );
}