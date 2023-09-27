import styled from "@emotion/styled";
import { InputBase, alpha } from "@mui/material";

const TabWrapper = styled("div")(({ theme }) => ({
  // backgroundColor: theme.palette.primary.main,
  borderRadius: theme.spacing(1.5),
  width: 36,
  height: 36,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  '&[aria-selected="true"]': {
    backgroundColor: theme.palette.secondary.light,
  },
  ":hover": {
    backgroundColor: theme.palette.secondary.light,
    "& svg": {
      width: 23,
      height: 23,
    },
  },
}));

export { TabWrapper };
