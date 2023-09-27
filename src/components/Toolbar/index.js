import styled from "@emotion/styled";
import { Box } from "@mui/material";

const StyledToolBar = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {},
}));

export { StyledToolBar };
