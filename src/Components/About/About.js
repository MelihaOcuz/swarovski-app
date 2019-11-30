import React from 'react';
import Grid from '@material-ui/core/Grid';
import withStyles from '@material-ui/core/styles/withStyles';
import Appbar from '../Home/Appbar';
import Typography from '@material-ui/core/Typography';
import styles from './styles';

const About = ({ classes }) => (
  <div className={classes.container}>
    <Appbar classes={{ root: classes.root }} />
    <Grid container direction="column" className={classes.aboutContainer}>
      <Grid item className={classes.aboutItem}>
        <Typography variant="h5">O nama</Typography>
      </Grid>
      <Grid item className={classes.aboutItem}>
        <Grid container>
          <Grid item className={classes.item}>
            <Typography variant="body2" className={classes.justify}>
              Swarovski je austrijska priča o uspjehu. Krajem 19. vijeka, Danijel Swarovski osnovao je firmu sa ciljem
              da automatski obrađuje kristale. Kompanija je bila enormno uspješna i ubrzo je radila u brojnim oblastima,
              poput proizvodnje optičkih proizvoda, abraziva i alata za brušenje, sječenja kristala i proizvodnje
              dekorativnog kamena napravljenog od kristala. Oni su, uglavnom, korišćeni u industriji nakita i modnoj
              industriji, kao dijelovi lustera, pribor i perle za garderobu i nakit. Swarovski nakit- ogrlice, igle i
              minđuše su popularne širom svijeta. Swarovski kristalne perle se takođe koriste kao ukrasi za haljine,
              cipele i tašne, što ovu kompaniju dovodi u spoj sa visokom modom. Sto trinaest godina posle osnivanja,
              Swarovski kompanija i dalje ima za cilj da se poboljšava. Kompanija, koja je ostala potpuno nezavisna od
              svog osnivanja 1895. danas je prisutna u više od 120 zemalja i zapošljava 20.000 ljudi. Swarovski ima
              proizvodne pogone u šesnaest zemalja i posejduje više od 650 butika širom svijeta.
            </Typography>
          </Grid>
          <Grid item className={classes.item}>
            <img src={'swarowski11.jpeg'} alt="swarowski11" className={classes.image} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  </div>
);

export default withStyles(styles)(About);
