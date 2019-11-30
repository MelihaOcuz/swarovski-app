import React from 'react';
import Grid from '@material-ui/core/Grid';
import withStyles from '@material-ui/core/styles/withStyles';
import Appbar from '../Home/Appbar';
import Typography from '@material-ui/core/Typography';
import styles from './styles';

const Contact = ({ classes }) => (
    <div className={classes.container}>
        <Appbar classes={{ root: classes.root }} />
        <Grid container direction="column" className={classes.aboutContainer}>
            <Grid item className={classes.aboutItem}>
                <Typography variant="h5">Kontakt</Typography>
            </Grid>
            <Grid item className={classes.aboutItem}>
                <Grid container>
                    <Grid item className={classes.item}>
                        <Typography variant="body2">
                            Nalazimo se na adresi Maršala Tita 14a.
                        </Typography>
                        <Typography variant="body2" className={classes.paddingTop}>
                            Radno vrijeme od ponedjeljka do subote od 9:00h do 21:00h, nedjeljom od 10:00h do 18:00h.
                        </Typography>
                        <Typography variant="body2" className={classes.paddingTop}>
                            Za sva dodatna pitanja, pozovite broj 033 829 504.
                        </Typography>
                    </Grid>
                    <Grid item className={classes.item}>
                        <img src={'swarovskimapa.png'} alt="swarowski20" className={classes.image} />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    </div>
);

export default withStyles(styles)(Contact);
