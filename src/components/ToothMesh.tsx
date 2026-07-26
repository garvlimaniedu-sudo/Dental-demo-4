import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import { MeshTransmissionMaterial, Float } from '@react-three/drei'
import * as THREE from 'three'

/**
 * A stylised molar built from primitives rather than an imported asset —
 * a soft crown mass with four rounded roots. Abstract enough to avoid a
 * clip-art dental icon, literal enough to read instantly as a tooth.
 */
function ToothGeometry() {
  const group = useRef<THREE.Group>(null)

  const rootPositions = useMemo(
    () => [
      [-0.34, -0.78, -0.34],
      [0.34, -0.78, -0.34],
      [-0.3, -0.8, 0.3],
      [0.3, -0.8, 0.3],
    ] as [number, number, number][],
    [],
  )

  return (
    <group ref={group}>
      {/* Crown */}
      <mesh position={[0, 0.35, 0]} castShadow receiveShadow>
        <sphereGeometry args={[1, 64, 64]} />
        <MeshTransmissionMaterial
          samples={6}
          thickness={1.1}
          roughness={0.12}
          transmission={0.94}
          ior={1.4}
          chromaticAberration={0.02}
          anisotropy={0.15}
          distortion={0.05}
          distortionScale={0.2}
          temporalDistortion={0.03}
          clearcoat={1}
          clearcoatRoughness={0.08}
          attenuationColor="#bfe6df"
          attenuationDistance={0.6}
          color="#fbfefd"
        />
      </mesh>
      {/* Roots */}
      {rootPositions.map((pos, i) => (
        <mesh key={i} position={pos} rotation={[0, 0, 0]} castShadow>
          <coneGeometry args={[0.22, 1.1, 16]} />
          <MeshTransmissionMaterial
            samples={4}
            thickness={0.8}
            roughness={0.2}
            transmission={0.85}
            ior={1.35}
            clearcoat={0.6}
            attenuationColor="#d9efe9"
            attenuationDistance={0.5}
            color="#fdfefd"
          />
        </mesh>
      ))}
    </group>
  )
}

export default function ToothMesh({
  pointer,
}: {
  pointer: React.MutableRefObject<{ x: number; y: number }>
}) {
  const ref = useRef<THREE.Group>(null)
  const rotation = useRef({ x: 0.2, y: 0.4 })
  const velocity = useRef({ x: 0, y: 0.15 })

  useFrame((_, delta) => {
    if (!ref.current) return

    // Ambient auto-rotation with mouse-driven tilt and gentle inertia.
    const targetTiltX = pointer.current.y * 0.35
    const targetTiltY = pointer.current.x * 0.5

    velocity.current.y += (0.12 - velocity.current.y) * 0.02
    rotation.current.x += (targetTiltX - rotation.current.x) * 0.04
    rotation.current.y += velocity.current.y * delta + targetTiltY * 0.02

    ref.current.rotation.x = rotation.current.x
    ref.current.rotation.y = rotation.current.y
  })

  return (
    <Float speed={1.4} rotationIntensity={0.15} floatIntensity={0.6}>
      <group ref={ref} scale={1.15}>
        <ToothGeometry />
      </group>
    </Float>
  )
}
