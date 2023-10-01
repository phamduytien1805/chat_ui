import React, { useCallback, useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";

function useResizable(props) {
  const { min, max = Number.MAX_VALUE, overrideCompare = 0, targetRef } = props;

  const isResizing = useRef(false);

  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState(null);
  const [endPosition, setEndPosition] = useState(null);

  const handlePointermove = useCallback(
    (e) => {
      // exit if not resizing
      if (!isResizing.current) return;

      e.stopPropagation();

      const getCurrentOffset = () => {
        if (targetRef?.current) {
          const containerNode = targetRef.current;
          const { left, ...rest } = containerNode.getBoundingClientRect();
          return e.clientX - (overrideCompare ?? left);
        }
      };

      const currentOffset = getCurrentOffset();
      console.log("max", max);

      if (min < currentOffset && currentOffset < max) {
        console.log("currentOffset", currentOffset);
        setPosition(currentOffset);
        setEndPosition(currentOffset);
      }
    },
    [max, min]
  );

  const handlePointerup = useCallback(
    (e) => {
      e.stopPropagation();
      isResizing.current = false;
      setIsDragging(false);
      document.removeEventListener("pointermove", handlePointermove);
      document.removeEventListener("pointerup", handlePointerup);
    },
    [handlePointermove]
  );

  const handlePointerdown = useCallback((e) => {
    e.stopPropagation();
    isResizing.current = true;
    setIsDragging(true);

    document.addEventListener("pointermove", handlePointermove);
    document.addEventListener("pointerup", handlePointerup);
  }, []);

  return {
    position,
    endPosition,
    isDragging,
    setPosition,
    actions: {
      onPointerDown: handlePointerdown,
      onPointerUp: handlePointerup,
    },
  };
}

useResizable.propTypes = {
  min: PropTypes.number,
  max: PropTypes.number,
  targetRef: PropTypes.any,
};

export default useResizable;
