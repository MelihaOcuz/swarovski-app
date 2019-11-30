import React from 'react';
import Grid from '@material-ui/core/Grid';
import withStyles from '@material-ui/core/styles/withStyles';
import Appbar from '../Home/Appbar';
import Typography from '@material-ui/core/Typography';
import styles from './styles';

const Team = ({ classes }) => (
  <div className={classes.container}>
    <Appbar classes={{ root: classes.root }} />
    <Grid container direction="column" className={classes.aboutContainer}>
      <Grid item className={classes.aboutItem}>
        <Typography variant="h5">Upoznajte naš tim</Typography>
      </Grid>
      <Grid item className={classes.aboutItem}>
        <Grid container>
          <Grid item className={classes.itemImage}>
            <img src={'swarovskiteam.jpg'} alt="swarowski_team" className={classes.image} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  </div>
);

export default withStyles(styles)(Team);
