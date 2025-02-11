// src/components/Astronaut404.tsx
import React, { useEffect } from 'react';

const Astronaut404: React.FC = () => {
  useEffect(() => {
    drawVisor();
    animate();
  }, []);

  const drawVisor = () => {
    const canvas = document.getElementById('visor') as HTMLCanvasElement;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.beginPath();
    ctx.moveTo(5, 45);
    ctx.bezierCurveTo(15, 64, 45, 64, 55, 45);
    ctx.lineTo(55, 20);
    ctx.bezierCurveTo(55, 15, 50, 10, 45, 10);
    ctx.lineTo(15, 10);
    ctx.bezierCurveTo(15, 10, 5, 10, 5, 20);
    ctx.lineTo(5, 45);
    ctx.fillStyle = '#2f3640';
    ctx.strokeStyle = '#f5f6fa';
    ctx.fill();
    ctx.stroke();
  };

  const animate = () => {
    const cordCanvas = document.getElementById('cord') as HTMLCanvasElement;
    if (!cordCanvas) return;
    const ctx = cordCanvas.getContext('2d');
    if (!ctx) return;

    let y1 = 160;
    let y2 = 100;
    let y3 = 100;

    let y1Forward = true;
    let y2Forward = false;
    let y3Forward = true;

    const animateFrame = () => {
      requestAnimationFrame(animateFrame);
      ctx.clearRect(0, 0, innerWidth, innerHeight);

      ctx.beginPath();
      ctx.moveTo(130, 170);
      ctx.bezierCurveTo(250, y1, 345, y2, 400, y3);
      ctx.strokeStyle = 'white';
      ctx.lineWidth = 8;
      ctx.stroke();

      if (y1 === 100) y1Forward = true;
      if (y1 === 300) y1Forward = false;
      if (y2 === 100) y2Forward = true;
      if (y2 === 310) y2Forward = false;
      if (y3 === 100) y3Forward = true;
      if (y3 === 317) y3Forward = false;

      y1Forward ? (y1 += 1) : (y1 -= 1);
      y2Forward ? (y2 += 1) : (y2 -= 1);
      y3Forward ? (y3 += 1) : (y3 -= 1);
    };

    animateFrame();
  };

  return (
    <div id='404' className="min-h-screen w-full bg-gradient-to-br from-black via-gray-950 to-black relative overflow-hidden">
      {/* Moon */}
      <div className="absolute max-md:left-2 top-[-100px] left-[-300px] w-[900px] h-[900px] bg-gradient-to-r from-[#d0d0d0] to-[#919191] rounded-full shadow-lg"></div>
      <div className="absolute  top-[250px] left-[500px] w-[60px] h-[180px] bg-gradient-to-r from-[#7a7a7a] to-[#c3c3c3] rounded-full opacity-60"></div>
      <div className="absolute  top-[650px] left-[340px] w-[40px] h-[80px] bg-gradient-to-r from-[#7a7a7a] to-[#c3c3c3] rounded-full opacity-60 transform rotate-55"></div>
      <div className="absolute  top-[-20px] left-[40px] w-[65px] h-[120px] bg-gradient-to-r from-[#7a7a7a] to-[#c3c3c3] rounded-full opacity-60 transform rotate-250"></div>

      {/* Stars */}
      <div className="absolute w-[5px] h-[5px] bg-gray-500 rounded-full opacity-40 animate-shimmer"></div>
      <div className="absolute top-[40%] left-[50%] w-[5px] h-[5px] bg-gray-500 rounded-full opacity-40 animate-shimmer animation-delay-1000"></div>
      <div className="absolute top-[60%] left-[90%] w-[5px] h-[5px] bg-gray-500 rounded-full opacity-40 animate-shimmer animation-delay-3000"></div>
      <div className="absolute top-[10%] left-[70%] w-[5px] h-[5px] bg-gray-500 rounded-full opacity-40 animate-shimmer animation-delay-2000"></div>
      <div className="absolute top-[90%] left-[40%] w-[5px] h-[5px] bg-gray-500 rounded-full opacity-40 animate-shimmer"></div>
      <div className="absolute top-[20%] left-[30%] w-[5px] h-[5px] bg-gray-500 rounded-full opacity-40 animate-shimmer animation-delay-500"></div>

      {/* Error Section */}
      <div className="absolute left-[100px] top-[350px] transform -translate-y-[60%] text-blue-950 max-md:left-10">
        <div className="text-[10em]">404</div>
        <div className="text-[2em]">Hmmm...</div>
        <div className="opacity-100 text-lg font-bold z-50">It looks like this page is not yet deployed.</div>
      </div>

      {/* Astronaut */}
      <div className="absolute w-[185px] h-[300px] left-[70%] top-[50%] transform -translate-x-[50%] -translate-y-[50%] rotate-[20deg] scale-120 max-md:hidden">
        <div className="absolute top-[60px] left-[60px] w-[60px] h-[60px] bg-white rounded-[2em]">
          <canvas id="visor" width="60" height="60"></canvas>
          <div className="absolute top-[28px] left-[40px] w-[10px] h-[10px] bg-[#7f8fa6] rounded-[2em] opacity-50"></div>
          <div className="absolute top-[40px] left-[38px] w-[5px] h-[5px] bg-[#718093] rounded-[2em] opacity-30"></div>
        </div>
        <div className="absolute top-[90px] left-[47px] w-[86px] h-[90px] bg-[#bfbfbf] rounded-[8px]"></div>
        <div className="absolute top-[115px] left-[55px] w-[70px] h-[80px] bg-[#e6e6e6] rounded-[8px]"></div>
        <div className="absolute top-[140px] left-[68px] w-[45px] h-[25px] bg-[#d9d9d9] rounded-[6px]"></div>
        <div className="absolute top-[127px] left-[9px] w-[65px] h-[20px] bg-[#e6e6e6] rounded-[8px] transform rotate-[-30deg]"></div>
        <div className="absolute top-[102px] left-[7px] w-[20px] h-[45px] bg-[#e6e6e6] rounded-[8px] transform rotate-[-12deg] rounded-tl-[8em] rounded-tr-[8em]"></div>
        <div className="absolute top-[113px] left-[100px] w-[65px] h-[20px] bg-[#e6e6e6] rounded-[8px] transform rotate-[-10deg]"></div>
        <div className="absolute top-[78px] left-[141px] w-[20px] h-[45px] bg-[#e6e6e6] rounded-[8px] transform rotate-[-10deg] rounded-tl-[8em] rounded-tr-[8em]"></div>
        <div className="absolute top-[110px] left-[21px] w-[10px] h-[6px] bg-[#e6e6e6] rounded-[8em] transform rotate-[-35deg]"></div>
        <div className="absolute top-[90px] left-[133px] w-[10px] h-[6px] bg-[#e6e6e6] rounded-[8em] transform rotate-[20deg]"></div>
        <div className="absolute top-[122px] left-[6.5px] w-[21px] h-[4px] bg-[#e67e22] rounded-[8em] transform rotate-[-15deg]"></div>
        <div className="absolute top-[98px] left-[141px] w-[21px] h-[4px] bg-[#e67e22] rounded-[8em] transform rotate-[-10deg]"></div>
        <div className="absolute top-[188px] left-[50px] w-[23px] h-[75px] bg-[#e6e6e6] transform rotate-[10deg]"></div>
        <div className="absolute top-[188px] left-[108px] w-[23px] h-[75px] bg-[#e6e6e6] transform rotate-[-10deg]"></div>
        <div className="absolute top-[240px] left-[43px] w-[28px] h-[20px] bg-white transform rotate-[10deg] rounded-[3px] rounded-tl-[8em] rounded-tr-[8em] border-b-4 border-[#e67e22]"></div>
        <div className="absolute top-[240px] left-[111px] w-[28px] h-[20px] bg-white transform rotate-[-10deg] rounded-[3px] rounded-tl-[8em] rounded-tr-[8em] border-b-4 border-[#e67e22]"></div>
        <div className="absolute">
          <canvas id="cord" width="500" height="500"></canvas>
        </div>
      </div>
    </div>
  );
};

export default Astronaut404;