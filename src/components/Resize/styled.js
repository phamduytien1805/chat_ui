import styled from "@emotion/styled";
import { Box } from "@mui/material";

const Resizer = styled(Box, {
  shouldForwardProp: (props) => !["isDragging"].includes(props),
})(({ theme, isDragging }) => ({
  position: "absolute",
  height: "100%",
  cursor: "col-resize",
  width: 8,
  ":after": {
    left: 4,
    position: "absolute",
    content: '""',
    top: 0,
    bottom: 0,
    ...(isDragging && {
      backgroundColor: "blue",
      boxShadow: " 0 0 0 1px blue",
    }),
  },
  ":hover": {
    ":after": {
      backgroundColor: "blue",
      boxShadow: " 0 0 0 1px blue",
      transition: "background-color 0.15s 0.15s ease-in-out",
    },
    // width: 2,
  },
}));

export { Resizer };
