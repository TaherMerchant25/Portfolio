import { cn } from "@/lib/utils";
import { CSSProperties } from "react";

interface BlurFadeProps {
  children: React.ReactNode;
  className?: string;
  variant?: {
    hidden: { y: number };
    visible: { y: number };
  };
  duration?: number;
  delay?: number;
  yOffset?: number;
  inView?: boolean;
  inViewMargin?: string;
  blur?: string;
}

// CSS-driven so content is never hidden behind hydration: the entrance
// animation runs from the stylesheet, not from JS.
const BlurFade = ({
  children,
  className,
  duration = 0.4,
  delay = 0,
  yOffset = 6,
  blur = "6px",
}: BlurFadeProps) => {
  return (
    <div
      className={cn("blur-fade", className)}
      style={
        {
          "--bf-y": `${yOffset}px`,
          "--bf-blur": blur,
          animationDuration: `${duration}s`,
          animationDelay: `${0.04 + delay}s`,
        } as CSSProperties
      }
    >
      {children}
    </div>
  );
};

export default BlurFade;
