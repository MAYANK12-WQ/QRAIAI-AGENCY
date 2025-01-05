import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const AIIntegrationFlow = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    const nodes = [
      { x: 100, y: canvas.height / 2, label: 'Input Data', color: '#FFD700' },
      { x: 300, y: canvas.height / 3, label: 'Processing', color: '#9333EA' },
      { x: 300, y: (canvas.height * 2) / 3, label: 'Storage', color: '#48BB78' },
      { x: 500, y: canvas.height / 2, label: 'AI Engine', color: '#F56565' },
      { x: 700, y: canvas.height / 2, label: 'Output', color: '#4299E1' }
    ];

    const connections = [
      { from: 0, to: 1 },
      { from: 0, to: 2 },
      { from: 1, to: 3 },
      { from: 2, to: 3 },
      { from: 3, to: 4 }
    ];

    let frame = 0;
    const animate = () => {
      // Clear canvas with fade effect
      ctx.fillStyle = 'rgba(10, 0, 20, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw connections
      connections.forEach(conn => {
        const from = nodes[conn.from];
        const to = nodes[conn.to];

        // Create gradient for connection
        const gradient = ctx.createLinearGradient(from.x, from.y, to.x, to.y);
        gradient.addColorStop(0, `${from.color}44`);
        gradient.addColorStop(1, `${to.color}44`);

        // Draw connection line
        ctx.beginPath();
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 2;
        ctx.moveTo(from.x, from.y);
        ctx.lineTo(to.x, to.y);
        ctx.stroke();

        // Animate data flow
        const t = (frame % 100) / 100;
        const x = from.x + (to.x - from.x) * t;
        const y = from.y + (to.y - from.y) * t;

        ctx.beginPath();
        ctx.arc(x, y, 4, 0, Math.PI * 2);
        ctx.fillStyle = '#FFD700';
        ctx.fill();
      });

      // Draw nodes
      nodes.forEach(node => {
        const pulse = Math.sin(frame * 0.05) * 0.5 + 0.5;

        // Draw node glow
        const gradient = ctx.createRadialGradient(
          node.x, node.y, 0,
          node.x, node.y, 30
        );
        gradient.addColorStop(0, `${node.color}44`);
        gradient.addColorStop(1, 'transparent');

        ctx.beginPath();
        ctx.fillStyle = gradient;
        ctx.arc(node.x, node.y, 30, 0, Math.PI * 2);
        ctx.fill();

        // Draw node
        ctx.beginPath();
        ctx.arc(node.x, node.y, 15, 0, Math.PI * 2);
        ctx.fillStyle = node.color;
        ctx.fill();

        // Draw pulse ring
        ctx.beginPath();
        ctx.arc(node.x, node.y, 20 + pulse * 5, 0, Math.PI * 2);
        ctx.strokeStyle = `${node.color}44`;
        ctx.stroke();

        // Draw label
        ctx.fillStyle = '#FFFFFF';
        ctx.font = '14px Orbitron';
        ctx.textAlign = 'center';
        ctx.fillText(node.label, node.x, node.y + 40);
      });

      frame++;
      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      // Cleanup
    };
  }, []);

  return (
    <div className="relative w-full h-[400px]">
      <canvas
        ref={canvasRef}
        className="w-full h-full rounded-xl bg-[#0A0014]"
      />
      <div className="absolute bottom-4 left-4 text-sm text-gray-400">
        Interactive AI Integration Flow
      </div>
    </div>
  );
};

export default AIIntegrationFlow;