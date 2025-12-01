import React from "react";
export default function ProjectCard({ title, description, tags }: { title: string; description: string; tags: string[] }) {
  return (
    <article className="p-5 bg-white/5 rounded-xl">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-sm text-gray-400">{description}</p>
      <div className="mt-3 flex gap-2">{tags.map(t => <span key={t} className="text-xs px-2 py-1 bg-white/5 rounded-full">{t}</span>)}</div>
    </article>
  );
}
