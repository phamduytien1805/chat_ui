import React from "react";
import { useTheme } from "@mui/material/styles";
import { Box, Stack, Typography } from "@mui/material";

import { Link, useSearchParams } from "react-router-dom";

import NoChat from "../../assets/Illustration/NoChat";
import { useSelector } from "react-redux";
import WorkSpace from "../../layouts/dashboard/WorkSpace";

const GeneralApp = () => {
  const [searchParams] = useSearchParams();

  const theme = useTheme();

  const { sideBar, room_id, chat_type } = useSelector((state) => state.global);

  return <WorkSpace />;
};

export default GeneralApp;
