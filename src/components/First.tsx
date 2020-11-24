import * as React from 'react';
import { Checkbox } from '@material-ui/core';
import Badge from '@material-ui/core/Badge';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import { TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  checkbox: {
    display: 'flex',
    marginLeft: '709px',
  },
  flexContainer: {
    display: 'flex',
    alignItems: 'left',
    justifyContent: 'left',
  },
});

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
      <div className={classes.flexContainer}>
        <TextField  placeholder="Type here" variant="outlined" label="City" inputRef={inputEl} onChange={changeInputHandler} />
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
  );
}

export default First;
