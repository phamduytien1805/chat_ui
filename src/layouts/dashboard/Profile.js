import React from "react";
import PropTypes from "prop-types";
import { Avatar, Box } from "@mui/material";
import { PresenceBadge } from "../../components/Badge/PresenceBadge";

function Profile(props) {
  return (
    <Box display={"flex"}>
      <PresenceBadge
        overlap="square"
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        variant="dot"
      >
        <Avatar
          sx={{ bgcolor: "orange", width: 24, height: 24 }}
          variant="square"
        >
          N
        </Avatar>
      </PresenceBadge>
    </Box>
  );
}

Profile.propTypes = {};

export default Profile;
