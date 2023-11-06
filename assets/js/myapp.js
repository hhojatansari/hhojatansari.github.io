window.onload = function() {
  Particles.init({
    // normal options
    selector: '.background',
    color: '#ffe8cc',
    maxParticles: 450,
    speed: 0.1,
    sizeVariations: 4,
    // options for breakpoints
    responsive: [
      {
        breakpoint: 768,
        options: {
          maxParticles: 200,
          connectParticles: false
        }
      }, {
        breakpoint: 100,
        options: {
          maxParticles: 100,
          connectParticles: false
        }
      }, {
        breakpoint: 70,
        options: {
          maxParticles: 0 // disables particles.js
        }
      }
    ]
  });
};