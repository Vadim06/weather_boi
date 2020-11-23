import * as React from 'react';
import { Checkbox } from '@material-ui/core';
import Badge from '@material-ui/core/Badge';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import { TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  checkbox: {
    margin: '20px 10px 15px',
    padding: '30px',
    border: '2px dotted pink',

  }
})

const First: React.FC = () => {
  const [isChecked, setIsChecked] = React.useState<boolean>(false);

  // let isChecked: boolean = false;

  // function setIsChecked(znachenie) {
  //   isChecked = znachenie;
  // }

  const inputEl = React.useRef<HTMLInputElement>(null);
  const changeHandler = () => {
    console.log("checked");
    setIsChecked(!isChecked);
  }
  const changeInputHandler = React.useCallback(() => {
    if (inputEl && inputEl.current)
      console.log(inputEl.current.value)
  }, [inputEl])

  const classes = useStyles();

  return (
    <div style={{ textAlign: 'center' }}>
      <h1 style={{ width: '50%', margin: '0 auto' }}>
        Hello! I’m JSX
  </h1>
      <div>
        <Checkbox className={classes.checkbox} onChange={changeHandler} />
        <div>
          <Badge badgeContent={isChecked ? 1 : 0} color="primary">
            <SubscriptionsIcon />
          </Badge>
          <br />
          <TextField placeholder="Type here" variant="outlined" label="City" inputRef={inputEl} onChange={changeInputHandler} />
        </div>
      </div>
    </div>
  );
}

export default First;
