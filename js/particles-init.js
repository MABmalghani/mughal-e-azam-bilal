document.addEventListener("DOMContentLoaded", function () {
  // Inject tsparticles container into the body
  const particleDiv = document.createElement("div");
  particleDiv.id = "tsparticles";
  particleDiv.style.position = "fixed";
  particleDiv.style.top = "0";
  particleDiv.style.left = "0";
  particleDiv.style.width = "100%";
  particleDiv.style.height = "100%";
  particleDiv.style.zIndex = "-1";
  document.body.prepend(particleDiv);

  // Load tsParticles config
  tsParticles.load("tsparticles", {
    background: {
      color: { value: "#ffffff" }
    },
    particles: {
      number: {
        value: 60,
        density: { enable: true, value_area: 800 }
      },
      color: { value: "#00acc1" },
      shape: { type: "circle" },
      opacity: { value: 0.3 },
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
        push: { quantity: 3 }
      }
    },
    detectRetina: true
  });
});
