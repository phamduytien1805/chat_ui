import { Resizer as _Resizer } from "./styled";
import React, {
  forwardRef,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import PropTypes from "prop-types";
import useResponsive from "../../hooks/useResponsive";
import { isNumber } from "lodash";

const Resizer = forwardRef((props, ref) => {
  const { onPointerDown, onPointerUp, isDragging, position, sx, ...rest } =
    props;

  const setResizerPosition = (pos) => {
    const viewContentSidePort =
      document.getElementsByClassName("view_content_side")[0];

    const resizer = document.getElementById("p-resizer");

    if (isNumber(pos) && resizer) {
      resizer.style.left = `${pos - 4}px`;
      return;
    }

    if (viewContentSidePort && resizer) {
      const currentWidth = viewContentSidePort.clientWidth;
      resizer.style.left = `${currentWidth - 4}px`;
    }
  };

  useEffect(() => {
    setResizerPosition(position);
  }, [position]);

  return (
    <_Resizer
      id="p-resizer"
      ref={ref}
      onPointerDown={onPointerDown}
      onPointerUp={onPointerUp}
      isDragging={isDragging}
      sx={sx}
      {...rest}
    />
  );
});

Resizer.propTypes = {
  onPointerDown: PropTypes.func,
  onPointerUp: PropTypes.func,
};
Resizer.defaultProps = {
  onPointerDown: () => {},
  onPointerUp: () => {},
};

export default Resizer;
