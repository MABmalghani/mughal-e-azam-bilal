document.addEventListener("DOMContentLoaded", function () {
  const tsDiv = document.createElement("div");
  tsDiv.id = "tsparticles";
  document.body.appendChild(tsDiv); // Add as last element inside <body>

  tsParticles.load("tsparticles", {
    background: {
      color: { value: "#ffffff" }
    },
    particles: {
      number: {
        value: 50,
        density: { enable: true, value_area: 800 }
      },
      color: { value: "#00acc1" },
      shape: { type: "circle" },
      opacity: { value: 0.5 },
      size: { value: 4, random: true },
      move: {
        enable: true,
        speed: 1,
        direction: "none",
        out_mode: "bounce"
      }
    },
    interactivity: {
      events: {
        onhover: { enable: true, mode: "repulse" },
        onclick: { enable: true, mode: "push" }
      },
      modes: {
        repulse: { distance: 100 },
        push: { quantity: 4 }
      }
    },
    detectRetina: true
  });
});
