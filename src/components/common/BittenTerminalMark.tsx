import React from 'react';

export interface BittenTerminalMarkProps {
  size?: number;
  className?: string;
}

export const BittenTerminalMark: React.FC<BittenTerminalMarkProps> = ({
  size = 36,
  className = '',
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`select-none shrink-0 group ${className}`}
    aria-hidden="true"
  >
    <defs>
      <radialGradient id="cookieGrad" cx="35%" cy="30%" r="70%">
        <stop offset="0%" stopColor="#FDE68A" />
        <stop offset="55%" stopColor="#F59E0B" />
        <stop offset="100%" stopColor="#D97706" />
      </radialGradient>
      <mask id="biteMask">
        <rect width="48" height="48" fill="white" />
        <circle cx="38" cy="10" r="9.5" fill="black" />
        <circle cx="31" cy="5" r="6" fill="black" />
        <circle cx="43" cy="17" r="5.5" fill="black" />
      </mask>
    </defs>

    <g mask="url(#biteMask)">
      <circle cx="22" cy="25" r="18" fill="url(#cookieGrad)" />
      <circle
        cx="22"
        cy="25"
        r="17.2"
        stroke="#FEF3C7"
        strokeOpacity="0.35"
        strokeWidth="1.2"
      />
      <circle cx="14" cy="16" r="1.3" fill="#92400E" fillOpacity="0.35" />
      <circle cx="28" cy="34" r="1.5" fill="#92400E" fillOpacity="0.35" />
      <circle cx="13" cy="33" r="1.1" fill="#92400E" fillOpacity="0.3" />
    </g>

    <path
      d="M14.5 21.5L19.5 25.5L14.5 29.5"
      stroke="#1E1308"
      strokeWidth="2.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <line
      x1="22"
      y1="29.5"
      x2="27.5"
      y2="29.5"
      stroke="#1E1308"
      strokeWidth="2.8"
      strokeLinecap="round"
    />

    <circle
      cx="36.5"
      cy="12.5"
      r="2.1"
      fill="#FBBF24"
      className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
    />
    <circle
      cx="42.5"
      cy="8.5"
      r="1.4"
      fill="#FDE68A"
      className="transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1"
    />
    <circle
      cx="43.5"
      cy="15.5"
      r="1.1"
      fill="#F59E0B"
      className="transition-transform duration-300 group-hover:translate-x-1"
    />
  </svg>
);

