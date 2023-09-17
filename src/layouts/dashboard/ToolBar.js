import React from "react";
import PropTypes from "prop-types";
import {
  AppBar,
  Box,
  Container,
  IconButton,
  Stack,
  Toolbar,
} from "@mui/material";
import Iconify from "../../components/Iconify/Iconify";
import Search from "../../components/Search";
import Profile from "./Profile";

function ToolBar(props) {
  return (
    // <Stack direction={"row"} height={44}>
    //   <Iconify icon={"ion:time-outline"} width={20} height={20} />

    // </Stack>
    <AppBar position="sticky">
      <Container maxWidth="xl" sx={{ height: "100%" }}>
        <Toolbar
          disableGutters
          sx={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={(theme) => ({
              [theme.breakpoints.down("md")]: {
                minWidth: "auto",
              },
              minWidth: 260,
              display: "flex",
              justifyContent: "flex-end",
            })}
          >
            <IconButton
              sx={(theme) => ({
                color:
                  theme.palette.mode === "light"
                    ? "inherit"
                    : theme.palette.text.primary,
              })}
            >
              <Iconify icon={"ion:time-outline"} width={20} height={20} />
            </IconButton>
          </Box>
          <Search
            icon={
              <Iconify icon={"ion:search-outline"} width={20} height={20} />
            }
          />
          <Box
            sx={(theme) => ({
              [theme.breakpoints.down("md")]: {
                minWidth: "auto",
              },
              minWidth: 260,
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
            })}
          >
            <IconButton
              sx={(theme) => ({
                color:
                  theme.palette.mode === "light"
                    ? "inherit"
                    : theme.palette.text.primary,
              })}
            >
              <Iconify
                icon={"material-symbols:help-outline"}
                width={20}
                height={20}
              />
            </IconButton>
            <Profile />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

ToolBar.propTypes = {};

export default ToolBar;
