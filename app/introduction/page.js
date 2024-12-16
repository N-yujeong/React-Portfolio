'use client';
import { useState } from 'react';
import intros from '../Data/intros';

export default function Introduction() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <div>
      {intros.map((intro, index) => (
        <button key={index} onClick={() => setSelectedIndex(index)}>
          {intro.tab}
        </button>
      ))}
      <br /><br />
      {intros[selectedIndex].content}
    </div>
  );
}