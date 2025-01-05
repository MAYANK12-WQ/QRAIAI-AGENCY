import React, { useEffect, useRef, useState } from 'react';

interface NeuralNetworkVisualizationProps {
  type: string;
  isPlaying: boolean;
}

const NeuralNetworkVisualization: React.FC<NeuralNetworkVisualizationProps> = ({
  type,
  isPlaying
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [hoveredNeuron, setHoveredNeuron] = useState<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size with retina display support
    const dpr = window.devicePixelRatio || 1;
    canvas.width = canvas.offsetWidth * dpr;
    canvas.height = canvas.offsetHeight * dpr;
    ctx.scale(dpr, dpr);

    // Network architecture based on visualization type
    const layers = type === 'basic' ? [3, 4, 3] 
                  : type === 'architecture' ? [4, 6, 6, 3]
                  : [4, 5, 5, 3];

    const neurons: { x: number; y: number; value: number }[][] = [];
    const connections: { from: [number, number]; to: [number, number]; weight: number }[] = [];

    // Initialize neurons
    layers.forEach((size, layerIndex) => {
      const layer: { x: number; y: number; value: number }[] = [];
      const xPos = (canvas.width / (layers.length + 1)) * (layerIndex + 1);
      
      for (let i = 0; i < size; i++) {
        const yPos = (canvas.height / (size + 1)) * (i + 1);
        layer.push({
          x: xPos,
          y: yPos,
          value: Math.random()
        });
      }
      neurons.push(layer);
    });

    // Create connections
    for (let l = 0; l < layers.length - 1; l++) {
      neurons[l].forEach((fromNeuron, i) => {
        neurons[l + 1].forEach((toNeuron, j) => {
          connections.push({
            from: [l, i],
            to: [l + 1, j],
            weight: Math.random() * 2 - 1
          });
        });
      });
    }

    let frame = 0;
    const animate = () => {
      if (!isPlaying) return;

      // Clear canvas with fade effect
      ctx.fillStyle = 'rgba(10, 0, 20, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw connections
      connections.forEach(conn => {
        const from = neurons[conn.from[0]][conn.from[1]];
        const to = neurons[conn.to[0]][conn.to[1]];
        
        const gradient = ctx.createLinearGradient(from.x, from.y, to.x, to.y);
        gradient.addColorStop(0, `rgba(255, 215, 0, ${Math.abs(conn.weight) * 0.5})`);
        gradient.addColorStop(1, `rgba(147, 51, 234, ${Math.abs(conn.weight) * 0.5})`);
        
        ctx.beginPath();
        ctx.strokeStyle = gradient;
        ctx.lineWidth = Math.abs(conn.weight) * 2;
        ctx.moveTo(from.x, from.y);
        ctx.lineTo(to.x, to.y);
        ctx.stroke();

        // Animate signal flow
        const t = (frame % 100) / 100;
        const x = from.x + (to.x - from.x) * t;
        const y = from.y + (to.y - from.y) * t;
        
        ctx.beginPath();
        ctx.arc(x, y, 3, 0, Math.PI * 2);
        ctx.fillStyle = '#FFD700';
        ctx.fill();
      });

      // Draw neurons
      neurons.forEach((layer, layerIndex) => {
        layer.forEach((neuron, neuronIndex) => {
          const isHovered = hoveredNeuron === neuronIndex;
          const pulse = Math.sin(frame * 0.05 + neuron.x * 0.01) * 0.5 + 0.5;
          
          // Glow effect
          const gradient = ctx.createRadialGradient(
            neuron.x, neuron.y, 0,
            neuron.x, neuron.y, 20
          );
          gradient.addColorStop(0, `rgba(255, 215, 0, ${0.5 * pulse})`);
          gradient.addColorStop(1, 'transparent');
          
          ctx.beginPath();
          ctx.fillStyle = gradient;
          ctx.arc(neuron.x, neuron.y, 20, 0, Math.PI * 2);
          ctx.fill();

          // Neuron core
          ctx.beginPath();
          ctx.arc(neuron.x, neuron.y, 6, 0, Math.PI * 2);
          ctx.fillStyle = layerIndex === 0 ? '#FFD700' 
                         : layerIndex === layers.length - 1 ? '#48BB78' 
                         : '#9333EA';
          ctx.fill();

          // Show value on hover
          if (isHovered) {
            ctx.fillStyle = 'white';
            ctx.font = '14px Arial';
            ctx.textAlign = 'center';
            ctx.fillText(
              `Value: ${neuron.value.toFixed(3)}`,
              neuron.x,
              neuron.y - 30
            );
          }
        });
      });

      frame++;
      requestAnimationFrame(animate);
    };

    animate();

    // Handle mouse interaction
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const x = (e.clientX - rect.left) * dpr;
      const y = (e.clientY - rect.top) * dpr;

      let hovered: number | null = null;
      neurons.forEach(layer => {
        layer.forEach((neuron, index) => {
          const distance = Math.hypot(neuron.x - x, neuron.y - y);
          if (distance < 20) {
            hovered = index;
          }
        });
      });
      setHoveredNeuron(hovered);
    };

    canvas.addEventListener('mousemove', handleMouseMove);

    return () => {
      canvas.removeEventListener('mousemove', handleMouseMove);
    };
  }, [type, isPlaying]);

  return (
    <div className="relative w-full h-[400px] bg-[#0A0014] rounded-xl overflow-hidden">
      <canvas
        ref={canvasRef}
        className="w-full h-full"
      />
      <div className="absolute bottom-4 left-4 text-sm text-gray-400">
        Hover over neurons to see activation values
      </div>
    </div>
  );
};

export default NeuralNetworkVisualization;