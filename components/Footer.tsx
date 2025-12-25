import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-8 bg-dark border-t border-white/10 text-center">
      <p className="text-slate-500 text-sm">
        © {new Date().getFullYear()} Sonu Thomas. All rights reserved. <br />
        Built with React, Tailwind & AI.
      </p>
    </footer>
  );
};