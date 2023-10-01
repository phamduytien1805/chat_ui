import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { Box, Stack, Unstable_Grid2 as Grid, useTheme } from "@mui/material";
import Resizer from "../../components/Resize";
import classNames from "classnames";
import useResizable from "../../hooks/useResizeable";
import { useWidth } from "../../hooks/useWidth";

const minWidth = 176;
function WorkSpace(props) {
  const { SideContent, PrimaryContent } = props;

  const resizerRef = useRef(null);
  const theme = useTheme();

  const {
    position: dynamicWidth,
    isDragging,
    actions: { onPointerDown, onPointerUp },
    setPosition,
  } = useResizable({
    min: minWidth,
    targetRef: resizerRef,
    overrideCompare: theme.sideBar,
  });

  return (
    <Box
      className={classNames("view_content")}
      display={"flex"}
      sx={{
        backgroundColor:
          theme.palette.mode === "light"
            ? "#F0F4FA"
            : theme.palette.background.paper,
        width: "100%",
      }}
    >
      <Box
        height={"100%"}
        position={"relative"}
        flexGrow={1}
        display={"flex"}
        sx={{
          backgroundColor: theme.palette.background.default,
          "--Grid-borderWidth": "1px",
          borderTop: "var(--Grid-borderWidth) solid",
          borderLeft: "var(--Grid-borderWidth) solid",
          borderColor: "divider",
          borderRadius: 1,
          "& > div:not(#p-resizer)": {
            borderRight: "var(--Grid-borderWidth) solid",
            borderBottom: "var(--Grid-borderWidth) solid",
            borderColor: "divider",
          },
        }}
      >
        <Box
          className={classNames("view_content_side")}
          minWidth={`${minWidth}px`}
          sx={{
            ...(dynamicWidth ? { width: dynamicWidth } : { flexGrow: 1 }),
          }}
        >
          <SideContent />
        </Box>
        <Box
          className={classNames("view_content_primary")}
          sx={{
            flexGrow: 3,
          }}
        >
          <PrimaryContent />
        </Box>
        <Resizer
          ref={resizerRef}
          onPointerDown={onPointerDown}
          onPointerUp={onPointerUp}
          isDragging={isDragging}
          position={dynamicWidth}
        />
      </Box>
    </Box>
  );
}

WorkSpace.propTypes = {
  SideContent: PropTypes.elementType,
  PrimaryContent: PropTypes.elementType,
};
WorkSpace.defaultProps = {
  SideContent: () => <></>,
  PrimaryContent: () => <>ok</>,
};

export default WorkSpace;
