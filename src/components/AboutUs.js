// AboutUs.js
import React, { useEffect } from 'react';
import './AboutUs.css';  // Create a CSS file for About Us page styling

const AboutUs = () => {
  useEffect(() => {
    // Set up canvas and context for animation
    const canvas = document.getElementById('backgroundCanvas');
    const ctx = canvas.getContext('2d');
    const particles = [];
    const particleCount = 100;
    const maxLineDistance = 150;

    // Resize canvas to full screen
    function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    // Particle class
    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.speedX = (Math.random() - 0.5) * 1.5;
        this.speedY = (Math.random() - 0.5) * 1.5;
        this.size = Math.random() * 3 + 1;
      }

      // Update position and bounce off edges
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
        if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
      }

      // Draw particle
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = '#00ffff';
        ctx.fill();
      }
    }

    // Create particles
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    // Animate particles and draw lines
    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p, index) => {
        p.update();
        p.draw();

        // Draw lines between nearby particles
        for (let j = index + 1; j < particles.length; j++) {
          const distance = Math.hypot(particles[j].x - p.x, particles[j].y - p.y);
          if (distance < maxLineDistance) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(0, 255, 255, ${1 - distance / maxLineDistance})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      });
      requestAnimationFrame(animate);
    }

    animate();
  }, []);

  return (
    <div className="about-us">
      <div className="content">
        <h1>ABOUT US</h1>
        <hr />
        <p className="subheading">
          Welcome to <span className="highlight1">InSync</span><span className="highlight2">@PESU</span>, your hub for connecting and engaging with a vibrant community of clubs and peers.
          Here, you'll find opportunities for recruitment, updates on events, and a space to foster collaboration and creativity.
          Join us in building camaraderie among students!
        </p>
      </div>
      <canvas id="backgroundCanvas"></canvas> {/* The Canvas for the background animation */}
    </div>
  );
};

export default AboutUs;
