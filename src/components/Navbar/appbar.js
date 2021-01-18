import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import HomeIcon from "@material-ui/icons/Home";
import BuildIcon from "@material-ui/icons/Build";
import DescriptionIcon from "@material-ui/icons/Description";
import PersonIcon from "@material-ui/icons/Person";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
}));

export default function ButtonAppBar(props) {
  const [openDrawer, setOpenDrawer] = useState(false);

  const classes = useStyles();

  const MovetoPage = (index) => {
    switch (index) {
      case 0:
        props.history.push("./");
        break;
      case 1:
        props.history.push("./my-projects");
        break;
      case 2:
        props.history.push("./resume");
        break;
      case 3:
        props.history.push("./about-me");
        break;

      default:
        break;
    }

    setOpenDrawer(false);
  };

  return (
    <>
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
              onClick={() => setOpenDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              News
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </div>
      <Drawer
        anchor="left"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <div className={classes.list}>
          <List>
            {["Home", "Projects", "Resume", "About Me"].map((text, index) => (
              <ListItem button key={text} onClick={() => MovetoPage(index)}>
                <ListItemIcon>
                  {index === 0 && <HomeIcon />}
                  {index === 1 && <BuildIcon />}
                  {index === 2 && <DescriptionIcon />}
                  {index === 3 && <PersonIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </div>
      </Drawer>
    </>
  );
}
