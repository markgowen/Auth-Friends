import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  card: {
    minWidth: 275,
    maxWidth: 275,
    minHeight: 150,
    maxHeight: 100
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
});

const Friend = props => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography variant="h5" component="h2">
            {props.name}
        </Typography>
        <Typography variant="body2" component="p">
            <br />
            age: {props.age}
            <br />
            email: {props.email} 
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Friend;