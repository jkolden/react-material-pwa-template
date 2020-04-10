import React, { useContext, useEffect, useState } from "react";
import { EntriesContext } from "../EntriesContext";
import { useHistory } from "react-router-dom";
import swal from "sweetalert";

import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Box from "@material-ui/core/Box";
import { Button } from "@material-ui/core";

import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import DailyHours from "../components/DailyHours";
import SimpleList from "../components/SimpleList";
import Spinner from "../hooks/Spinner";

import utcDateParamFormat from "../utilities/utcDateParamFormat";
import LongDateFormat from "../utilities/LongDateFormat";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  float: {
    float: "left",
  },
  buttonContainer: {
    display: "flex",
  },
  buttons: {
    width: "100%",
    margin: ".5em",
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
  },
  fixedHeight: {
    height: 180,
  },
}));

export default function DailySummary({ match }) {
  const history = useHistory();

  const classes = useStyles();

  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return (
    <div className={classes.root}>
      <CssBaseline />

      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
      </main>
    </div>
  );
}
