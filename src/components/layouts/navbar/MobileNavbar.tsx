import React, { useState } from "react";
import { makeStyles, Theme, AppBar, Toolbar, IconButton, Drawer, List, ListItem, ListItemText, Typography } from "@mui/material";
import  MenuIcon from "@mui/icons-material/Menu";

const useStyles = makeStyles((theme: Theme) => ({
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
}));

interface NavbarProps {
  title: string;
  items: Array<{ text: string; link: string }>;
}


export const MobileNavbar: React.FC<NavbarProps> = ({ title, items }) => {
    // const useStyles = makeStyles({
    //     root: {
    //       backgroundColor: "#f0f0f0",
    //       padding: "10px",
    //     },
    //   });
      
      const classes = useStyles();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = (open: boolean) => (
    event: React.KeyboardEvent | React.MouseEvent
  ) => {
    if (
      event.type === "keydown" &&
      ((event as React.KeyboardEvent).key === "Tab" ||
        (event as React.KeyboardEvent).key === "Shift")
    ) {
      return;
    }

    setIsDrawerOpen(open);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            {title}
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer open={isDrawerOpen} onClose={toggleDrawer(false)}>
        <List className={classes.list}>
          {items.map((item, index) => (
            <ListItem button key={index}>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </div>
  );
};

