import React from "react";
import PropTypes from "prop-types";
import { Box, Typography } from "@material-ui/core";

const MessageSystem = ({ message, children }) => (
  <Box>
    {message && (
      <Typography
        color="textSecondary"
        variant="caption"
        align="center"
        paragraph
      >
        {message}
      </Typography>
    )}
    {children}
  </Box>
);

MessageSystem.propTypes = {
  message: PropTypes.string,
  children: PropTypes.node,
};

export default MessageSystem;
