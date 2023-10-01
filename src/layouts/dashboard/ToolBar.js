import React from "react";
import PropTypes from "prop-types";
import { AppBar, Box, Container, IconButton, Stack } from "@mui/material";
import Iconify from "../../components/Iconify/Iconify";
import Search from "../../components/Search";
import { StyledToolBar } from "../../components/Toolbar";

import Profile from "./Profile";

function ToolBar(props) {
  return (
    <AppBar
      position="sticky"
      sx={{
        "&.MuiAppBar-root": {
          boxShadow: "none",
        },
      }}
    >
      <Container
        maxWidth="xl"
        sx={(theme) => ({ height: theme.toolBar, p: 0.75 })}
      >
        <StyledToolBar>
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
                padding: 0.5,
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
                padding: 0.5,
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
          </Box>
        </StyledToolBar>
      </Container>
    </AppBar>
  );
}

ToolBar.propTypes = {};

export default ToolBar;
