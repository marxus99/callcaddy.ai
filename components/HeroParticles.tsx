import { useCallback } from 'react'
import Particles from 'react-tsparticles'
import { loadFull } from 'tsparticles'

export default function HeroParticles() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const particlesInit = useCallback(async (engine: any) => {
    await loadFull(engine)
  }, [])

  return (
    <Particles
      id="heroParticles"
      init={particlesInit}
      className="pointer-events-none absolute inset-0 z-0 w-full h-full"
      options={{
        fpsLimit: 30,
        detectRetina: true,
        fullScreen: { enable: false },
        particles: {
          number: { value: 50 },
          color: { value: '#ffffff' },
          opacity: { value: { min: 0.1, max: 0.2 } },
          shape: { type: 'circle' },
          size: { value: { min: 2, max: 4 } },
          move: {
            enable: true,
            speed: 0.2,
            direction: 'none',
            outModes: { default: 'out' }
          },
          links: { enable: false }
        },
        interactivity: {
          events: {
            onHover: { enable: false },
            resize: true
          }
        }
      }}
    />
  )
}
