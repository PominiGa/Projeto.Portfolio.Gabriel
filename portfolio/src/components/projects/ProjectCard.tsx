import React from 'react'

type Props = {
  title: string
  description: string
  tags: string[]
}

export default function ProjectCard({title, description, tags}: Props){
  return (
    <article className="card">
      <h3>{title}</h3>
      <p style={{color:'var(--muted)'}}>{description}</p>
      <div className="tags">
        {tags.map(t => <span key={t} className="tag">{t}</span>)}
      </div>
    </article>
  )
}
