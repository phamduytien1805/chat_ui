import React from "react";
import PropTypes from "prop-types";
import { Box, IconButton, Typography } from "@mui/material";
import { TabWrapper } from "./styled";

function TabButton(props) {
  const { Icon, index, onChangeTab, isSelected, style } = props;
  return (
    <span style={style}>
      <TabWrapper aria-selected={isSelected}>
        <IconButton
          onClick={() => {
            onChangeTab(index);
          }}
          sx={{
            color: "#ffffff",
            p: 0,
          }}
        >
          <Icon weight={isSelected ? "fill" : "light"} />
        </IconButton>
      </TabWrapper>
    </span>
  );
}
//      <Typography variant="button">{label}</Typography>

TabButton.propTypes = {
  index: PropTypes.number,
  Icon: PropTypes.elementType,
  onChangeTab: PropTypes.func,
  isSelected: PropTypes.bool,
  label: PropTypes.string,
  style: PropTypes.object,
};

export default TabButton;
