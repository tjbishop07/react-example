import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppContext from "../AppContext";
import Grid from "@material-ui/core/Grid";
import Modal from "@material-ui/core/Modal";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 10,
  },
  media: {
    height: 140,
  },
  mediaLarge: {
    height: 340,
  },
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

// This could be potentially broken down to another "card" component that is shared between the grid and modal as well
const UserList = () => {
  const [selectedUserIndex, setSelectedUserIndex] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const classes = useStyles();

  return (
    <AppContext.Consumer>
      {(state) =>
        state.users && state.users.length > 0 ? (
          <div className={classes.root}>
            <Grid container spacing={2}>
              {state.users.map((user, index) => (
                <Grid item xs={12} sm={6} lg={3} key={index}>
                  <Card
                    className={classes.root}
                    onClick={() => {
                      setModalOpen(true);
                      setSelectedUserIndex(index);
                    }}
                  >
                    <CardActionArea>
                      <CardMedia
                        className={classes.media}
                        image={user.picture.medium}
                        title={user.name.first}
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                          {user.name.first} {user.name.last}
                        </Typography>
                        <Typography color="textSecondary" component="p">
                          {user.dob.age} / {user.gender}
                        </Typography>
                        <Typography color="textSecondary" component="p">
                          {user.email}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                    <CardActions>
                      <Button size="small" color="primary">
                        Learn More
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
            <Modal open={modalOpen} onBackdropClick={() => setModalOpen(false)}>
              <Card style={{ margin: "50px" }}>
                <CardActionArea>
                  <CardMedia
                    className={classes.mediaLarge}
                    image={state.users[selectedUserIndex].picture.large}
                    title={state.users[selectedUserIndex].name.first}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {state.users[selectedUserIndex].name.first}{" "}
                      {state.users[selectedUserIndex].name.last}
                    </Typography>
                    <Typography color="textSecondary" component="p">
                      {state.users[selectedUserIndex].dob.age} /{" "}
                      {state.users[selectedUserIndex].gender}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      {state.users[selectedUserIndex].email}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      Phone: {state.users[selectedUserIndex].phone}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button
                    size="small"
                    color="primary"
                    onClick={() => setModalOpen(false)}
                  >
                    Close
                  </Button>
                </CardActions>
              </Card>
            </Modal>
          </div>
        ) : (
          <h3>Select a user count to get started...</h3>
        )
      }
    </AppContext.Consumer>
  );
};

export default UserList;
