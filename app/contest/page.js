'use client';
import { useState } from 'react';
import contests from '../Data/contests';

export default function Contest() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <div id="contest">
      {contests.map((contest, index) => (
        <button key={index} onClick={() => setSelectedIndex(index)}>
          {contest.tab}
        </button>
      ))}
      {contests[selectedIndex].content}
    </div>
  );
}