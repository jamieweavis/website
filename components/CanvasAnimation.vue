<template>
<canvas ref="canvas"></canvas>
</template>

<script>
export default {
  name: "CanvasAnimation",
  mounted() {
    window.addEventListener("resize", onResize, false);

    const canvas = this.$refs.canvas;
    const context = canvas.getContext("2d");
    const particleContainer = [];
    const scale = window.devicePixelRatio;
    let spawnRate;

    class Particle {
      constructor() {
        this.x = getRandomX();
        this.y = getRandomY();
        this.xv = Math.random() * (0.3 - 0.1) + 0.1;
        this.yv = Math.random() * (0.5 - 0.3) + 0.3;
        this.life = 80;
        this.size = Math.random();
      }
      update(index) {
        if (this.life < 0) return particleContainer.splice(index, 1);
        this.y -= this.yv;
        this.x += this.xv;
        this.life--;
      }
    }

    function update() {
      context.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < spawnRate; i++)
        particleContainer.push(new Particle());

      particleContainer.forEach((particle, index) => {
        context.beginPath();
        context.arc(
          particle.x,
          particle.y,
          particle.size,
          0,
          2 * Math.PI,
          false
        );
        context.fillStyle = `rgba(255, 255, 255, ${particle.life / 100})`;
        context.fill();
        particle.update(index);
      });

      requestAnimationFrame(update);
    }

    function onResize() {
      let width = document.body.clientWidth;
      let height = canvas.offsetHeight;
      spawnRate = Math.ceil(width / height) / 2;

      canvas.style.width = width + "px";
      canvas.style.height = height + "px";
      canvas.width = width * scale;
      canvas.height = height * scale;
      context.scale(scale, scale);
    }

    function getRandomX() {
      return Math.random() * canvas.width / scale;
    }
    function getRandomY() {
      return Math.random() * canvas.height / scale;
    }

    onResize();
    update();
  }
};
</script>
