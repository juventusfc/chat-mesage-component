import React from "react";
import PropTypes from "prop-types";
import { useTheme, makeStyles } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";
import MessageBase from "./MessageBase";

const useStyles = makeStyles((theme) => ({
  arrow: ({ reverse }) => ({
    position: "absolute",
    right: `${reverse ? "-4px" : "auto"}`,
    left: `${reverse ? "auto" : "-4px"}`,
    top: 8,
    width: 0,
    height: 0,
    borderTop: "4px solid transparent",
    borderBottom: "4px solid transparent",
    transform: `${reverse ? "" : "rotate(180deg)"}`,
    borderLeft: `4px solid ${
      reverse ? theme.palette.primary.light : theme.palette.background.paper
    }`,
  }),
}));

const MessageText = ({ reverse = false, avatar = "", name = "", children }) => {
  const classes = useStyles({ reverse });
  const theme = useTheme();
  return (
    <MessageBase reverse={reverse} avatar={avatar} name={name}>
      <Box
        position="relative"
        color={reverse ? theme.palette.primary.contrastText : ""}
        bgcolor={
          reverse ? theme.palette.primary.light : theme.palette.background.paper
        }
        borderRadius={theme.shape.borderRadius}
      >
        <div className={classes.arrow} />
        <Box p={1}>{children}</Box>
      </Box>
    </MessageBase>
  );
};

MessageText.propTypes = {
  reverse: PropTypes.bool,
  avatar: PropTypes.string,
  name: PropTypes.string,
  children: PropTypes.node,
};

export default MessageText;
