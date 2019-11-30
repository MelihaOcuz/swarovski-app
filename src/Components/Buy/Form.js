import React, { useState } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import styles from './styles';
import { Typography } from '@material-ui/core';

const Form = ({ classes, open, handleClose }) => {
  const [finish, setFinish] = useState(false);
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [tel, setTel] = useState('');
  const [city, setCity] = useState('');

  const handleClick = () => {
    setFinish(true);
  };

  const handleChange = e => {
    const {
      target: { name, value },
    } = e;

    if (name === 'name') {
      setName(value);
    }
    if (name === 'city') {
      setCity(value);
    }
    if (name === 'address') {
      setAddress(value);
    }
    if (name === 'tel') {
      setTel(value);
    }
  };

  const isDisabled = !name & !tel & !city & !address;

  return (
    <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open} classes={{ paper: classes.dialog }}>
      <DialogTitle id="simple-dialog-title">Kupi</DialogTitle>
      {finish ? (
        <Grid container direction="column" className={classes.finishContainer} justify="center" alignItems="center">
          <Grid item>
            <Typography variant="h5">Narukvica je uspješno kupljena!</Typography>
          </Grid>
          <Grid item>
            <Button variant="outlined" color="primary" className={classes.btn} onClick={handleClose}>
              Zatvori
            </Button>
          </Grid>
        </Grid>
      ) : (
        <Grid container direction="column">
          <form noValidate autoComplete="off">
            <Grid item className={classes.dialogField}>
              <TextField
                id="outlined-basic"
                label="Ime i prezime"
                variant="outlined"
                value={name}
                name="name"
                onChange={handleChange}
              />
            </Grid>
            <Grid item className={classes.dialogField}>
              <TextField
                id="outlined-basic"
                label="Adresa"
                variant="outlined"
                value={address}
                name="address"
                onChange={handleChange}
              />
            </Grid>
            <Grid item className={classes.dialogField}>
              <TextField
                id="outlined-basic"
                label="Grad"
                variant="outlined"
                value={city}
                name="city"
                onChange={handleChange}
              />
            </Grid>
            <Grid item className={classes.dialogField}>
              <TextField
                id="outlined-basic"
                label="Broj telefona"
                variant="outlined"
                value={tel}
                name="tel"
                onChange={handleChange}
              />
            </Grid>
            <Grid item className={classes.dialogField}>
              <Button
                variant="outlined"
                color="primary"
                className={classes.btn}
                onClick={handleClick}
                disabled={isDisabled}
              >
                Kupi
              </Button>
            </Grid>
          </form>
        </Grid>
      )}
    </Dialog>
  );
};

export default withStyles(styles)(Form);
