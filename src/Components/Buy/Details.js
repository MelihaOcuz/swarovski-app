import React  from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import history from '../../history';
import Appbar from '../Home/Appbar';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Form from "./Form";
import styles from './styles';

class Details extends React.Component<> {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      ogrlica: {},
    };
  }

  componentDidMount() {
    const { state } = history.location;
    this.setState({ ogrlica: state.ogrlica });
  }

  handleClose = () => {
    this.setState({ open: false });
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  render() {
    const { classes } = this.props;
    const {
      ogrlica: { name, description, price, image },
      open,
    } = this.state;
    return (
      <div className={classes.container}>
        <Appbar classes={{ root: classes.root }} />
        <Grid container className={classes.detailContainer}>
          <Grid item className={classes.detailImage}>
            <img src={image} alt={name} className={classes.image} />
          </Grid>
          <Grid item className={classes.detailText}>
            <Typography variant="h4" className={classes.detailName}>
              {name}
            </Typography>
            <Typography variant="body1" className={classes.detailDescription}>
              {description}
            </Typography>
            <Grid container className={classes.priceContainer}>
              <Grid item className={classes.itemPrice}>
                <Typography variant="h5" className={classes.detailPrice}>
                  {price}
                </Typography>
              </Grid>
              <Grid item className={classes.buttonBuy}>
                <Button variant="outlined" className={classes.button} onClick={this.handleOpen}>
                  Kupi
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Form open={open} handleClose={this.handleClose} />
      </div>
    );
  }
}

export default withStyles(styles)(Details);
