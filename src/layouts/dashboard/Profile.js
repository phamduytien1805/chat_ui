import React from "react";
import PropTypes from "prop-types";
import { Avatar, Box } from "@mui/material";
import { PresenceBadge } from "../../components/Badge/PresenceBadge";

function Profile(props) {
  return (
    <Box display={"flex"} sx={{ borderRadius: "50%" }}>
      <PresenceBadge
        overlap="square"
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        variant="dot"
      >
        <Avatar
          sx={{ bgcolor: "orange", width: 36, height: 36, borderRadius: 1 }}
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
