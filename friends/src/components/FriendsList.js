import React, { useState, useEffect } from 'react';

import { axiosWithAuth } from '../utils/AxiosWithAuth';
import Friend from './Friend'

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
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
  const [newFriend, setNewFriend] = useState({ name: '', age: '', email: '' });

  useEffect(() => {
    axiosWithAuth()
      .get(`/api/friends`)
      .then(res => {
        console.log(res);
        setFriends(res.data);
      })
      .catch(err => {
        console.log('Error in GET post api', err.response);
      });
  }, []);

  return (
    <Grid container className={classes.root} justify="center">
        {friends.map(friend => {
            return (
                <Grid item className={classes.gridItem} s>
                    <Friend key={friend.id} name={friend.name} age={friend.age} email={friend.email} />
                </Grid>
                );
            })}
    </Grid>
  )

//   const handleChanges = e => {
//     setNewFriend({ ...newFriend, [e.target.name]: e.target.value });
//   };

//   const addFriend = e => {
//     e.preventDefault();
//     axiosWithAuth()
//       .post(`/api/friends`, newFriend)
//       .then(res => {
//         console.log('POST request for newFriend', res);
//         setNewFriend(res.data);
//       })
//       .catch(err => {
//         console.log('Error in POST request for addFriend', err.response);
//       });
//     setNewFriend('');
//   };

  
};

export default FriendsList;
