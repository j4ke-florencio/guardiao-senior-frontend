
import React from 'react';

const LogoIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 2L3.9375 5.0625V11.4375C3.9375 16.9688 7.40625 21.6562 12 22.875C16.5938 21.6562 20.0625 16.9688 20.0625 11.4375V5.0625L12 2ZM12 4.125L18.1875 6.375V11.4375C18.1875 15.8438 15.375 19.6875 12 20.625C8.625 19.6875 5.8125 15.8438 5.8125 11.4375V6.375L12 4.125Z"
    />
  </svg>
);

export default LogoIcon;