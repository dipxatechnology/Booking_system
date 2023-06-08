export const RESET = "\x1b[0m";
export const RED = "\x1b[31m";
export const GREEN = "\x1b[32m";
export const YELLOW = "\x1b[33m";
export const BOLD = "\x1b[1m";
export const BRIGHT_BLUE = "\x1b[94m";

export function pColor(text, color = RED, bold = true) {
  const style = bold ? BOLD : "";

  console.log(style + color + text.toUpperCase() + RESET + "\n");
}
export const line = () => {
  console.log(
    YELLOW +
      "\n------------------------------------------------------------------------------------------------\n"
  );
};
