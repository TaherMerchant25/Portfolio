import { cn } from "@/lib/utils";
import { CSSProperties } from "react";

interface BlurFadeTextProps {
  text: string;
  className?: string;
  variant?: {
    hidden: { y: number };
    visible: { y: number };
  };
  duration?: number;
  characterDelay?: number;
  delay?: number;
  yOffset?: number;
  animateByCharacter?: boolean;
}

// CSS-driven so the hero text is visible even if client JS never runs.
const BlurFadeText = ({
  text,
  className,
  duration = 0.4,
  characterDelay = 0.03,
  delay = 0,
  yOffset = 8,
  animateByCharacter = false,
}: BlurFadeTextProps) => {
  const style = (d: number) =>
    ({
      "--bf-y": `${yOffset}px`,
      "--bf-blur": "8px",
      animationDuration: `${duration}s`,
      animationDelay: `${d}s`,
    } as CSSProperties);

  if (animateByCharacter) {
    return (
      <div className="flex">
        {Array.from(text).map((char, i) => (
          <span
            key={i}
            className={cn("blur-fade inline-block", className)}
            style={{
              ...style(delay + i * characterDelay),
              width: char.trim() === "" ? "0.2em" : "auto",
            }}
          >
            {char}
          </span>
        ))}
      </div>
    );
  }

  return (
    <div className="flex">
      <span
        className={cn("blur-fade inline-block", className)}
        style={style(delay)}
      >
        {text}
      </span>
    </div>
  );
};

export default BlurFadeText;
