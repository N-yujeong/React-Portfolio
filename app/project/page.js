'use client';
import { useState } from 'react';
import projects from '../Data/projects';

export default function Project() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <div>
      {projects.map((project, index) => (
        <button key={index} onClick={() => setSelectedIndex(index)}>
          {project.tab}
        </button>
      ))}
      {projects[selectedIndex].content}
    </div>
  );
}