import React, { useState, useEffect } from 'react';

import { axiosWithAuth } from '../utils/AxiosWithAuth';
import Friend from './Friend'
import AddFriend from './AddFriend';

import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core'
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap'
    },
    root: {
      flexGrow: 1,
      margin: '75px auto'
    },
    gridItem: {
      padding: theme.spacing(2)
    }
  }));

const FriendsList = props => {
    const classes = useStyles();
    const [friends, setFriends] = useState([]);

  useEffect(() => {
    axiosWithAuth()
      .get(`/api/friends`)
      .then(res => {
        
          setFriends(res.data);
          console.log(friends);
      })
      .catch(err => {
        console.log('Error in GET post api', err.response);
      });
  },[]);

  if (friends.length === 0) {
      return <h2>'Loading friends...'</h2>
  }

  return (
      <Container className={classes.container}>
      <AddFriend friends={friends} setFriends={setFriends} />
        <Grid container className={classes.root} justify="center">
            {friends.map(friend => {
                return (
                    <Grid item className={classes.gridItem} s>
                        <Friend key={friend.id} name={friend.name} age={friend.age} email={friend.email} />
                    </Grid>
                    );
                })}
        </Grid>
    </Container>
  );
};

export default FriendsList;
