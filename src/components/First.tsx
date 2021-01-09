import * as React from "react";
import { Button } from "@material-ui/core";
import { TextField } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
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
    currentTemperature: {
      background: "cyan",
    },
    cityName: {
      color: "red",
    },
  })
);

const First: React.FC = () => {
  const [currentWeather, setCurrentWeather] = React.useState<any>(null);

  const inputEl = React.useRef<HTMLInputElement>(null);

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
      <Button variant="outlined" color="primary" onClick={clickHandler}>
        fetch weather
      </Button>
      <div style={{ textAlign: "center" }}>
        <div className={classes.flexContainer}>
          <TextField
            placeholder="Type here"
            variant="outlined"
            label="City"
            inputRef={inputEl}
          />
        </div>
      </div>
      <Grid container justify="center" alignItems="center">
        <Grid item xs={12} sm={6}>
          <Grid item xs={12} classes={{ root: classes.cityName }}>
            Olomouc
          </Grid>
          <Grid item xs={12}>
            date
          </Grid>
          <Grid container>
            <Grid item xs={6} classes={{ root: classes.currentTemperature }}>
              -3.5 {currentWeather}
            </Grid>
            <Grid item xs={6}>
              conditions
            </Grid>
          </Grid>
          <Grid item xs={12}>
            feels like
          </Grid>
          <Grid item xs={12}>
            wind
          </Grid>
        </Grid>
        <Grid item xs={12} sm={6}>
          visualization
        </Grid>
        <Grid item xs={12}>
          day menu
        </Grid>
      </Grid>
    </>
  );
};

export default First;
