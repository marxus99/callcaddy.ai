import { useCallback } from 'react'
import Particles from 'react-tsparticles'
import type { Engine } from 'tsparticles-engine'
import { loadFull } from 'tsparticles'

export default function ParticlesBackground() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine)
  }, [])

  return (
    <Particles
      id="bg"
      init={particlesInit}
      style={{ background: 'radial-gradient(circle, #000, #1a1a1a)', pointerEvents: 'none' }}
      options={{
        fullScreen: { enable: true, zIndex: -1 },
        particles: {
          number: { value: 80, density: { enable: true, area: 800 } },
          color: { value: '#ffffff' },
          opacity: { value: 0.3 },
          size: { value: 2 },
          move: { enable: true, speed: 0.5 },
          links: { enable: false }
        },
        interactivity: {
          events: {
            onHover: { enable: true, mode: 'repulse' },
            resize: true
          }
        }
      }}
    />
  )
}
