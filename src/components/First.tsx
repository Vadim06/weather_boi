import * as React from "react";
import { Button, Checkbox } from "@material-ui/core";
import Badge from "@material-ui/core/Badge";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import { TextField } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.secondary,
    },

    checkbox: {
      display: "flex",
      position: "absolute",
      left: "50%",
      transform: "translateX(-50%)",
    },
    flexContainer: {
      display: "flex",
      position: "relative",
      justifyContent: "left",
    },
  })
);

const First: React.FC = () => {
  const [isChecked, setIsChecked] = React.useState<boolean>(false);

  // let isChecked: boolean = false;

  // function setIsChecked(znachenie) {
  //   isChecked = znachenie;
  // }

  const [currentWeather, setCurrentWeather] = React.useState<any>(null);

  const inputEl = React.useRef<HTMLInputElement>(null);
  const changeHandler = () => {
    console.log("checked");
    setIsChecked(!isChecked);
  };
  const changeInputHandler = React.useCallback(() => {
    if (inputEl && inputEl.current) console.log(inputEl.current.value);
  }, [inputEl]);

  const classes = useStyles();

  const units = "metric";
  const apiKey = "7d89cf1987ae6067d0942af37fe4a957";
  const cityName = "olomouc";
  const fetchURL = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=${units}`;

  const clickHandler = async () => {
    const response = await fetch(fetchURL);
    const json = await response.json();
    console.log(json);
    setCurrentWeather(json);
  };

  return (
    <>
      <div style={{ textAlign: "center" }}>
        <div className={classes.flexContainer}>
          <TextField
            placeholder="Type here"
            variant="outlined"
            label="City"
            inputRef={inputEl}
            onChange={changeInputHandler}
          />
          <Checkbox className={classes.checkbox} onChange={changeHandler} />
        </div>
        <div>
          <div>
            <Badge badgeContent={isChecked ? 1 : 0} color="primary">
              <SubscriptionsIcon />
            </Badge>
            <br />
          </div>
        </div>
      </div>
      <div className={classes.root}>
        <Grid container spacing={2} justify="center" alignItems="center">
          <Grid item xs={12}>
            <Button variant="outlined" color="primary" onClick={clickHandler}>
              fetch weather
            </Button>
          </Grid>
          <Grid item sm={12} md={6} lg={3}>
            {currentWeather && <div><span>temp now: </span>{currentWeather?.main?.temp}</div>}
            {currentWeather && <div><span>feels like: </span>{currentWeather?.main?.feels_like}</div>}
          </Grid>
          <Grid item sm={12} md={6} lg={3}>
            <Paper className={classes.paper}>xs=12 sm=6 lg=3</Paper>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default First;
