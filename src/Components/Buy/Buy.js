import React from 'react';
import ogrlice from './constants';
import withStyles from '@material-ui/core/styles/withStyles';
import Appbar from '../Home/Appbar';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Card from './Card';
import history from '../../history';
import styles from './styles';

const Buy = ({ classes }) => {
  const handleClick = (key) => event => {
      if (event) {
          event.stopPropagation();
      }

      const ogrlica = ogrlice.find(i => i.id === key);
      const newRoute = { pathname: '/detalji', state: { ogrlica: ogrlica} };
      history.push(newRoute);
  };


  return (
    <div className={classes.container}>
      <Appbar classes={{ root: classes.root }} />
      <Grid container direction="column" className={classes.aboutContainer}>
        <Grid item className={classes.aboutItem}>
          <Typography variant="h5">Narukvice</Typography>
        </Grid>
        <Grid item className={classes.aboutItem}>
          <Grid container>
            {ogrlice.map(ogrlica => (
              <Grid item key={ogrlica.id}>
                <Card price={ogrlica.price} image={ogrlica.image} handleClick={handleClick(ogrlica.id)} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default withStyles(styles)(Buy);
