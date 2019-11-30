import React from 'react';
import Grid from '@material-ui/core/Grid';
import withStyles from '@material-ui/core/styles/withStyles';
import styles from './styles';
import Link from '@material-ui/core/Link';
import AppBar from '@material-ui/core/AppBar/AppBar';
import Links from './Links';

const Appbar = ({ classes }) => (
    <AppBar position="static" classes={{ root: classes.root }}>
        <Grid container wrap="nowrap" alignItems="center" className={classes.navbarContainer}>
            <Grid item className={classes.navbarLogo}>
                <Link href={'/'} className={classes.smartswarovski}>Smartswarovski</Link>
            </Grid>
            <Grid item className={classes.navbarLinks}>
                <Links />
            </Grid>
        </Grid>
    </AppBar>
);

export default withStyles(styles)(Appbar);
