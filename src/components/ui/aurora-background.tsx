"use client";
import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

interface AuroraBackgroundProps extends React.HTMLProps<HTMLDivElement> {
  children: ReactNode;
  showRadialGradient?: boolean;
}

export const AuroraBackground = ({
  className,
  children,
  showRadialGradient = true,
  ...props
}: AuroraBackgroundProps) => {
  return (
    <main>
      <div
        className={cn(
          // Usa as variáveis --background e --foreground do seu globals.css
          "transition-bg relative flex h-[100vh] flex-col items-center justify-center bg-background text-foreground",
          className,
        )}
        {...props}
      >
        <div
          className="absolute inset-0 overflow-hidden"
          style={
            {
              // Definição das variáveis de cor para o gradiente
              "--primary-main": "#6e055f",
              "--primary-light": "#a94ca0",
              "--secondary-main": "#d39644",
              "--secondary-light": "#e6a95b",
              "--tertiary-mix": "#c774b9", // Cor de transição entre primária e secundária

              "--dark-bg": "#111111", // Cor do seu tema escuro
              "--light-bg": "#fcfcfc", // Cor do seu tema claro
              "--transparent": "transparent",

              // Gradiente principal com as suas cores
              "--aurora":
                "repeating-linear-gradient(100deg,var(--primary-main)_10%,var(--secondary-main)_15%,var(--tertiary-mix)_20%,var(--secondary-light)_25%,var(--primary-light)_30%)",
              "--dark-gradient":
                "repeating-linear-gradient(100deg,var(--dark-bg)_0%,var(--dark-bg)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--dark-bg)_16%)",
              "--white-gradient":
                "repeating-linear-gradient(100deg,var(--light-bg)_0%,var(--light-bg)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--light-bg)_16%)",
            } as React.CSSProperties
          }
        >
          <div
            className={cn(
              // Aplicação dos gradientes com as suas cores via Tailwind CSS
              `after:animate-aurora pointer-events-none absolute -inset-[10px] [background-image:var(--white-gradient),var(--aurora)] [background-size:300%,_200%] [background-position:50%_50%,50%_50%] opacity-50 blur-[10px] invert filter will-change-transform 
              [--aurora:repeating-linear-gradient(100deg,var(--primary-main)_10%,var(--secondary-main)_15%,var(--tertiary-mix)_20%,var(--secondary-light)_25%,var(--primary-light)_30%)] 
              [--dark-gradient:repeating-linear-gradient(100deg,var(--dark-bg)_0%,var(--dark-bg)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--dark-bg)_16%)] 
              [--white-gradient:repeating-linear-gradient(100deg,var(--light-bg)_0%,var(--light-bg)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--light-bg)_16%)] 
              after:absolute after:inset-0 after:[background-image:var(--white-gradient),var(--aurora)] after:[background-size:200%,_100%] after:[background-attachment:fixed] after:mix-blend-difference after:content-[""] 
              dark:[background-image:var(--dark-gradient),var(--aurora)] dark:invert-0 after:dark:[background-image:var(--dark-gradient),var(--aurora)]`,

              showRadialGradient &&
                `[mask-image:radial-gradient(ellipse_at_100%_0%,black_10%,var(--transparent)_70%)]`,
            )}
          ></div>
        </div>
        {children}
      </div>
    </main>
  );
};