import React, { useEffect, useRef } from 'react';

const IntegrationFlow = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    canvas.width = canvas.offsetWidth;
    canvas.height = 400;

    // Define system nodes
    const nodes = [
      { x: 100, y: 200, label: 'Legacy System', color: '#FFD700' },
      { x: 300, y: 100, label: 'API Gateway', color: '#9333EA' },
      { x: 300, y: 300, label: 'Database', color: '#48BB78' },
      { x: 500, y: 200, label: 'AI Engine', color: '#F56565' },
      { x: 700, y: 200, label: 'Business Logic', color: '#4299E1' }
    ];

    // Define connections between nodes
    const connections = [
      { from: 0, to: 1 },
      { from: 0, to: 2 },
      { from: 1, to: 3 },
      { from: 2, to: 3 },
      { from: 3, to: 4 }
    ];

    // Animation loop
    let frame = 0;
    const animate = () => {
      ctx.fillStyle = 'rgba(10, 0, 20, 0.2)';
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
        const progress = (frame % 100) / 100;
        const x = from.x + (to.x - from.x) * progress;
        const y = from.y + (to.y - from.y) * progress;
        
        ctx.beginPath();
        ctx.arc(x, y, 4, 0, Math.PI * 2);
        ctx.fillStyle = '#FFD700';
        ctx.fill();
      });

      // Draw nodes
      nodes.forEach(node => {
        const pulse = Math.sin(frame * 0.05) * 0.5 + 0.5;
        
        // Draw node circle
        ctx.beginPath();
        ctx.arc(node.x, node.y, 20, 0, Math.PI * 2);
        ctx.fillStyle = `${node.color}88`;
        ctx.fill();
        
        // Draw pulse effect
        ctx.beginPath();
        ctx.arc(node.x, node.y, 25 + pulse * 5, 0, Math.PI * 2);
        ctx.strokeStyle = `${node.color}44`;
        ctx.stroke();

        // Draw node label
        ctx.fillStyle = '#FFFFFF';
        ctx.font = '12px Orbitron';
        ctx.textAlign = 'center';
        ctx.fillText(node.label, node.x, node.y + 40);
      });

      frame++;
      requestAnimationFrame(animate);
    };

    animate();

    // Handle window resize
    const handleResize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = 400;
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="relative">
      <canvas
        ref={canvasRef}
        className="w-full h-[400px] rounded-xl"
      />
      <div className="absolute bottom-4 left-4 text-sm text-gray-400">
        Interactive Integration Flow Diagram
      </div>
    </div>
  );
};

export default IntegrationFlow;