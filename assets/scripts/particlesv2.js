export default {
  particles: {
    number: { value: 400, density: { enable: true, value_area: 800 } },
    color: { value: '#c0c0c0' },
    shape: {
      type: 'circle',
      stroke: { width: 0, color: '#c0c0c0' },
      polygon: { nb_sides: 5 },
    },
    size: {
      value: 1.5,
      random: true,
    },
    line_linked: {
      enable: false,
      distance: 150,
      color: '#999999',
      opacity: 0,
      width: 0,
    },
    move: {
      enable: true,
      speed: 1,
      direction: 'none',
      random: true,
      straight: false,
      out_mode: 'bounce',
      bounce: false,
      attract: { enable: false, rotateX: 600, rotateY: 600 },
    },
  },

  retina_detect: true,
}
