import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { BottleStage } from '../three/GlossBottle.jsx'
import ErrorBoundary from './ErrorBoundary.jsx'
import GlossVial from './GlossVial.jsx'

function Fallback({ color }) {
  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <GlossVial color={color} height={220} />
    </div>
  )
}

export default function Bottle3D({
  color = '#c46a6a',
  height = '100%',
  interactive = true,
  autoRotate = true,
  wobble = true,
}) {
  return (
    <div style={{ width: '100%', height, touchAction: 'none' }}>
      <ErrorBoundary fallback={<Fallback color={color} />}>
        <Canvas
          dpr={[1, 1.8]}
          camera={{ position: [0, 0.4, 5.2], fov: 32 }}
          gl={{ antialias: true, alpha: true }}
          onCreated={({ gl }) => {
            gl.domElement.addEventListener('webglcontextlost', (e) => e.preventDefault())
          }}
        >
          <Suspense fallback={null}>
            <BottleStage color={color} autoRotate={autoRotate} wobble={wobble} />
          </Suspense>
          {interactive && (
            <OrbitControls
              enablePan={false}
              enableZoom={false}
              minPolarAngle={Math.PI / 2.6}
              maxPolarAngle={Math.PI / 1.7}
            />
          )}
        </Canvas>
      </ErrorBoundary>
    </div>
  )
}
