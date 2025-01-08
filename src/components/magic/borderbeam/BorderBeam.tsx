"use client";

interface BorderBeamProps {
  size?: number;
  duration?: number;
  delay?: number;
  colorFrom?: string;
  colorTo?: string;
}

export default function BorderBeam({
  size = 200,
  duration = 12,
  delay = 0,
  colorFrom = "var(--color-one)",
  colorTo = "var(--color-two)",
}: BorderBeamProps) {
  return (
    <div
      className="absolute inset-0 overflow-hidden rounded-[inherit]"
      style={
        {
          "--beam-size": `${size}px`,
          "--beam-duration": `${duration}s`,
          "--beam-delay": `${delay}s`,
          "--beam-color-from": colorFrom,
          "--beam-color-to": colorTo,
        } as React.CSSProperties
      }
    >
      <div className="absolute inset-0 animate-border-beam" />
    </div>
  );
}
