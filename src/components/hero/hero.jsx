import React, { useEffect, useRef } from 'react';
import './Hero.css';

const Hero = () => {
  const canvasRef = useRef(null);

  // Matrix-style code rain
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    const resize = () => {
      canvas.width  = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const chars = '01アイウエオカキクケコサシスセソタチ{}[]<>/\\=+';
    const fontSize = 13;
    let drops = Array.from({ length: Math.floor(canvas.width / fontSize) }, () => Math.random() * -50);

    const draw = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.font = `${fontSize}px monospace`;

      drops.forEach((y, i) => {
        const char = chars[Math.floor(Math.random() * chars.length)];
        const alpha = Math.max(0, 1 - (y / (canvas.height / fontSize)) * 0.6);
        ctx.fillStyle = `rgba(0, 229, 160, ${alpha * 0.8})`;
        ctx.fillText(char, i * fontSize, y * fontSize);

        if (y * fontSize > canvas.height && Math.random() > 0.975) drops[i] = 0;
        drops[i] += 0.4;
      });
    };

    const id = setInterval(draw, 40);
    return () => {
      clearInterval(id);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <section className="hero">
      {/* Animated code rain */}
      <canvas ref={canvasRef} />

      {/* Ambient blobs */}
      <div className="blob blob-1" />
      <div className="blob blob-2" />
      <div className="blob blob-3" />

      <div className="hero-content">
        {/* Tag */}
        <span className="hero-tag">Agencia de Desarrollo Web</span>

        {/* Title */}
        <h1 className="hero-title">
          <span className="word-alesso">ALESSO</span>
          <span className="word-code"> CODE</span>
        </h1>

        <div className="hero-divider" />

        {/* Claim */}
        <div className="hero-footer">
          <p className="hero-subtitle">No creamos webs.</p>
          <p className="hero-claim">
            Generamos <span className="highlight">clientes.</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;