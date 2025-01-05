import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const MLVisualization = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    // Generate random data points
    const dataPoints = Array.from({ length: 50 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      cluster: Math.floor(Math.random() * 3),
      velocity: { x: (Math.random() - 0.5) * 2, y: (Math.random() - 0.5) * 2 }
    }));

    const clusterColors = ['#FFD700', '#9333EA', '#48BB78'];

    let frame = 0;
    const animate = () => {
      // Clear canvas with fade effect
      ctx.fillStyle = 'rgba(10, 0, 20, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw data points
      dataPoints.forEach(point => {
        // Update position with bouncing
        point.x += point.velocity.x;
        point.y += point.velocity.y;

        if (point.x < 0 || point.x > canvas.width) point.velocity.x *= -1;
        if (point.y < 0 || point.y > canvas.height) point.velocity.y *= -1;

        // Draw point
        const pulse = Math.sin(frame * 0.05 + point.x * 0.01) * 0.5 + 0.5;
        
        ctx.beginPath();
        ctx.arc(point.x, point.y, 4, 0, Math.PI * 2);
        ctx.fillStyle = clusterColors[point.cluster];
        ctx.fill();

        // Draw glow
        ctx.beginPath();
        ctx.arc(point.x, point.y, 8 + pulse * 4, 0, Math.PI * 2);
        ctx.strokeStyle = `${clusterColors[point.cluster]}44`;
        ctx.stroke();
      });

      // Draw connections between points in same cluster
      dataPoints.forEach((p1, i) => {
        dataPoints.slice(i + 1).forEach(p2 => {
          if (p1.cluster === p2.cluster) {
            const dist = Math.hypot(p2.x - p1.x, p2.y - p1.y);
            if (dist < 100) {
              ctx.beginPath();
              ctx.strokeStyle = `${clusterColors[p1.cluster]}22`;
              ctx.moveTo(p1.x, p1.y);
              ctx.lineTo(p2.x, p2.y);
              ctx.stroke();
            }
          }
        });
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
        Interactive Machine Learning Clustering Visualization
      </div>
    </div>
  );
};

export default MLVisualization;