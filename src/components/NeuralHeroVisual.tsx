import React, { useEffect, useRef } from 'react';

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  baseRadius: number;
  pulseSpeed: number;
  pulsePhase: number;
  layer: number;
}

export default function NeuralHeroVisual() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const mouseRef = useRef<{ x: number; y: number; active: boolean }>({ x: 0, y: 0, active: false });

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = container.clientWidth);
    let height = (canvas.height = container.clientHeight);

    const handleResize = () => {
      if (!container || !canvas) return;
      width = canvas.width = container.clientWidth;
      height = canvas.height = container.clientHeight;
      initNodes();
    };

    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(container);

    let nodes: Node[] = [];
    const layers = 4;
    const nodesPerLayer = [4, 6, 6, 4];

    function initNodes() {
      nodes = [];
      const paddingX = width * 0.15;
      const usableWidth = width - paddingX * 2;
      const layerSpacing = usableWidth / (layers - 1);

      for (let l = 0; l < layers; l++) {
        const count = nodesPerLayer[l];
        const paddingY = height * 0.12;
        const usableHeight = height - paddingY * 2;
        const nodeSpacing = usableHeight / (count - 1 || 1);

        for (let i = 0; i < count; i++) {
          const baseX = paddingX + l * layerSpacing;
          const baseY = paddingY + i * nodeSpacing;
          nodes.push({
            x: baseX + (Math.random() - 0.5) * 20,
            y: baseY + (Math.random() - 0.5) * 20,
            vx: (Math.random() - 0.5) * 0.4,
            vy: (Math.random() - 0.5) * 0.4,
            radius: 3.5,
            baseRadius: 3 + Math.random() * 2,
            pulseSpeed: 0.02 + Math.random() * 0.02,
            pulsePhase: Math.random() * Math.PI * 2,
            layer: l,
          });
        }
      }
    }

    initNodes();

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current.x = e.clientX - rect.left;
      mouseRef.current.y = e.clientY - rect.top;
      mouseRef.current.active = true;
    };

    const handleMouseLeave = () => {
      mouseRef.current.active = false;
    };

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    // Subtle data stream pulses along connections
    interface Pulse {
      fromIndex: number;
      toIndex: number;
      progress: number;
      speed: number;
    }
    const pulses: Pulse[] = [];

    let frame = 0;

    const render = () => {
      frame++;
      ctx.clearRect(0, 0, width, height);

      // Randomly spawn pulses between connected layers
      if (frame % 24 === 0 && pulses.length < 8) {
        const sourceLayer = Math.floor(Math.random() * (layers - 1));
        const sourceNodes = nodes
          .map((n, idx) => ({ n, idx }))
          .filter((item) => item.n.layer === sourceLayer);
        const targetNodes = nodes
          .map((n, idx) => ({ n, idx }))
          .filter((item) => item.n.layer === sourceLayer + 1);

        if (sourceNodes.length && targetNodes.length) {
          const from = sourceNodes[Math.floor(Math.random() * sourceNodes.length)].idx;
          const to = targetNodes[Math.floor(Math.random() * targetNodes.length)].idx;
          pulses.push({
            fromIndex: from,
            toIndex: to,
            progress: 0,
            speed: 0.015 + Math.random() * 0.01,
          });
        }
      }

      // Draw Connections
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const nodeA = nodes[i];
          const nodeB = nodes[j];

          // Connect adjacent layers or close proximity
          if (nodeB.layer === nodeA.layer + 1 || (nodeA.layer === nodeB.layer && Math.hypot(nodeA.x - nodeB.x, nodeA.y - nodeB.y) < 70)) {
            const dist = Math.hypot(nodeA.x - nodeB.x, nodeA.y - nodeB.y);
            const maxDist = width * 0.38;
            if (dist < maxDist) {
              const alpha = (1 - dist / maxDist) * 0.28;
              const isGold =
                document.documentElement.classList.contains('theme-gold') ||
                document.documentElement.classList.contains('light');
              ctx.beginPath();
              ctx.moveTo(nodeA.x, nodeA.y);
              ctx.lineTo(nodeB.x, nodeB.y);
              ctx.strokeStyle = isGold
                ? `rgba(245, 158, 11, ${alpha * 1.5})`
                : `rgba(56, 189, 248, ${alpha})`;
              ctx.lineWidth = 1;
              ctx.stroke();
            }
          }
        }
      }

      // Draw and advance pulses
      for (let p = pulses.length - 1; p >= 0; p--) {
        const pulse = pulses[p];
        pulse.progress += pulse.speed;

        if (pulse.progress >= 1) {
          pulses.splice(p, 1);
          continue;
        }

        const nodeA = nodes[pulse.fromIndex];
        const nodeB = nodes[pulse.toIndex];
        if (!nodeA || !nodeB) continue;

        const currentX = nodeA.x + (nodeB.x - nodeA.x) * pulse.progress;
        const currentY = nodeA.y + (nodeB.y - nodeA.y) * pulse.progress;

        const isGold =
          document.documentElement.classList.contains('theme-gold') ||
          document.documentElement.classList.contains('light');

        ctx.beginPath();
        ctx.arc(currentX, currentY, 2.5, 0, Math.PI * 2);
        ctx.fillStyle = isGold ? 'rgba(254, 240, 138, 0.95)' : 'rgba(129, 140, 248, 0.9)';
        ctx.shadowColor = isGold ? 'rgba(245, 158, 11, 0.9)' : 'rgba(56, 189, 248, 0.8)';
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      // Update and draw nodes
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];

        // Idle movement
        node.x += node.vx;
        node.y += node.vy;

        // Bounding
        if (node.x < 15 || node.x > width - 15) node.vx *= -1;
        if (node.y < 15 || node.y > height - 15) node.vy *= -1;

        // Subtle mouse repulsion / attraction
        if (mouseRef.current.active) {
          const dx = mouseRef.current.x - node.x;
          const dy = mouseRef.current.y - node.y;
          const dist = Math.hypot(dx, dy);
          if (dist < 100 && dist > 1) {
            const force = ((100 - dist) / 100) * 0.35;
            node.x += (dx / dist) * force;
            node.y += (dy / dist) * force;
          }
        }

        // Pulsing radius
        node.pulsePhase += node.pulseSpeed;
        const currentRadius = node.baseRadius + Math.sin(node.pulsePhase) * 1.2;

        const isGold =
          document.documentElement.classList.contains('theme-gold') ||
          document.documentElement.classList.contains('light');

        // Outer glow circle
        ctx.beginPath();
        ctx.arc(node.x, node.y, currentRadius * 2.2, 0, Math.PI * 2);
        ctx.fillStyle = isGold ? 'rgba(245, 158, 11, 0.12)' : 'rgba(6, 182, 212, 0.08)';
        ctx.fill();

        // Node center
        ctx.beginPath();
        ctx.arc(node.x, node.y, currentRadius, 0, Math.PI * 2);
        if (isGold) {
          ctx.fillStyle =
            node.layer === 0
              ? 'rgba(251, 191, 36, 0.95)'
              : node.layer === 3
              ? 'rgba(245, 158, 11, 0.95)'
              : 'rgba(217, 119, 6, 0.95)';
          ctx.shadowColor = 'rgba(245, 158, 11, 0.8)';
        } else {
          ctx.fillStyle =
            node.layer === 0
              ? 'rgba(56, 189, 248, 0.9)'
              : node.layer === 3
              ? 'rgba(168, 85, 247, 0.9)'
              : 'rgba(99, 102, 241, 0.85)';
          ctx.shadowColor = 'rgba(56, 189, 248, 0.6)';
        }
        ctx.shadowBlur = 6;
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[380px] sm:h-[440px] md:h-[480px] rounded-2xl overflow-hidden border border-slate-800/80 light:border-slate-300/80 bg-slate-950/60 light:bg-slate-50/60 backdrop-blur-sm p-4 flex items-center justify-center shadow-2xl shadow-cyan-950/20 group"
    >
      {/* Background Matrix Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b18_1px,transparent_1px),linear-gradient(to_bottom,#1e293b18_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

      {/* Decorative Radial Backdrop */}
      <div className="absolute w-72 h-72 rounded-full bg-cyan-500/10 blur-3xl pointer-events-none -top-10 -right-10" />
      <div className="absolute w-64 h-64 rounded-full bg-indigo-500/10 blur-3xl pointer-events-none -bottom-10 -left-10" />

      {/* Canvas */}
      <canvas ref={canvasRef} className="relative z-10 w-full h-full cursor-crosshair" />

      {/* Floating Interactive Badges */}
      <div className="absolute top-6 left-6 z-20 px-3 py-1.5 rounded-full text-xs font-mono bg-slate-900/90 border border-cyan-500/40 text-cyan-300 shadow-lg flex items-center gap-1.5 pointer-events-none">
        <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
        Local LLM • RAG
      </div>

      <div className="absolute bottom-6 left-8 z-20 px-3 py-1.5 rounded-full text-xs font-mono bg-slate-900/90 border border-indigo-500/40 text-indigo-300 shadow-lg flex items-center gap-1.5 pointer-events-none">
        <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
        NLP Vector Embeddings
      </div>

      <div className="absolute top-12 right-6 z-20 px-3 py-1.5 rounded-full text-xs font-mono bg-slate-900/90 border border-violet-500/40 text-violet-300 shadow-lg flex items-center gap-1.5 pointer-events-none">
        <span className="w-1.5 h-1.5 rounded-full bg-violet-400" />
        K-Means Clustering
      </div>

      <div className="absolute bottom-12 right-8 z-20 px-3 py-1.5 rounded-full text-xs font-mono bg-slate-900/90 border border-sky-500/40 text-sky-300 shadow-lg flex items-center gap-1.5 pointer-events-none">
        <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
        Full Stack • SQL
      </div>

      {/* Bottom status indicator */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 text-[10px] font-mono text-slate-500 tracking-wider">
        ACTIVE NEURAL GRAPH INTERACTION
      </div>
    </div>
  );
}
