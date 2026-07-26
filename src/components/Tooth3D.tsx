import { Suspense, useEffect, useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Environment, ContactShadows } from '@react-three/drei'
import ToothMesh from './ToothMesh'

export type ToothSlot = {
  /** CSS position of the tooth's container, in viewport percentages */
  top: string
  left: string
  scale: number
  opacity: number
}

const SLOTS: Record<string, ToothSlot> = {
  hero: { top: '46%', left: '78%', scale: 1, opacity: 1 },
  about: { top: '20%', left: '10%', scale: 0.6, opacity: 0.9 },
  technology: { top: '50%', left: '85%', scale: 0.85, opacity: 1 },
  gallery: { top: '85%', left: '12%', scale: 0.45, opacity: 0.6 },
  journey: { top: '15%', left: '90%', scale: 0.55, opacity: 0.85 },
  cta: { top: '30%', left: '50%', scale: 0.9, opacity: 0.95 },
  hidden: { top: '50%', left: '50%', scale: 0, opacity: 0 },
}

function Rig({ pointer }: { pointer: React.MutableRefObject<{ x: number; y: number }> }) {
  useFrame(({ camera }) => {
    camera.position.x += (pointer.current.x * 0.6 - camera.position.x) * 0.02
    camera.position.y += (-pointer.current.y * 0.4 + 0.2 - camera.position.y) * 0.02
    camera.lookAt(0, 0, 0)
  })
  return null
}

export default function Tooth3D({ activeSlot }: { activeSlot: string }) {
  const pointer = useRef({ x: 0, y: 0 })
  const [slot, setSlot] = useState<ToothSlot>(SLOTS.hero)

  useEffect(() => {
    setSlot(SLOTS[activeSlot] ?? SLOTS.hidden)
  }, [activeSlot])

  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1
      const y = (e.clientY / window.innerHeight) * 2 - 1
      pointer.current = { x, y }
    }
    window.addEventListener('pointermove', onMove, { passive: true })
    return () => window.removeEventListener('pointermove', onMove)
  }, [])

  return (
    <div
      aria-hidden="true"
      className="fixed z-30 pointer-events-none transition-[top,left,opacity] duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
      style={{
        top: slot.top,
        left: slot.left,
        width: '38vmin',
        height: '38vmin',
        transform: `translate(-50%, -50%) scale(${Math.max(slot.scale, 0.0001)})`,
        opacity: slot.opacity,
      }}
    >
      <Canvas
        dpr={[1, 1.8]}
        camera={{ position: [0, 0.2, 4.2], fov: 32 }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.6} />
        <directionalLight position={[3, 4, 2]} intensity={1.4} color="#eafbf6" />
        <directionalLight position={[-3, -2, -2]} intensity={0.4} color="#2c5f73" />
        <Suspense fallback={null}>
          <ToothMesh pointer={pointer} />
          <Environment preset="studio" />
          <ContactShadows
            position={[0, -1.6, 0]}
            opacity={0.35}
            scale={6}
            blur={2.8}
            far={2}
            color="#0f2436"
          />
        </Suspense>
        <Rig pointer={pointer} />
      </Canvas>
    </div>
  )
}
