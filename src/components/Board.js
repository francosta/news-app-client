import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

import NewsCard from './NewsCard';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary
  }
}));

const Board = ({ news }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid articles={news} container spacing={3}>
        <NewsCard />
      </Grid>
    </div>
  );
};

export default Board;
