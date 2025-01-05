import React, { useEffect, useRef } from 'react';

const MLAlgorithmVisualizer = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    canvas.width = canvas.offsetWidth;
    canvas.height = 400;

    // Data points
    const dataPoints: { x: number, y: number, cluster: number }[] = [];
    for (let i = 0; i < 50; i++) {
      dataPoints.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        cluster: Math.floor(Math.random() * 3)
      });
    }

    // Colors for different clusters
    const colors = ['#FFD700', '#9333EA', '#48BB78'];

    // Animation loop
    let frame = 0;
    const animate = () => {
      ctx.fillStyle = 'rgba(10, 0, 20, 0.2)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw data points
      dataPoints.forEach(point => {
        const pulse = Math.sin(frame * 0.05 + point.x * 0.01) * 0.5 + 0.5;
        
        ctx.beginPath();
        ctx.arc(point.x, point.y, 6, 0, Math.PI * 2);
        ctx.fillStyle = colors[point.cluster];
        ctx.fill();
        
        ctx.beginPath();
        ctx.arc(point.x, point.y, 10 * pulse, 0, Math.PI * 2);
        ctx.strokeStyle = `${colors[point.cluster]}44`;
        ctx.stroke();
      });

      // Draw connecting lines between points in same cluster
      dataPoints.forEach((point1, i) => {
        dataPoints.slice(i + 1).forEach(point2 => {
          if (point1.cluster === point2.cluster) {
            const distance = Math.hypot(point2.x - point1.x, point2.y - point1.y);
            if (distance < 100) {
              ctx.beginPath();
              ctx.strokeStyle = `${colors[point1.cluster]}22`;
              ctx.moveTo(point1.x, point1.y);
              ctx.lineTo(point2.x, point2.y);
              ctx.stroke();
            }
          }
        });
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
        Interactive Clustering Visualization
      </div>
    </div>
  );
};

export default MLAlgorithmVisualizer;