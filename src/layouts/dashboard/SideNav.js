import React from "react";
import { useTheme } from "@mui/material/styles";

import { Box, Divider, IconButton, Stack } from "@mui/material";
import AntSwitch from "../../components/AntSwitch/AntSwitch";

import SlackLogo from "../../assets/Images/test.png";
import useSettings from "../../hooks/useSettings";
import { Nav_Buttons, Nav_Setting } from "../../data";

import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { UpdateTab } from "../../redux/slices/global";
import TabButton from "../../components/TabButton";
import Profile from "./Profile";

const getPath = (index) => {
  switch (index) {
    case 0:
      return "/app";

    case 1:
      return "/group";

    case 2:
      return "/call";

    case 3:
      return "/settings";

    default:
      break;
  }
};

const SideBar = () => {
  const theme = useTheme();
  const dispatch = useDispatch();

  const { tab } = useSelector((state) => state.global);

  const navigate = useNavigate();

  const { onToggleMode } = useSettings();

  const selectedTab = tab;

  const handleChangeTab = (index) => {
    dispatch(UpdateTab({ tab: index }));
    navigate(getPath(index));
  };

  return (
    <Box
      sx={{
        height: `calc(100vh - ${theme.toolBar}px)`,
        width: theme.sideBar,
        backgroundColor:
          theme.palette.mode === "light"
            ? "#F0F4FA"
            : theme.palette.background.paper,
        boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)",
      }}
    >
      <Stack
        p={1}
        alignItems={"center"}
        justifyContent="space-between"
        sx={{ height: "100%" }}
      >
        <Box display={"flex"} flexDirection={"column"} gap={2}>
          {/* <TabButton
            Icon={() => (
              <img src="https://images.unsplash.com/photo-1588436706487-9d55d73a39e3" />
            )}
            index={-1}
            style={{ marginBottom: 14 }}
          /> */}
          {Nav_Buttons.map((el) => (
            <TabButton Icon={el.Icon} index={el.index} label={el.label} />
          ))}
        </Box>
        <Box display={"flex"} flexDirection={"column"} gap={2}>
          <Profile />
        </Box>
      </Stack>
    </Box>
  );
};

export default SideBar;
