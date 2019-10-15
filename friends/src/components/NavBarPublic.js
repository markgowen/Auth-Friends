import React from 'react';
import { Route, Link, Switch } from 'react-router-dom'

import FriendsList from './FriendsList'
import SignIn from './SignIn'

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    margin: 'auto'
  },
  title: {
    flexGrow: 1,
    
  },
}));

export default function NavBarPublic() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Friends
          </Typography>
          <Button Link to='/signin' color="inherit">Sign In</Button>
        </Toolbar>
      </AppBar>
      <Switch>
        <Route path='/dashboard' component={FriendsList} />
        <Route path='/signin' component={SignIn} />
        <Route component={SignIn} />
      </Switch>
    </div>
  );
}