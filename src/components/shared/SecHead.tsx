import React from 'react';
import { Reveal } from './Reveal';

interface SecHeadProps {
  eyebrow: string;
  title: React.ReactNode;
  desc?: string;
}

export function SecHead({ eyebrow, title, desc }: SecHeadProps) {
  return (
    <div className="sec-head">
      <Reveal><div className="eyebrow">{eyebrow}</div></Reveal>
      <Reveal delay={60}><h2 className="h2">{title}</h2></Reveal>
      {desc && <Reveal delay={120}><p className="lead">{desc}</p></Reveal>}
    </div>
  );
}