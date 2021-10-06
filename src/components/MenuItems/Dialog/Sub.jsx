import React from 'react';
import { FormControlLabel,Checkbox,TextField,Button } from '@material-ui/core';
const Sub = ({duration,onChange,id}) => {
    return ( 
        <span>
        <TextField id="filled-basic" label='Sub-task' variant="filled"
         InputProps={{
           disableUnderline:true
       }}
       style={{width:duration?'70%':'90%',marginRight:'2%'}}
       margin='normal'
       onChange={(event)=>onChange(event,id)}
       />
       { duration &&
       <TextField id="filled-basic" label='Sub-task Duration' variant="filled"
         InputProps={{
           disableUnderline:true
       }}
       margin='normal'
       />
    }
       </span>
     );
}
export default Sub;