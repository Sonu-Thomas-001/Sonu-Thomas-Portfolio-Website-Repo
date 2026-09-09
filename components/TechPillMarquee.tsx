import React from 'react';
import { motion } from 'framer-motion';

export interface TechPillItem {
  name: string;
  category?: string;
  icon: React.ReactNode;
}

// Crisp, accurate brand SVGs in reference image order
export const TECH_PILLS: TechPillItem[] = [
  {
    name: "Redis",
    category: "Database",
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 256 219" fill="none">
        <path d="M0 63.88L126.68 0L253.36 63.88L128 126.83L0 63.88Z" fill="#DC382D" />
        <path d="M0 63.88L128 126.83V161.43L0 98.48V63.88Z" fill="#B42921" />
        <path d="M253.36 63.88L128 126.83V161.43L253.36 98.48V63.88Z" fill="#8C1C16" />
        <path d="M0 121.45L128 184.4V219L0 156.05V121.45Z" fill="#B42921" />
        <path d="M253.36 121.45L128 184.4V219L253.36 156.05V121.45Z" fill="#8C1C16" />
        <ellipse cx="127.5" cy="58.5" rx="20.5" ry="10.5" fill="#FFFFFF" opacity="0.3" />
      </svg>
    ),
  },
  {
    name: "Figma",
    category: "Design",
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 38 57" fill="none">
        <path d="M19 28.5C19 23.2533 23.2533 19 28.5 19C33.7467 19 38 23.2533 38 28.5C38 33.7467 33.7467 38 28.5 38C23.2533 38 19 33.7467 19 28.5Z" fill="#1ABCFE" />
        <path d="M0 47.5C0 42.2533 4.25329 38 9.5 38H19V47.5C19 52.7467 14.7467 57 9.5 57C4.25329 57 0 52.7467 0 47.5Z" fill="#0ACF83" />
        <path d="M19 0V19H28.5C33.7467 19 38 14.7467 38 9.5C38 4.25329 33.7467 0 28.5 0H19Z" fill="#FF7262" />
        <path d="M0 9.5C0 14.7467 4.25329 19 9.5 19H19V0H9.5C4.25329 0 0 4.25329 0 9.5Z" fill="#F24E1E" />
        <path d="M0 28.5C0 33.7467 4.25329 38 9.5 38H19V19H9.5C4.25329 19 0 23.2533 0 28.5Z" fill="#A259FF" />
      </svg>
    ),
  },
  {
    name: "Redux",
    category: "State",
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 256 244" fill="none">
        <path d="M165.7 34.5C154.5 15.1 138.8 2.6 122.3.3 105.7-2 90.5 6.3 80.8 23.2c-9.6 16.7-9.4 39.5.4 62.4 1 2.3 2.1 4.7 3.2 7-8.1 3.5-16.1 7.6-23.7 12.3-2.3-3.1-4.7-6.2-7.2-9.1-14.3-16.6-30.8-26.6-47.5-27.4-16.7-.8-31.5 7.6-40.4 23.1-8.9 15.4-8.8 35.8.4 56.4 9.1 20.3 25.8 39.7 46.9 53.6.4.3.9.5 1.3.8-1 9.4-1.2 18.9-.6 28.4-1.2 2.2-2.3 4.5-3.3 6.9-8.4 19.8-8 39.9 1.1 55.6 9.1 15.6 24.3 23.9 41.5 22.8 17.2-1.1 34.3-11.7 47.9-29.2 4.4-5.6 8.3-11.8 11.6-18.4 13.9 4.3 28.5 6.9 43.1 7.6 2.3 3.3 4.8 6.5 7.5 9.4 14.3 15.9 30.6 25.3 47 25.4 16.5.1 31-8.5 39.7-23.5 8.7-15.1 8.8-34.7.4-54.8-8.2-19.7-23.8-38.6-43.5-52.5-3-2.1-6.1-4.1-9.4-6 1.4-9.9 1.8-19.8 1.2-29.7 1.5-2.5 2.8-5 4-7.6 8.3-17.7 8.5-35.8.6-50.1-8-14.3-21.9-22.3-37.9-22.1-16 .1-32.1 8.8-45.6 24.2-2.4 2.8-4.7 5.8-6.8 8.9-14-3.5-28.5-5.3-43-5.4zm-14.4 20.5c8.6-9.8 18.9-15.3 28.9-15.4 10-.1 18.7 5.1 23.8 14.2 5 9.1 4.9 20.6-.4 31.8-.8 1.7-1.6 3.4-2.6 5-5.6-2.5-11.4-4.6-17.4-6.4-1.5-3.8-3.4-7.5-5.5-11.1-7.7-13.1-18.1-18.1-26.8-18.1zm-32.9 26.5c17.5.3 35.1 3.5 51.5 9.4-4.5 9-7.4 18.8-8.7 28.8-14.5-2.2-29.5-2-44 .8-5.3-8.8-11.5-16.9-18.6-24.1 6.3-8.5 13.1-14.9 19.8-14.9z" fill="#764ABC" />
      </svg>
    ),
  },
  {
    name: "React",
    category: "Frontend",
    icon: (
      <svg className="w-4 h-4 text-[#61DAFB]" viewBox="0 0 115 102" fill="currentColor">
        <path d="M57.5 14.1c18.3 0 35.6 4.9 46.8 13.1 5.3 3.9 8.2 8.3 8.2 12.8 0 4.5-2.9 8.9-8.2 12.8-11.2 8.2-28.5 13.1-46.8 13.1s-35.6-4.9-46.8-13.1C5.4 48.8 2.5 44.4 2.5 40s2.9-8.9 8.2-12.8c11.2-8.2 28.5-13.1 46.8-13.1zm0-3.6c-20.4 0-39.7 5.3-51.7 14.2C-1.9 29.8-1.9 50.2 5.8 56c12 8.9 31.3 14.2 51.7 14.2s39.7-5.3 51.7-14.2c7.7-5.8 7.7-26.2 0-31.3-12-8.9-31.3-14.2-51.7-14.2z" />
        <path d="M57.5 73.1c-18.3 0-35.6-4.9-46.8-13.1C5.4 56.1 2.5 51.7 2.5 47.2c0-4.5 2.9-8.9 8.2-12.8C21.9 26.2 39.2 21.3 57.5 21.3s35.6 4.9 46.8 13.1c5.3 3.9 8.2 8.3 8.2 12.8 0 4.5-2.9 8.9-8.2 12.8-11.2 8.2-28.5 13.1-46.8 13.1z" transform="rotate(60 57.5 47.2)" />
        <path d="M57.5 73.1c-18.3 0-35.6-4.9-46.8-13.1C5.4 56.1 2.5 51.7 2.5 47.2c0-4.5 2.9-8.9 8.2-12.8C21.9 26.2 39.2 21.3 57.5 21.3s35.6 4.9 46.8 13.1c5.3 3.9 8.2 8.3 8.2 12.8 0 4.5-2.9 8.9-8.2 12.8-11.2 8.2-28.5 13.1-46.8 13.1z" transform="rotate(120 57.5 47.2)" />
        <circle cx="57.5" cy="47.2" r="8.5" fill="#61DAFB" />
      </svg>
    ),
  },
  {
    name: "Next.js",
    category: "Framework",
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 180 180" fill="none">
        <mask id="nextjs-mask" maskUnits="userSpaceOnUse" x="0" y="0" width="180" height="180" style={{ maskType: 'alpha' }}>
          <circle cx="90" cy="90" r="90" fill="black" />
        </mask>
        <g mask="url(#nextjs-mask)">
          <circle cx="90" cy="90" r="90" fill="#000000" />
          <path d="M149.508 157.438L69.1478 54H54V125.979H66.6115V69.3831L139.563 163.582C143.084 161.761 146.417 159.697 149.508 157.438Z" fill="url(#nextjs-gradient-1)" />
          <rect x="115" y="54" width="12" height="72" fill="url(#nextjs-gradient-2)" />
        </g>
        <defs>
          <linearGradient id="nextjs-gradient-1" x1="109" y1="116.5" x2="144.5" y2="160.5" gradientUnits="userSpaceOnUse">
            <stop stopColor="white" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="nextjs-gradient-2" x1="121" y1="54" x2="120.799" y2="106.875" gradientUnits="userSpaceOnUse">
            <stop stopColor="white" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    ),
  },
  {
    name: "TypeScript",
    category: "Language",
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 256 256" fill="none">
        <rect width="256" height="256" rx="40" fill="#3178C6" />
        <path d="M150.04 141.6c6.19 8.78 14.86 14.34 26.24 14.34 10.97 0 17.51-5.13 17.51-12.74 0-8.93-8.67-12.29-23.35-18.73-19.81-8.33-32.99-19.03-32.99-38.38 0-21.75 17.07-37.49 43.51-37.49 16.71 0 28.83 5.48 37.58 16.45l-15.65 14.07c-5.4-6.63-12.74-10.35-21.75-10.35-9.64 0-15.39 5.3-15.39 11.85 0 7.87 6.99 11.23 21.49 17.6 22.02 9.55 35.02 19.37 35.02 39.8 0 24.32-18.75 39.26-46.61 39.26-20.96 0-35.91-7.43-45.2-20.61l19.59-15.07zM52 82.87h76.32v18.75H93.18v101.41H69.45V101.62H52V82.87z" fill="white" />
      </svg>
    ),
  },
  {
    name: "Node.js",
    category: "Runtime",
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 256 289" fill="none">
        <path d="M128 0L249.2 69.8V209.4L128 279.2L6.8 209.4V69.8L128 0Z" fill="#539E43" />
        <path d="M128 17.7L233.9 78.7V200.5L128 261.5L22.1 200.5V78.7L128 17.7Z" fill="#333333" />
        <path d="M128 42.6L212 90.9V187.6L128 235.9L44 187.6V90.9L128 42.6Z" fill="#539E43" />
        <path d="M128 140.2L98.5 123.1V89L128 72L157.5 89V123.1L128 140.2Z" fill="white" />
      </svg>
    ),
  },
  {
    name: "GraphQL",
    category: "API",
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 400 400" fill="none">
        <path d="M57.4 280.8L32.2 237.2L182.2 150.6L207.4 194.2L57.4 280.8Z" fill="#E10098" opacity="0.4" />
        <path d="M342.6 280.8L192.6 194.2L217.8 150.6L367.8 237.2L342.6 280.8Z" fill="#E10098" opacity="0.4" />
        <path d="M57.4 119.2L207.4 205.8L182.2 249.4L32.2 162.8L57.4 119.2Z" fill="#E10098" opacity="0.4" />
        <path d="M200 40L350 126.6V300L200 386.6L50 300V126.6L200 40ZM200 67.4L73.6 140.4V286.2L200 359.2L326.4 286.2V140.4L200 67.4Z" fill="#E10098" />
        <circle cx="200" cy="50" r="28" fill="#E10098" />
        <circle cx="335" cy="128" r="28" fill="#E10098" />
        <circle cx="335" cy="285" r="28" fill="#E10098" />
        <circle cx="200" cy="362" r="28" fill="#E10098" />
        <circle cx="65" cy="285" r="28" fill="#E10098" />
        <circle cx="65" cy="128" r="28" fill="#E10098" />
      </svg>
    ),
  },
  {
    name: "Tailwind CSS",
    category: "Styling",
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 256 154" fill="none">
        <path d="M128 0C93.867 0 72.533 17.067 64 51.2C76.8 34.133 91.733 27.733 108.8 32C118.537 34.434 125.485 41.492 133.076 49.204C145.441 61.766 159.843 76.4 192 76.4C226.133 76.4 247.467 59.333 256 25.2C243.2 42.267 228.267 48.667 211.2 44.4C201.463 41.966 194.515 34.908 186.924 27.196C174.559 14.634 160.157 0 128 0ZM64 76.8C29.867 76.8 8.533 93.867 0 128C12.8 110.933 27.733 104.533 44.8 108.8C54.537 111.234 61.485 118.292 69.076 126.004C81.441 138.566 95.843 153.2 128 153.2C162.133 153.2 183.467 136.133 192 102C179.2 119.067 164.267 125.467 147.2 121.2C137.463 118.766 130.515 111.708 122.924 103.996C110.559 91.434 96.157 76.8 64 76.8Z" fill="#38BDF8" />
      </svg>
    ),
  },
  {
    name: "Python",
    category: "Language",
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 256 255" fill="none">
        <path d="M126.9 0C61.4 0 65.5 28.4 65.5 28.4l.1 29.4h62.8v8.9H39.5S0 62.2 0 127.8c0 65.6 34.6 63.3 34.6 63.3h20.7v-29.2s-1.1-34.6 34-34.6h58.8s32.9.5 32.9-32.3V32.3S186.6 0 126.9 0zm-34.5 19.9a9.7 9.7 0 1 1 0 19.4 9.7 9.7 0 0 1 0-19.4z" fill="#387EB8" />
        <path d="M129.1 254.7c65.5 0 61.4-28.4 61.4-28.4l-.1-29.4h-62.8v-8.9h88.9s39.5 4.5 39.5-61.1c0-65.6-34.6-63.3-34.6-63.3h-20.7v29.2s1.1 34.6-34 34.6H107.9s-32.9-.5-32.9 32.3v62.7s-5.6 32.3 54.1 32.3zm34.5-19.9a9.7 9.7 0 1 1 0-19.4 9.7 9.7 0 0 1 0 19.4z" fill="#FFE052" />
      </svg>
    ),
  },
  {
    name: "Docker",
    category: "DevOps",
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 256 182" fill="none">
        <path d="M255.4 78.4c-3.1-23.7-22.1-33.8-22.1-33.8s-9.9-5.1-27.4.9c-2.3-7.5-8.5-13.4-14.8-17.5l-6.8 5.6c4.9 3.5 10.3 8.3 11.9 14.4-4.8 2.6-13.6 2.3-21.9-.3-1.6 15.3 4.1 28.3 13.9 37.1 2.2 2 4.7 3.7 7.4 5.2 2.3 1.3 4.8 2.4 7.5 3.1 1.7.5 3.5.8 5.3 1 14.6 1.4 34.6-2.5 45-15.7zm-40.8-1.5c-2.6 0-4.7-2.1-4.7-4.7s2.1-4.7 4.7-4.7 4.7 2.1 4.7 4.7-2.1 4.7-4.7 4.7z" fill="#2496ED" />
        <path d="M129.5 100.9h23.5V77.4h-23.5v23.5zm-29.3 0h23.5V77.4h-23.5v23.5zm0-29.3h23.5V48.1h-23.5v23.5zm-29.4 29.3h23.5V77.4H70.8v23.5zm0-29.3h23.5V48.1H70.8v23.5zm-29.4 29.3h23.5V77.4H41.4v23.5zm0-29.3h23.5V48.1H41.4v23.5zm-29.4 29.3h23.5V77.4H12v23.5zm58.8-58.7h23.5V18.7H70.8v23.5z" fill="#2496ED" />
        <path d="M217.7 101.4c-4.4-1.3-15-2.2-27.9.6-7.3-13.9-19.7-19-20.4-19.3l-5.3 9.4c.3.2 9.8 4.3 16 15.4-8.8 4.7-20.7 7.7-34.6 7.7H7.7c-2.1 8.8-1.6 22 2.7 33.1 7.2 18.5 22.9 30.6 44.8 33.7 38.3 5.4 83.3 5.6 119.2-8.5 24.3-9.5 40.5-29.8 44.7-56.1.7-4.5 1-9.1.8-13.7l-2.2-2.3z" fill="#2496ED" />
      </svg>
    ),
  },
  {
    name: "PostgreSQL",
    category: "Database",
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 256 264" fill="none">
        <path d="M126.9 0C97.4 0 63.3 14.5 46.8 37.5c-15.5 21.6-15.8 48.6-12.7 75.3-7.7 1.1-15.3 3.6-21.7 8.2-12.7 9.1-15.2 24.6-11.7 38.8 4.1 16.5 17.5 28.5 33.8 32.8 1.4 12.1 4.5 24.2 9.4 35.7 8.7 20.6 22.9 33.2 45.4 35.5 1.5.1 3 .2 4.5.2 14.5 0 28.8-6.1 39.5-17.1 10.9 10.7 25.1 16.9 40.1 16.9 22.4 0 42.1-13.9 51.5-35.3 5.3-12.1 8.5-24.8 9.9-37.5 15.8-4.4 28.8-16.1 32.8-32.3 3.6-14.3.9-29.8-11.7-38.9-6.3-4.5-13.8-7-21.3-8.1 3.2-26.6 2.8-53.6-12.7-75.1C205.2 14.7 166.4 0 126.9 0z" fill="#336791" />
        <path d="M127.3 22.7c26.5 0 54.1 9.8 66.8 27.5 12.6 17.5 13 41.5 10.2 65.8-9.4-1.2-19.1-.4-28.1 2.8-6.4 2.3-12.2 6.1-16.9 10.8-6.4-11.9-17.4-20.8-30.8-24.4-14.7-4-30.5-1.5-43.2 6.8-5-4.9-11.1-8.7-17.8-11.1-9.1-3.2-18.9-4-28.4-2.8-2.8-24.3-2.4-48.3 10.2-65.8C61.9 32.5 89.6 22.7 127.3 22.7z" fill="#FFFFFF" opacity="0.2" />
      </svg>
    ),
  },
  {
    name: "Git",
    category: "Version Control",
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 256 256" fill="none">
        <path d="M250.9 115.6L140.4 5.1c-6.8-6.8-17.8-6.8-24.6 0L92 28.9l31.2 31.2c7.3-2.5 15.8-.8 21.6 5 5.8 5.8 7.5 14.3 5 21.6l30 30c7.3-2.5 15.8-.8 21.6 5 8.1 8.1 8.1 21.2 0 29.3-8.1 8.1-21.2 8.1-29.3 0-6.1-6.1-7.7-15.1-4.7-22.7l-28-28v60.9c2 .9 3.9 2.2 5.5 3.8 8.1 8.1 8.1 21.2 0 29.3-8.1 8.1-21.2 8.1-29.3 0-8.1-8.1-8.1-21.2 0-29.3 1.9-1.9 4.1-3.3 6.6-4.2V89.4c-2.4-.9-4.7-2.3-6.6-4.2-6-6-7.6-14.8-4.9-22.4L78.6 30.6 5.1 104.1c-6.8 6.8-6.8 17.8 0 24.6l110.5 110.5c6.8 6.8 17.8 6.8 24.6 0l110.7-110.7c6.8-6.8 6.8-17.8 0-24.6z" fill="#F05032" />
      </svg>
    ),
  },
  {
    name: "Java",
    category: "Backend",
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 256 348" fill="none">
        <path d="M96.7 266.3s-22.8 3.5-3.3 5.4c24 2.3 36.6 2.1 63.8-2.6 0 0 7.8 4.9 18.8 9.1-50.6 21.1-137.9 2.5-79.3-11.9z" fill="#E76F00" />
        <path d="M85.3 229.8s-26.3 5-7.4 6.9c23.2 2.3 46 2.5 82.2-3.8 0 0 5.8 5.6 14.1 8.1-61.9 17.8-146.4 5.3-88.9-11.2z" fill="#E76F00" />
        <path d="M141.4 170.8c12.6 14.6 3.3 27.8 3.3 27.8s32.1-16.6 17.2-37.4c-14.4-20-27.4-29.8 36.8-67.9 0 0-82 22.8-57.3 77.5z" fill="#5382A1" />
        <path d="M228.6 300.9s14.8 12.3-16.1 21.7c-48.4 14.8-143.2 15.6-186.7.9-15.3-5.2 16.4-14.4 27.6-16.8 46.2-10 47.9-7.3 93.9-19.4 0 0 11.2 5.6 24 6.7 18.9 1.7 57.3 6.9 57.3 6.9z" fill="#E76F00" />
        <path d="M109.8 120.3c15.8 18.3 4.2 34.8 4.2 34.8s40.3-20.8 21.6-46.9c-18.1-25.1-34.4-37.4 46.2-85.2 0 0-102.9 28.6-72 97.3z" fill="#5382A1" />
      </svg>
    ),
  },
  {
    name: "MongoDB",
    category: "Database",
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 256 564" fill="none">
        <path d="M123.6 563.8c-7.7-10.7-53.8-82.6-77.9-142.3-30.8-76.3-47.8-161.4-45.6-231.2C2.3 118 43.8 52.8 108.6 3.1c7.2-5.5 15.5-3.3 15.5 6v548.8l-.5 5.9z" fill="#47A248" />
        <path d="M132.3 563.8c7.7-10.7 53.8-82.6 77.9-142.3 30.8-76.3 47.8-161.4 45.6-231.2C253.7 118 212.2 52.8 147.4 3.1c-7.2-5.5-15.5-3.3-15.5 6v548.8l.4 5.9z" fill="#499D4A" />
        <path d="M127.9 397.6c-1.3 0-2.4-.7-2.9-1.9-14.8-35.3-7.5-181.7 3.5-226.5.6-2.5 3.7-2.6 4.5-.1 17.5 50.7 20.7 186.2 1.3 226.8-.7 1.1-1.7 1.7-2.9 1.7-.5 0-3.5 0-4.4 0z" fill="#FFFFFF" opacity="0.3" />
      </svg>
    ),
  }
];

interface TechPillMarqueeProps {
  className?: string;
  speed?: number; // duration in seconds
  direction?: 'left' | 'right';
}

export const TechPillMarquee: React.FC<TechPillMarqueeProps> = ({
  className = "",
  speed = 38,
  direction = 'left',
}) => {
  // Duplicate array 3 times to guarantee continuous infinite marquee
  const items = [...TECH_PILLS, ...TECH_PILLS, ...TECH_PILLS];

  return (
    <div
      className={`relative w-full overflow-hidden select-none py-2 ${className}`}
      aria-label="Technologies and frameworks ribbon"
    >
      {/* Soft gradient edge fade masks matching the warm page background */}
      <div className="absolute top-0 bottom-0 left-0 w-16 sm:w-28 bg-gradient-to-r from-[#F5F0EB] via-[#F5F0EB]/90 to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 bottom-0 right-0 w-16 sm:w-28 bg-gradient-to-l from-[#F5F0EB] via-[#F5F0EB]/90 to-transparent z-10 pointer-events-none" />

      {/* Marquee Track with Pause on Hover */}
      <div className="flex overflow-hidden w-full group">
        <motion.div
          animate={{
            x: direction === 'left' ? ["0%", "-33.333%"] : ["-33.333%", "0%"],
          }}
          transition={{
            duration: speed,
            ease: "linear",
            repeat: Infinity,
          }}
          className="flex flex-shrink-0 items-center gap-3 sm:gap-3.5 whitespace-nowrap group-hover:[animation-play-state:paused]"
        >
          {items.map((tech, idx) => (
            <div
              key={`${tech.name}-${idx}`}
              className="inline-flex items-center gap-2.5 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-white border border-[#E8E0D8] shadow-[0_2px_8px_rgba(26,22,20,0.04)] hover:shadow-[0_6px_20px_rgba(196,125,90,0.18)] hover:border-copper/60 hover:-translate-y-0.5 transition-all duration-200 cursor-default"
            >
              <span className="flex-shrink-0 flex items-center justify-center w-5 h-5">
                {tech.icon}
              </span>
              <span className="text-xs sm:text-sm font-medium text-[#1A1614] tracking-tight">
                {tech.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};
