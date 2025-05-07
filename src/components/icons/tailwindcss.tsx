// components/tailwind.tsx
import React from "react";

const TailwindLogo: React.FC<{ size?: number }> = ({ size = 48 }) => {
  return (
    <div className="flex items-center gap-2 text-blue-500">
      <svg
        width={size}
        height={size}
        viewBox="0 0 50 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="currentColor"
          d="M25 12.5c-5.9 0-9.6 3-11 9 2.2-3 4.5-4.2 7-3.8 1.5.2 2.6 1.2 3.9 2.6 2 2.1 4.1 4.4 8.6 4.4 5.9 0 9.6-3 11-9-2.2 3-4.5 4.2-7 3.8-1.5-.2-2.6-1.2-3.9-2.6-2-2.1-4.1-4.4-8.6-4.4Zm-11 12.5c-5.9 0-9.6 3-11 9 2.2-3 4.5-4.2 7-3.8 1.5.2 2.6 1.2 3.9 2.6 2 2.1 4.1 4.4 8.6 4.4 5.9 0 9.6-3 11-9-2.2 3-4.5 4.2-7 3.8-1.5-.2-2.6-1.2-3.9-2.6-2-2.1-4.1-4.4-8.6-4.4Z"
        />
      </svg>
    </div>
  );
};

export default TailwindLogo;
