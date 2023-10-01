import { useTheme } from "@mui/material";
import useResponsive from "./useResponsive";

export function useWidth() {
  const theme = useTheme();

  const keys = [...theme.breakpoints.keys].reverse();

  return (
    keys.reduce((output, key) => {
      const matches = useResponsive("up", key);

      return !output && matches ? key : output;
    }, null) || "xs"
  );
}
