import { useEffect } from 'react';

export default function CustomCursor() {
  useEffect(() => {
    if (window.matchMedia('(pointer:coarse)').matches) return;

    const ring = document.createElement('div');
    ring.className = 'cursor-ring';
    const dot = document.createElement('div');
    dot.className = 'cursor-dot';
    document.body.append(ring, dot);

    let rx = 0, ry = 0, dx = 0, dy = 0;

    const move = (e: MouseEvent) => {
      dx = e.clientX; dy = e.clientY;
      dot.style.transform = `translate(${dx}px,${dy}px) translate(-50%,-50%)`;
    };

    const raf = () => {
      rx += (dx - rx) * 0.18;
      ry += (dy - ry) * 0.18;
      ring.style.transform = `translate(${rx}px,${ry}px) translate(-50%,-50%)`;
      requestAnimationFrame(raf);
    };

    window.addEventListener('mousemove', move);
    raf();

    const over = (e: MouseEvent) => {
      if ((e.target as Element).closest('a,button,input,textarea,[data-cursor="hot"]'))
        ring.classList.add('hot');
    };
    const out = (e: MouseEvent) => {
      if ((e.target as Element).closest('a,button,input,textarea,[data-cursor="hot"]'))
        ring.classList.remove('hot');
    };

    document.addEventListener('mouseover', over);
    document.addEventListener('mouseout', out);

    return () => {
      window.removeEventListener('mousemove', move);
      document.removeEventListener('mouseover', over);
      document.removeEventListener('mouseout', out);
      ring.remove(); dot.remove();
    };
  }, []);

  return null;
}