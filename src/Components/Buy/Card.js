import React from "react";
import Grid from "@material-ui/core/Grid";
import withStyles from "@material-ui/core/styles/withStyles";
import styles from './styles';

const Card = ({classes, price, image, handleClick}) => (
    <Grid container direction="column" className={classes.cardColumn} onClick={handleClick}>
        <Grid item className={classes.cardImage} >
            <img src={image} alt={image} className={classes.cardImg}/>
        </Grid>
        <Grid item className={classes.cardPrice}>
            {price}
        </Grid>
    </Grid>
);

export default withStyles(styles)(Card);
