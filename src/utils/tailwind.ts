export function tailwindColorToIntent(color: string) {
  switch (color) {
    case "primary":
      return "primary";
    case "black":
      return "default";
    case "background":
      return "white";
    default:
      return "default";
  }
}
