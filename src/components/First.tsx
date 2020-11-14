import * as React from 'react';



const First: React.FC = () => {
const [isChecked, setIsChecked] = React.useState<boolean>(false);
  const changeHandler = () => {
    console.log("checked");
    setIsChecked(!isChecked);

  }
return (
<div style={{ textAlign: 'center' }}>
  <h1 style={{ width: '50%', margin: '0 auto' }}>
    Hello! I’m JSX
  </h1>
  <div>
    {isChecked && <div>Got it</div>}
  </div>
  <div>
    <input onChange={changeHandler} type="checkbox" id="vehicle" name="vehicle" value="Boat"/>
  </div>
</div>
);
}

export default First;
