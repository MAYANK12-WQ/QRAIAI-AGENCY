import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface Neuron {
  x: number;
  y: number;
  activation: number;
  layer: number;
}

const InteractiveNeuralNetwork: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [hoveredNeuron, setHoveredNeuron] = useState<Neuron | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size with retina display support
    const dpr = window.devicePixelRatio || 1;
    canvas.width = canvas.offsetWidth * dpr;
    canvas.height = 400 * dpr;
    ctx.scale(dpr, dpr);

    // Neural network parameters
    const layers = [4, 6, 6, 3];
    const neurons: Neuron[][] = [];
    const connections: { from: Neuron; to: Neuron; weight: number }[] = [];

    // Initialize neurons
    layers.forEach((size, layerIndex) => {
      const layer: Neuron[] = [];
      const xPos = (canvas.width / (layers.length + 1)) * (layerIndex + 1);
      
      for (let i = 0; i < size; i++) {
        const yPos = (canvas.height / (size + 1)) * (i + 1);
        layer.push({
          x: xPos,
          y: yPos,
          activation: Math.random(),
          layer: layerIndex
        });
      }
      neurons.push(layer);
    });

    // Create connections
    for (let l = 0; l < layers.length - 1; l++) {
      const currentLayer = neurons[l];
      const nextLayer = neurons[l + 1];
      
      currentLayer.forEach(fromNeuron => {
        nextLayer.forEach(toNeuron => {
          connections.push({
            from: fromNeuron,
            to: toNeuron,
            weight: Math.random() * 2 - 1
          });
        });
      });
    }

    let frame = 0;
    const animate = () => {
      ctx.fillStyle = 'rgba(10, 0, 20, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw connections
      connections.forEach(conn => {
        const gradient = ctx.createLinearGradient(
          conn.from.x, conn.from.y,
          conn.to.x, conn.to.y
        );
        
        const alpha = hoveredNeuron 
          ? (conn.from === hoveredNeuron || conn.to === hoveredNeuron ? 0.8 : 0.2)
          : 0.5;
        
        gradient.addColorStop(0, `rgba(255, 215, 0, ${alpha})`);
        gradient.addColorStop(1, `rgba(147, 51, 234, ${alpha})`);
        
        ctx.beginPath();
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 2;
        ctx.moveTo(conn.from.x, conn.from.y);
        ctx.lineTo(conn.to.x, conn.to.y);
        ctx.stroke();

        // Animate data flow
        const t = (frame % 100) / 100;
        const x = conn.from.x + (conn.to.x - conn.from.x) * t;
        const y = conn.from.y + (conn.to.y - conn.from.y) * t;
        
        ctx.beginPath();
        ctx.arc(x, y, 4, 0, Math.PI * 2);
        ctx.fillStyle = '#FFD700';
        ctx.fill();
      });

      // Draw neurons
      neurons.flat().forEach(neuron => {
        const isHovered = neuron === hoveredNeuron;
        const pulse = Math.sin(frame * 0.05 + neuron.x * 0.01) * 0.5 + 0.5;
        
        // Glow effect
        const gradient = ctx.createRadialGradient(
          neuron.x, neuron.y, 0,
          neuron.x, neuron.y, isHovered ? 30 : 20
        );
        gradient.addColorStop(0, `rgba(255, 215, 0, ${0.5 * pulse})`);
        gradient.addColorStop(1, 'transparent');
        
        ctx.beginPath();
        ctx.fillStyle = gradient;
        ctx.arc(neuron.x, neuron.y, isHovered ? 30 : 20, 0, Math.PI * 2);
        ctx.fill();

        // Neuron core
        ctx.beginPath();
        ctx.arc(neuron.x, neuron.y, isHovered ? 8 : 6, 0, Math.PI * 2);
        ctx.fillStyle = neuron.layer === 0 ? '#FFD700' 
                       : neuron.layer === layers.length - 1 ? '#48BB78' 
                       : '#9333EA';
        ctx.fill();

        // Show activation value on hover
        if (isHovered) {
          ctx.fillStyle = 'white';
          ctx.font = '14px Orbitron';
          ctx.textAlign = 'center';
          ctx.fillText(
            `Activation: ${neuron.activation.toFixed(3)}`,
            neuron.x,
            neuron.y - 30
          );
        }
      });

      frame++;
      requestAnimationFrame(animate);
    };

    animate();

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const x = (e.clientX - rect.left) * dpr;
      const y = (e.clientY - rect.top) * dpr;
      
      let hovered: Neuron | null = null;
      neurons.flat().forEach(neuron => {
        const distance = Math.hypot(neuron.x - x, neuron.y - y);
        if (distance < 20) {
          hovered = neuron;
        }
      });
      
      setHoveredNeuron(hovered);
      canvas.style.cursor = hovered ? 'pointer' : 'default';
    };

    canvas.addEventListener('mousemove', handleMouseMove);

    return () => {
      canvas.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="relative">
      <canvas
        ref={canvasRef}
        className="w-full h-[400px] rounded-xl bg-[#0A0014]"
      />
      <div className="absolute bottom-4 left-4 text-sm text-gray-400">
        Hover over neurons to see activation values
      </div>
    </div>
  );
};

export default InteractiveNeuralNetwork;