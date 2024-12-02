import type { CSSProperties, MouseEventHandler } from "react";
import { twMerge } from "tailwind-merge";

export interface SpeakerProps {
  isPlaying: boolean;
  onClick?: MouseEventHandler;
  color?: string;
  speed?: number;
  className?: string;
  style?: CSSProperties;
}

const Speaker = ({
  className,
  style,
  isPlaying,
  onClick,
  speed = 700,
  color = "currentColor",
}: SpeakerProps) => {
  if (isPlaying) {
    return (
      <svg
        viewBox="0 0 36 36"
        fill="none"
        className={twMerge("h-9 w-9", className)}
        onClick={onClick}
        style={style}
      >
        <circle cx="14.8927" cy="17.8184" r="5.37199" fill={color} />
        <circle cx="7.37199" cy="17.8184" r="5.37199" fill={color} />
        <path
          d="M7.37207 12.4696L15.0843 7.82559C16.4173 7.02291 18.116 7.98293 18.116 9.53894V17.8184V26.0978C18.116 27.6538 16.4173 28.6138 15.0843 27.8112L7.37207 23.1671V12.4696Z"
          fill={color}
        />

        <path
          d="M24.0813 21.0179C25.922 19.1773 25.922 16.193 24.0813 14.3523"
          stroke={color}
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <animate
            attributeName="opacity"
            values="0;1;1;1;0;"
            dur={`${speed}ms`}
            begin="0ms"
            fill="freeze"
            repeatCount="indefinite"
          />
        </path>

        <path
          d="M28.1323 25.5527C32.4775 21.2075 32.4775 14.1625 28.1323 9.81732"
          stroke={color}
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <animate
            attributeName="opacity"
            values="0;0;1;0;0;"
            dur={`${speed}ms`}
            begin="0ms"
            fill="freeze"
            repeatCount="indefinite"
          />
        </path>
      </svg>
    );
  }
  return (
    <svg
      viewBox="0 0 36 36"
      fill="none"
      className={twMerge("h-9 w-9", className)}
      onClick={onClick}
      style={style}
    >
      <circle cx="14.8927" cy="17.8184" r="5.37199" fill={color} />
      <circle cx="7.37199" cy="17.8184" r="5.37199" fill={color} />
      <path
        d="M7.37207 12.4696L15.0843 7.82559C16.4173 7.02291 18.116 7.98293 18.116 9.53894V17.8184V26.0978C18.116 27.6538 16.4173 28.6138 15.0843 27.8112L7.37207 23.1671V12.4696Z"
        fill={color}
      />

      <path
        d="M24.0813 21.0179C25.922 19.1773 25.922 16.193 24.0813 14.3523"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M28.1323 25.5527C32.4775 21.2075 32.4775 14.1625 28.1323 9.81732"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Speaker;
