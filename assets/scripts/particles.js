export default {
  particles: {
    number: { value: 200, density: { enable: true, value_area: 800 } },
    color: { value: '#c0c0c0' },
    shape: {
      type: 'circle',
      stroke: { width: 0, color: '#c0c0c0' },
      polygon: { nb_sides: 5 },
    },
    opacity: {
      value: 1,
      random: true,
      anim: { enable: true, speed: 1, opacity_min: 0, sync: false },
    },
    size: {
      value: 4,
      random: true,
      anim: { enable: true, speed: 4, size_min: 0.3, sync: true },
    },
    line_linked: {
      enable: false,
      distance: 150,
      color: '#999999',
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 1,
      direction: 'none',
      random: true,
      straight: false,
      out_mode: 'out',
      bounce: false,
      attract: { enable: false, rotateX: 600, rotateY: 600 },
    },
  },
  interactivity: {
    detect_on: 'window',
    events: {
      onhover: { enable: true, mode: 'grab' },
      onclick: { enable: false, mode: 'bubble' },
      resize: true,
    },
    modes: {
      grab: { distance: 250, line_linked: { opacity: 1 } },
      bubble: { distance: 250, size: 0, duration: 3, opacity: 0, speed: 3 },
      repulse: { distance: 400, duration: 0.4 },
      push: { particles_nb: 4 },
      remove: { particles_nb: 2 },
    },
  },
  retina_detect: true,
}
