import { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let animationFrameId: number;
    const target = { x: 0, y: 0 };
    const current = { x: 0, y: 0 };

    const handleMouseMove = (e: MouseEvent) => {
      target.x = e.clientX;
      target.y = e.clientY;
      setIsVisible(true);
    };

    const handleMouseEnter = (e: MouseEvent) => {
      const element = e.target as HTMLElement;
      if (
        element.tagName === 'A' ||
        element.tagName === 'BUTTON' ||
        element.classList.contains('cursor-hover') ||
        element.closest('a') ||
        element.closest('button')
      ) {
        setIsHovering(true);
      }
    };

    const handleMouseLeave = (e: MouseEvent) => {
      const element = e.target as HTMLElement;
      if (
        element.tagName === 'A' ||
        element.tagName === 'BUTTON' ||
        element.classList.contains('cursor-hover') ||
        element.closest('a') ||
        element.closest('button')
      ) {
        setIsHovering(false);
      }
    };

    const animate = () => {
      const easing = 0.25;
      current.x += (target.x - current.x) * easing;
      current.y += (target.y - current.y) * easing;

      setPosition({ x: current.x, y: current.y });
      animationFrameId = requestAnimationFrame(animate);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseover', handleMouseEnter);
    document.addEventListener('mouseout', handleMouseLeave);

    animate();

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseEnter);
      document.removeEventListener('mouseout', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <>
      <div
        className={`custom-cursor ${isHovering ? 'hovering' : ''} ${isVisible ? 'visible' : ''}`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      />
      <div
        className={`custom-cursor-dot ${isVisible ? 'visible' : ''}`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      />
    </>
  );
}
