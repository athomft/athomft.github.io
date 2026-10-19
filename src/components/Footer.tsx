import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Atho' O Atho'</p>
    </footer>
  );
};
