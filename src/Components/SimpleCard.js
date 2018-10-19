import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';

const styles = {
  card: {
    minWidth: 275,
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  grid: {
    marginTop: 100
  },
  cardActions: {
    justifyContent: "center"
  }
};

function SimpleCard(props) {
  const { classes, author, content, handler, url} = props;

  return (
    <Grid className={classes.grid} container alignItems="center" justify="center">
      <Card className={classes.card} align="center">
        <CardContent>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
            Random Quote
        </Typography>
          <Typography variant="h5" component="h2" dangerouslySetInnerHTML={{ __html: content }}>
          </Typography>
          <Typography component="p" dangerouslySetInnerHTML={{ __html: author }}>
          </Typography>
        </CardContent>
        <CardActions className={classes.cardActions}>
          <Button variant="outlined" onClick={handler} >New Quote</Button>
          <a href={url}>
            Tweet This
            </a>
        </CardActions>
      </Card>
    </Grid>
  );
}

SimpleCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleCard);
