export const INTERACTIVE_OBJECT_STYLES = {
  hoverDefault:
    "hover:scale-[1.02] transition-all duration-300 ease-in-out hover:cursor-pointer hover:drop-shadow-[0_0_20px_rgba(74,222,128,0.3)] hover:brightness-105 hover:contrast-105 hover:saturate-110",

  hoverGlow:
    "hover:scale-105 hover:drop-shadow-[0_0_30px_rgba(74,222,128,0.6)]",

  disabled:
    "opacity-40 pointer-events-none",

  completed:
    "brightness-125 saturate-125",

  locked:
    "opacity-50 grayscale",
} as const;

export type InteractiveObjectStyle =
  keyof typeof INTERACTIVE_OBJECT_STYLES;