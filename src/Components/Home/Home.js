import React from 'react';
import Grid from '@material-ui/core/Grid';
import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';
import Appbar from './Appbar';
import styles from './styles';

const Home = ({ classes }) => (
  <div className={classes.home}>
    <div className={classes.container}>
      <Appbar />
      <Grid container direction="column" justify="center" alignItems="center" className={classes.containerTitle}>
        <Grid item>
          <Typography variant="h3">Zdrav život sa stilom</Typography>
        </Grid>
        <Grid item>
          <Typography variant="h3">#smartswarovski</Typography>
        </Grid>
      </Grid>
    </div>
    <div className={classes.textContainer}>
      <Grid container direction="column" className={classes.containerBody}>
        <Grid item>
          <Grid container>
            <Grid item className={classes.leftItemBody}>
              <Typography variant="body2" className={classes.justify}>
                Kroz strategiju odnosa sa kupcima zasnovane na osnovu mogućnosti interakcije sa klijentima i prilagodbe
                proizvoda, želimo tržištu ponuditi Swarovski pametnu narukvicu. Kupci i korisnici već postojećih
                pametnih narukvica kao negativnu recenziju većinski ostavljaju, pored visoke cijene- nedovoljno
                esteteski razvijen i prihvatljiv izgled. Pametna narukvica pruža mogućnosti za praćenje svih
                cjelodnevnih aktivnosti. Broji korake, udaljenost i potrošene kalorije, dok se s donje strane nalazi
                čitač otkucaja srca koji će te podatke, kao i sve druge, poslati preko bežične Bluetooth 4.0 veze i
                posebne aplikacije na pametni telefon (iOS i Android) gdje ih je moguće svakodnevno pratiti, odnosno
                dijeliti podatke na društvenim mrežama i sa kontaktima. Pored već popularizirane prodaje čisto estetskih
                ukrasa, dodana vrijednost za kupce se ogleda u podizanju stepena aktivnosti, svijesti o uticaju
                neaktivnosti na organizam, kao i mogućnost GPS praćenja. Stvarni nedostatak na tržištu rješiv
                proizvodnjom Swarovski pametne narukvice isporučuje kupcima željeni proizvod. Dakle, uz kvalitetne i
                vodootporne materijale praćenje zdravlja i tjelesnih aktivnosti te čitač otkucaja srca predstavlja
                praćenje ponude novih gadgeta, koje kupci smatraju potrebnim iz zdravstvenih, praktičnih razloga ili
                uvjerenja o praćenju novih trendova.
              </Typography>
            </Grid>
            <Grid item className={classes.leftItemBody}>
              <Typography variant="body2" className={classes.justify}>
                Poznato je da je u današnje vrijeme jako popularan nakit sa Swarovski elementima. Smatra se jako
                elegantnim. Ovakav nakit nije popularan samo kod žena zrelije dobi, sve je više popularan kod mlađih
                žena i tinejdžerki. Korisnici za koje su namjenjeni novi proizvodi podrazumijevaju i ženske osobe,
                starosne dobi od 15-16 godina pa do poznih godina, starosti. Kako namjena pametne narukvice
                podrazumijeva širu upotrebu od samog modnog detalja ili ukrasa smatra se da će biti jako popularna.
                Obzirom da je Swarovski nakit elegantan i smjeran, pogodan je za formalne i neformalne prilike kao i za
                svečanosti. Podobna je za starije osobe, koje žele u svakom trenutku da prate svoje vitalne funkcije.
                Narukvica izgleda elegantno, otmjeno i popularna je kod starijih osoba. Posebno osobe koje imaju
                zdravstvenih problema se smatra da će biti zainteresovane za novi proizvod. Kako je sve što narukvica
                snimi dostupno na mobilnom uređaju koji je povezan sa narukvicom, sve što je registrovano je relevantno
                u zdravstvenim ustanovama, što uveliko može pomoći u hitnim situacijama. U današnje vrijeme je moderan
                zdrav život. Žene sve više treniraju i nastoje da održavaju svoje tijelo zdravim i u formi. Pomoću
                pametne narukvice je moguće pratiti kako naš organizam reaguje u toku fizičkih aktivnosti. Zdrav život
                je popularan kako kod zrelih osoba, tako i kod mladih i starih. Sve češće možemo vidjeti žene svih
                starosnih dobi kako se rekreativno bave sportskim aktivnostima. Također, ne možemo izuzeti žene koje se
                profesionalno bave sportom, u određenim disciplinama, kao profesori ili kao treneri, kojima je pametna
                narukvica korisna.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid container className={classes.marginTop}>
            <Grid item className={classes.firstImage}>
              <img src={'home2.jpg'} alt="home2" className={classes.image} />
            </Grid>
            <Grid item className={classes.secondImage}>
              <img src={'home3.jpg'} alt="home3" className={classes.image} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  </div>
);

export default withStyles(styles)(Home);
