import React, { useState, useContext } from "react";
import {
  AppBar,
  Toolbar,
  Avatar,
  Typography,
  IconButton,
  SwipeableDrawer,
  Dialog,
  Slide,
  Icon,
} from "@material-ui/core";
import {
  Menu,
  KeyboardBackspace,
  Favorite,
  Brightness4,
  Brightness7,
} from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import { UserContext } from "../context/UserContext";

import emily from "../assets/images/emily.jpg";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    marginLeft: theme.spacing(2),
  },
  wrapIcon: {
    verticalAlign: "middle",
    marginLeft: theme.spacing(2),
  },
}));

const SlideTransition = React.forwardRef(function TransitionComponent(
  props,
  ref
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function TopNav({ themeMode, lightMode, darkMode }) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [dialogueOpen, setDialogueOpen] = useState(false);
  const { user, setUser } = useContext(UserContext);

  return (
    <AppBar position="static" thememode={themeMode}>
      <Toolbar>
        <IconButton color="inherit" onClick={() => setOpen(!open)}>
          <Menu />
        </IconButton>
        <div style={{ flex: 12 }} />
        {themeMode === "light" ? (
          <IconButton color="inherit" onClick={darkMode}>
            <Brightness4 />
          </IconButton>
        ) : (
          <IconButton color="inherit" onClick={lightMode}>
            <Brightness7 />
          </IconButton>
        )}

        <div style={{ flexGrow: 1 }} />
        <Avatar
          src={`data:image/jpeg;base64,${user.image}`}
          alt="Oracle"
          onClick={() => setDialogueOpen(true)}
        ></Avatar>
      </Toolbar>

      <SwipeableDrawer
        open={open}
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        disableSwipeToOpen={false}
        PaperProps={{ style: { minWidth: "50vw" } }}
      >
        <span>Navigation</span>
      </SwipeableDrawer>
      <Dialog
        open={dialogueOpen}
        fullScreen
        TransitionComponent={SlideTransition}
      >
        <IconButton onClick={() => setDialogueOpen(false)}>
          <KeyboardBackspace />
        </IconButton>
      </Dialog>
    </AppBar>
  );
}
