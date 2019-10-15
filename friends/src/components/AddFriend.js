import React, { useState, useEffect } from 'react';

import { axiosWithAuth } from '../utils/AxiosWithAuth';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import { Container } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  root: {
    flexGrow: 1,
    margin: '75px auto'
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  },

  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3)
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: '#3f51b5',
    '&:hover': {
      backgroundColor: '#de5916'
    }
  },
  gridItem: {
    padding: theme.spacing(2)
  }
}));

const AddFriend = ({ friends, setFriends }) => {
  const classes = useStyles();
//   const [friends, setFriends] = useState([]);
  const [newFriend, setNewFriend] = useState({
    name: '',
    age: '',
    email: ''
  });

//   useEffect(() => {
//     axiosWithAuth()
//       .get(`/api/friends`)
//       .then(res => {
//         console.log(res);
//         setFriends(res.data);
//       })
//       .catch(err => {
//         console.log('Error in GET post api', err.response);
//       });
//   },[]);

  const handleChanges = e => {
    setNewFriend({ ...newFriend, [e.target.name]: e.target.value });
  };

  const addFriend = async e => {
    e.preventDefault();
    await axiosWithAuth()
      .post(`/api/friends`, newFriend)
      .then(res => {
        console.log('POST request for newFriend', res);
        setFriends(res.data);
      })
      .catch(err => {
        console.log('Error in POST request for addFriend', err.response);
      });
    setNewFriend('');
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <TextField
              name="name"
              variant="outlined"
              fullWidth
              id="name"
              label="Name"
              autoFocus
              InputProps={{
                classes: {
                  outlined: classes.outlined,
                  focused: classes.focused
                }
              }}
              value={friends.name}
              required
              onChange={handleChanges}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              name="age"
              variant="outlined"
              fullWidth
              id="age"
              label="Age"
              value={friends.age}
              required
              onChange={handleChanges}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="email"
              variant="outlined"
              fullWidth
              id="email"
              label="Email"
              value={friends.email}
              required
              onChange={handleChanges}
            />
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onChange={handleChanges}
            onClick={addFriend}
        >
            Add Friend
        </Button>
        </form>
      </div>
    </Container>
  );
};

export default AddFriend;
