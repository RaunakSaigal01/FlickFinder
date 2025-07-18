import React from 'react';
import './Buttons.css';

const categories = [
  { label: 'Marvel Movie', query: 'Marvel', type: 'movie' },
  { label: 'Funny Movie', query: 'Comedy', type: 'movie' },
  { label: 'Animation Movie', query: 'Animation', type: 'movie' },
  { label: 'Web Series Movie', query: 'Marvel', type: 'series' }
];

const Buttons = ({ onCatClick }) => {
  return (
    <div className="category-buttons">
      {categories.map(category => (
        <button key={category.label} onClick={() => onCatClick(category.query, category.type)}>
          {category.label}
        </button>
      ))}
    </div>
  );
};

export default Buttons;
