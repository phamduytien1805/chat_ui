import React from "react";
import { useTheme } from "@mui/material/styles";
import { Box, Stack, Typography } from "@mui/material";

import { Link, useSearchParams } from "react-router-dom";

import NoChat from "../../assets/Illustration/NoChat";
import { useSelector } from "react-redux";

const GeneralApp = () => {
  const [searchParams] = useSearchParams();

  const theme = useTheme();

  const { sideBar, room_id, chat_type } = useSelector((state) => state.global);

  return (
    <>
      <Stack direction="row" sx={{ width: "100%" }}>
        {/* <Chats /> */}
        {"Layout"}
      </Stack>
    </>
  );
};

export default GeneralApp;
