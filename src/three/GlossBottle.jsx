import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import { RoundedBox, Cylinder, Lightformer, Environment, ContactShadows, Float } from '@react-three/drei'
import * as THREE from 'three'

// Procedural lip-gloss bottle: glass tube + colored liquid + wand cap.
// No external model files needed — built entirely from primitives.
export default function GlossBottle({ color = '#c46a6a', autoRotate = true, wobble = true }) {
  const group = useRef()
  const liquidColor = useMemo(() => new THREE.Color(color), [color])

  useFrame((state, delta) => {
    if (!group.current) return
    if (autoRotate) group.current.rotation.y += delta * 0.35
    if (wobble) {
      group.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.6) * 0.03
      group.current.position.y = Math.sin(state.clock.elapsedTime * 0.9) * 0.08
    }
  })

  return (
    <Float speed={1.4} rotationIntensity={0.15} floatIntensity={0.5}>
      <group ref={group} position={[0, -0.2, 0]}>
        {/* glass body */}
        <RoundedBox args={[1.05, 2.6, 0.62]} radius={0.14} smoothness={6} position={[0, 0, 0]}>
          <meshPhysicalMaterial
            color="#ffffff"
            transparent
            opacity={0.22}
            roughness={0.05}
            metalness={0}
            transmission={0.9}
            thickness={0.6}
            ior={1.4}
            clearcoat={1}
          />
        </RoundedBox>

        {/* liquid fill */}
        <RoundedBox args={[0.86, 1.9, 0.44]} radius={0.1} smoothness={6} position={[0, -0.28, 0]}>
          <meshPhysicalMaterial
            color={liquidColor}
            roughness={0.25}
            metalness={0.05}
            transmission={0.35}
            thickness={0.5}
            clearcoat={0.6}
          />
        </RoundedBox>

        {/* neck */}
        <Cylinder args={[0.16, 0.2, 0.28, 24]} position={[0, 1.44, 0]}>
          <meshPhysicalMaterial color="#ffffff" transparent opacity={0.3} roughness={0.1} transmission={0.85} />
        </Cylinder>

        {/* cap */}
        <Cylinder args={[0.27, 0.24, 1.05, 32]} position={[0, 2.15, 0]}>
          <meshStandardMaterial color="#f2c6cf" roughness={0.35} metalness={0.15} />
        </Cylinder>
        <Cylinder args={[0.275, 0.275, 0.08, 32]} position={[0, 1.66, 0]}>
          <meshStandardMaterial color="#d9a8ac" roughness={0.4} />
        </Cylinder>

        {/* gold monogram plaque */}
        <mesh position={[0, 0.55, 0.325]}>
          <planeGeometry args={[0.4, 0.4]} />
          <meshStandardMaterial color="#ad8a4c" roughness={0.3} metalness={0.6} transparent opacity={0.9} />
        </mesh>
      </group>
    </Float>
  )
}

export function BottleStage({ color, autoRotate = true, wobble = true, showFloor = true }) {
  return (
    <>
      <ambientLight intensity={0.6} />
      <directionalLight position={[3, 4, 2]} intensity={1.4} />
      <directionalLight position={[-3, 2, -2]} intensity={0.4} color="#f2c6cf" />
      <GlossBottle color={color} autoRotate={autoRotate} wobble={wobble} />
      {showFloor && (
        <ContactShadows position={[0, -1.55, 0]} opacity={0.35} scale={6} blur={2.4} far={2} />
      )}
      {/* Procedural environment (no external HDRI fetch) so lighting works fully offline */}
      <Environment resolution={256}>
        <Lightformer intensity={2} color="#fbf5ec" position={[0, 4, 0]} scale={[6, 6, 1]} />
        <Lightformer intensity={1.2} color="#e7b7ae" position={[-4, 1, 2]} scale={[3, 3, 1]} />
        <Lightformer intensity={1.4} color="#ad8a4c" position={[4, 0, 2]} scale={[3, 3, 1]} />
      </Environment>
    </>
  )
}
