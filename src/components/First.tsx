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
      display: "flex",
      justifyContent: "space-between",
      backgroundColor: "cyan",
      fontSize: "25px",
      fontFamily: "Trebuchet MS",
    },
    currentTemperatureContent: {
      display: "inline-block",
      backgroundColor: "cyan",
      fontSize: "30px",
      fontFamily: "Trebuchet MS",
    },
    cityName: {
      color: "red",
      fontFamily: "verdana",
      fontSize: "25px",
      textDecoration: "underline",
    },
    details: {
      borderStyle: "dotted",
      fontFamily: "Optima",
      color: "#393737",
      fontSize: "20px",
      paddingRight: "5px",
      paddingLeft: "5px",
    },
    feels: {
      display: "flex",
      justifyContent: "space-between",
    },
    feelsHeading: {
      display: "inline-block",
    },
    feelsContent: {
      display: "inline-block",
    },
    wind: {
      display: "flex",
      justifyContent: "space-between",
    },
    windHeading: {
      display: "inline-block",
    },
    windContent: {
      display: "inline-block",
    },
    pressure: {
      display: "flex",
      justifyContent: "space-between",
    },
    pressureHeading: {
      display: "inline-block",
    },
    pressureContent: {
      display: "inline-block",
    },
    humidity: {
      display: "flex",
      justifyContent: "space-between",
    },
    humidityHeading: {
      display: "inline-block",
    },
    humidityContent: {
      display: "inline-block",
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
      <Grid container justify="flex-start" alignItems="flex-start">
        <Grid item xs={12} sm={3}>
          <Grid item xs={12} classes={{ root: classes.cityName }}>
            Olomouc
          </Grid>
          <Grid item xs={12}>
            Su, 10.1
          </Grid>
          <Grid container>
            <Grid item xs={6}>
              <div className={classes.currentTemperatureContent}>
                -3,5 {currentWeather}
              </div>
            </Grid>
            <Grid item xs={6}>
              conditions
            </Grid>
          </Grid>
          <div className={classes.details}>
            <Grid item xs={12} classes={{ root: classes.feels}}>
              <div className={classes.feelsHeading}>
              feels like
              </div>
              <div className={classes.feelsContent}>
                -5 °C
              </div>
            </Grid>
            <Grid item xs={12} className={classes.wind}>
              <div className={classes.windHeading}>
              wind
              </div>
              <div className={classes.wind}>
                3 m/s
                </div>
            </Grid>
            <Grid item xs={12} className={classes.pressure}>
              <div className={classes.pressureHeading}>
              pressure
              </div>
              <div className={classes.pressureContent}>
                745 mm
                </div>
            </Grid>
            <Grid item xs={12} className={classes.humidity}>
              <div className={classes.humidityHeading}>
              humidity
              </div>
              <div className={classes.humidityContent}>
                45 %
              </div>
            </Grid>
          </div>
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
