import React, { useState } from 'react';

const TECH_SLUG: Record<string, string> = {
  'java': 'java', 'javascript': 'javascript', 'typescript': 'typescript',
  'html5': 'html5', 'html / css': 'html5', 'css3': 'css3', 'react': 'react',
  'spring boot': 'spring', 'spring': 'spring',
  'tailwind css': 'tailwindcss', 'tailwind': 'tailwindcss',
  'postgresql': 'postgresql', 'mysql': 'mysql', 'mongodb': 'mongodb', 'redis': 'redis',
  'linux': 'linux', 'docker': 'docker', 'git': 'git',
  'git / github': 'git', 'github': 'github',
  'intellij idea': 'intellij', 'intellij': 'intellij',
  'vs code': 'vscode',
  'datagrip': 'datagrip',
  'insomnia': 'insomnia',
  'php': 'php',
  'laravel': 'laravel',
  'python': 'python', 'c#': 'csharp',
  'node.js': 'nodejs', 'nodejs': 'nodejs',
  'mariadb': 'mariadb',
};

const VARIANTS = ['original', 'plain', 'original-wordmark', 'plain-wordmark'];

function techUrl(slug: string, vi: number) {
  return `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${slug}/${slug}-${VARIANTS[vi]}.svg`;
}

interface TechLogoProps { name: string; size?: number; }

export function TechLogo({ name, size = 40 }: TechLogoProps) {
  const slug = TECH_SLUG[name.toLowerCase()];
  const [vi, setVi] = useState(0);
  const [err, setErr] = useState(false);

  if (!slug || err) {
    return (
      <span
        className="tech-fallback"
        style={{ width: size, height: size, fontSize: size * 0.34, borderRadius: 4, display:'grid', placeItems:'center' }}
      >
        {name.slice(0, 2).toUpperCase()}
      </span>
    );
  }

  return (
    <img
      className="tech-img"
      src={techUrl(slug, vi)}
      alt={name}
      width={size}
      height={size}
      onError={() => {
        if (vi < VARIANTS.length - 1) setVi(vi + 1);
        else setErr(true);
      }}
      draggable={false}
    />
  );
}