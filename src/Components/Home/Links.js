import React from 'react';
import Grid from '@material-ui/core/Grid';
import withStyles from '@material-ui/core/styles/withStyles';
import Link from '@material-ui/core/Link/Link';
import styles from './styles';

const links = [
  { route: '/o-nama', name: 'O nama' },
  { route: '/nas-tim', name: 'Naš tim' },
  { route: '/loyalty-program', name: 'Loyalty program' },
  { route: '/kontakt', name: 'Kontakt' },
  { route: '/smartswarovski-aplikacija', name: 'Smartswarovski aplikacija' },
  { route: '/kupi', name: 'Kupi' },
];

const Links = ({ classes }) => (
  <Grid container wrap="nowrap" justify="flex-end" alignItems="center">
    {links.map(link => (
      <Grid item className={classes.route} key={link.name}>
        <Link href={link.route} className={classes.link}>
          {link.name}
        </Link>
      </Grid>
    ))}
  </Grid>
);

export default withStyles(styles)(Links);
