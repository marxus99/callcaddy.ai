import { useCallback } from 'react'
import Particles from 'react-tsparticles'
import { loadFull } from 'tsparticles'

export default function ParticlesBackground() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const particlesInit = useCallback(async (engine: any) => {
    await loadFull(engine)
  }, [])

  return (
    <Particles
      id="bg"
      init={particlesInit}
      className="animated-gradient-background"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: -1,
        pointerEvents: 'none'
      }}
      options={{
        fullScreen: { enable: false },
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
          },
          modes: {
            repulse: { distance: 60, duration: 0.4 }
          }
        }
      }}
    />
  )
}
