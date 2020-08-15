import React from "react";
import { Box, Typography } from "@material-ui/core";
import { MessageText, MessageMedia, MessageSystem } from "./Message";

import mandzukicImg from "../imgs/mandzukic.jpg";
import pirloImg from "../imgs/pirlo.jpg";

const Example = () => {
  return (
    <Box bgcolor="#eee" px={1} py={3} minHeight="100vh" overflow="hidden">
      <MessageText name="Cristiano Ronaldo">
        Juventus has reacted to its upset by shocking the world further.
        Juventus appointed Andrea Pirlo as head coach Saturday, shortly after
        firing Maurizio Sarri. The coaching change comes just hours after Lyon
        eliminated Juventus from the UEFA Champions League in the round of 16.
        Pirlo’s contract as head coach of the first team will expire in 2022.
        Pirlo had been coach of Juventus’ under-23 team since July 30 and has
        secured a promotion to the big job at warp speed. He has no previous
        managerial or coaching experience. Nevertheless, Juventus’ aims will be
        the same with Pirlo at the helm: win the Serie A (Italian league) title
        for the tenth consecutive season and win the Champions League, European
        men’s club soccer’s elite competition, for the first time since 1996.
      </MessageText>
      <Box pt={2} />
      <MessageText reverse>Good.</MessageText>
      <Box pt={2} />

      <MessageSystem>
        <Typography
          color="textSecondary"
          variant="caption"
          align="center"
          paragraph
        >
          Paulo Dybala join the group chat
        </Typography>
      </MessageSystem>
      <MessageSystem message="You recalled a message." />
      <MessageSystem message="Pavel Nedvěd left the group chat" />

      <MessageMedia name="Del Piero">
        <img src={mandzukicImg}></img>
      </MessageMedia>
      <Box pt={2} />
      <MessageMedia reverse>
        <img src={pirloImg}></img>
      </MessageMedia>
      <Box pt={2} />
    </Box>
  );
};

export default Example;
