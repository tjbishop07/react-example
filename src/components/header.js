import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppContext from "../AppContext";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";

const useStyles = makeStyles((theme) => ({
  header: {
    flexGrow: 1,
  },
}));

// UI has full control over how many results
const CustomHeader = () => {
  const classes = useStyles();
  return (
    <AppContext.Consumer>
      {(state) => (
        <AppBar position="fixed">
          <Toolbar>
            <Typography variant="h6" className={classes.header}>
              USERS:&nbsp;
              {state.users && state.users.length ? state.users.length : "--"}
            </Typography>
            <ButtonGroup color="default" edge="end">
              <Button
                variant="contained"
                onClick={() => {
                  state.clearUsers();
                  state.setUsers(100);
                }}
              >
                100
              </Button>
              <Button
                variant="contained"
                onClick={() => {
                  state.clearUsers();
                  state.setUsers(500);
                }}
              >
                500
              </Button>
              <Button
                variant="contained"
                onClick={() => {
                  state.clearUsers();
                  state.setUsers(1000);
                }}
              >
                1000
              </Button>
            </ButtonGroup>
          </Toolbar>
        </AppBar>
      )}
    </AppContext.Consumer>
  );
};

export default CustomHeader;
