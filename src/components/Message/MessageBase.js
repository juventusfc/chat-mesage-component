import React from "react";
import PropTypes from "prop-types";
import { Box, Avatar, Typography } from "@material-ui/core";

const MessageBase = ({ reverse = false, avatar = "", name = "", children }) => {
  const [avatarWidth, setAvatarWidth] = React.useState();
  const avatarRef = React.useRef(null);

  React.useEffect(() => {
    const avatarEl = avatarRef.current;
    if (avatarEl) {
      const { width } = avatarEl.getBoundingClientRect();
      setAvatarWidth(width);
    }
  }, []);

  return (
    <Box display="flex" flexDirection={reverse ? "row-reverse" : "row"}>
      <Avatar ref={avatarRef} variant="rounded" src={avatar} />
      <Box display="flex" flexDirection="column" mx={1}>
        {!reverse && (
          <Typography variant="caption" color="textSecondary">
            {name}
          </Typography>
        )}
        {children}
      </Box>
      <Box width={avatarWidth} height={avatarWidth} flexShrink={0} />
    </Box>
  );
};

MessageBase.propTypes = {
  reverse: PropTypes.bool,
  avatar: PropTypes.string,
  name: PropTypes.string,
  children: PropTypes.element,
};

export default MessageBase;
