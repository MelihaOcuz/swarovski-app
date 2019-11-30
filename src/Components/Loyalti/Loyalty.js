import React from 'react';
import Grid from '@material-ui/core/Grid';
import withStyles from '@material-ui/core/styles/withStyles';
import Appbar from '../Home/Appbar';
import Typography from '@material-ui/core/Typography';
import classNames from 'classnames';
import styles from './styles';

const Loyalty = ({ classes }) => (
  <div className={classes.container}>
    <Appbar classes={{ root: classes.root }} />
    <Grid container direction="column" className={classes.aboutContainer}>
      <Grid item className={classes.aboutItem}>
        <Typography variant="h5" className={classes.title}>
          Loyalty program
        </Typography>
      </Grid>
      <Grid item className={classes.aboutItem}>
        <Grid container>
          <Grid item className={classes.item}>
            <Typography variant="body2" className={classes.justify}>
              Loyalty program podrazumijeva odnos povjerenja i vjernosti Swarovski lanca i kupca u cilju postizanja
              zajedničkih koristi. Budući da je konkurencija na tržištu pametnih narukvica intenzivna, potrebno je
              uvesti program lojalnosti kako bi izgradili dugotrajne odnose s našim kupcima. Program lojalnosti
              planiramo temeljiti na Loyalty kartici, pomoću koje će kupci ostvarivati mnogobrojne popuste. Loyalty
              smart kartica uz kupovinu pametne narukvice omogućava kupcima 30% popusta za narednu kupovinu u Swarovski
              prodavnicama. Članom postaju kupci automatski, kupovinom prve pametne narukvice. Podatke (ime I prezime,
              broj telefona, dob itd.) koje kupac daje direktno se unose u našu bazu podataka. Uz navedeno, integrisanim
              sistemom naše ciljne skupine obavještavamo o novinama vezanim za pametne narukvice, novim ponudama I
              popustima. Uz kvalitetan proizvod, nudimo I lojalnost u vidu podrške kupcima za eventualna pitanja,
              poteškoće pri korištenju ili kvarove. Garancijom na pametnu narukvicu je 5 godina, unutar kojih kupac
              dobija besplatan update sistema, kao I besplatne popravke I pomoć našeg tima. Još jedan vid lojalty
              programa jeste preko aplikacije Goody, gdje preko besplatne aplikacije omogućavamo korisnicima da osvoje
              besplatne vaučere različitih kategorija.
            </Typography>
            <Typography variant="h5" className={classes.paddingTop}>
              Kako?
            </Typography>
            <Typography variant="body1" className={classNames(classes.paddingTop, classes.justify)}>
              1. Skini goody.ba aplikaciju - Posjeti Google Play ili App Store i nađi nas tamo - skini, instaliraj
              aplikaciju i kreni sa grebanjem!
            </Typography>
            <Typography variant="body1" className={classNames(classes.paddingTop, classes.justify)}>
              2. Skrečaj / Ogrebi- Odaberi popust ili poklon koji ti se sviđa i počni grebati - cilj je da dobiješ tri
              identične sličice!
            </Typography>
            <Typography variant="body1" className={classNames(classes.paddingTop, classes.justify)}>
              3. Preuzmi svoj popust ili poklon!- Skeniraj Goody.ba QR kod u radnji i preuzmi svoj goody!
            </Typography>
          </Grid>
          <Grid item className={classes.item}>
            <img src={'loyaltycard.png'} alt="swarowski12" className={classes.image} />
          </Grid>
        </Grid>
      </Grid>
      <Grid item className={classes.networkingContainer}>
        <Grid container>
          <Grid item className={classes.item}>
            <Typography variant="h5" className={classes.paddingTopMax}>
              Networking
            </Typography>
            <Typography variant="body2" className={classNames(classes.paddingTop, classes.justify)}>
              Networking kao širenje mreže naših klijenata, je veoma bitan segment poslovanja za Swarovski. Marketing po
              preporuci između naših zadovoljnih i stalnih kupaca donosi potencijalno nove kupce. Koristimo društvene
              mreže kako bismo promovisali pametne narukvice. Danas su u širokoj upotrebi hashtag-ovi (#), koje ćemo
              iskoristiti kao način da pametne narukvice postanu što popularnije među korisnicima. Svaki novi zadovoljni
              kupac može slikati narukvicu koju je kupio uz hashtag #smartswarovski i podijeliti na svojim profilima na
              društvenim mrežama. Za uzvrat korisnici dobijaju mogućnost osvajanja nagrade.
            </Typography>
            <Typography variant="h6" className={classes.naglasak}>
              #smartswarovski
            </Typography>
            <Typography variant="body2" className={classNames(classes.paddingTop, classes.justify)}>
              Networking i između korisnika koji se ne poznaju moguće je uspostaviti na način da ćemo ispred poslovnice
              postaviti smart display koji će prikazivati preporuke i ocjene klijenata koji su kupovali Swarovski
              proizvode. Korisnici mogu ostaviti ocjene za proizvode od 1-5 zvjezdica. Također korisnici bi mogli
              ostaviti svoje komentare i utiske i preporučiti proizvode potencijalnim kupcima.
            </Typography>
          </Grid>
          <Grid item className={classes.item}>
            <img src={'goody2.jpeg'} alt="swarowski13" className={classes.image} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  </div>
);

export default withStyles(styles)(Loyalty);
