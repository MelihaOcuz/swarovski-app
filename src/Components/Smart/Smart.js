import React from 'react';
import Grid from '@material-ui/core/Grid';
import withStyles from '@material-ui/core/styles/withStyles';
import Appbar from '../Home/Appbar';
import Typography from '@material-ui/core/Typography';
import styles from './styles';

const Smart = ({ classes }) => (
    <div className={classes.container}>
        <Appbar classes={{ root: classes.root }} />
        <Grid container direction="column" className={classes.aboutContainer}>
            <Grid item className={classes.aboutItem}>
                <Typography variant="h5">Smartswarovski aplikacija</Typography>
            </Grid>
            <Grid item className={classes.aboutItem}>
                <Grid container direction="column">
                    <Grid item className={classes.itemImage}>
                        <img src={'prevod1.png'} alt="prevod1" className={classes.image} />
                    </Grid>
                    <Grid item className={classes.itemImage}>
                        <img src={'prevod2.png'} alt="prevod2" className={classes.image} />
                    </Grid>
                    <Grid item className={classes.itemImage}>
                        <img src={'prevod3.png'} alt="prevod3" className={classes.image} />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    </div>
);

export default withStyles(styles)(Smart);
