import React from "react";

export function BackgroundLines() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      <div className="w-full h-full relative">
        {[...Array(8)].map((_, i) => {
        const left = `${(i * 100) / 7}%`;
        const delay = `${(i % 4) * 0.7}s`;
        const height = `${60 + (i % 4) * 15}px`;
        const duration = `${5 + (i % 3)}s`;

        return (
            <div
            key={i}
            className="absolute bottom-[-80px] w-px bg-white/10 animate-line-up"
            style={{
                left,
                height,
                animationDelay: delay,
                animationDuration: duration,
            }}
            />
        );
        })}
      </div>
    </div>
  );
}
