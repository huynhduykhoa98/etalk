/* -----------------------------------------------
/* How to use? : Check the GitHub README
/* ----------------------------------------------- */

/* To load a config file (particles.json) you need to host this demo (MAMP/WAMP/local)... */
/*
particlesJS.load('particles-js', 'particles.json', function() {
  console.log('particles.js loaded - callback');
});
*/

/* Otherwise just put the config content (json): */

particlesJS('particles-js',
   {
"particles": {
  "number": {
    "value": 72,
    "density": {
      "enable": true,
      "value_area": 800
    }
  },
  "color": {
    "value": "#ff7700"
  },
   
  "shape": {
    "type": "circle",
    "stroke": {
      "width": 9,
      "color": "#ff7700"
    },
    "polygon": {
      "nb_sides": 6
    },
    "image": {
      "src": "",
      "width": 130,
      "height": 100
    }
  },
  "opacity": {
    "value": 0.4890406785639845,
    "random": false,
    "anim": {
      "enable": false,
      "speed": 0.9744926547616141,
      "opacity_min": 0.1,
      "sync": false
    }
  },
  "size": {
    "value": 4.008530152163807,
    "random": true,
    "anim": {
      "enable": false,
      "speed": 24.36231636904035,
      "size_min": 4.87246327380807,
      "sync": false
    }
  },
  "line_linked": {
    "enable": true,
    "distance": 368.78477399907024,
    "color": "#ff7700",
    "opacity": 0.4,
    "width": 1
  },
  "move": {
    "enable": true,
    "speed": 4.810236182596568,
    "direction": "none",
    "random": false,
    "straight": false,
    "out_mode": "out",
    "bounce": false,
    "attract": {
      "enable": false,
      "rotateX": 600,
      "rotateY": 1200
    }
  }
},
"interactivity": {
  "detect_on": "canvas",
  "events": {
    "onhover": {
      "enable": true,
      "mode": "grab"
    },
    "onclick": {
      "enable": true,
      "mode": "remove"
    },
    "resize": true
  },
  "modes": {
    "grab": {
      "distance": 280.1666382439641,
      "line_linked": {
        "opacity": 1
      }
    },
    "bubble": {
      "distance": 311.6883116883117,
      "size": 113.69080972218832,
      "duration": 2,
      "opacity": 8,
      "speed": 3
    },
    "repulse": {
      "distance": 200,
      "duration": 0.4
    },
    "push": {
      "particles_nb": 4
    },
    "remove": {
      "particles_nb": 2
    }
  }
},
"retina_detect": true
  }

);