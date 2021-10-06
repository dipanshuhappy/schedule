import { TextField, makeStyles } from '@material-ui/core';
import React,{Component} from 'react';
import NewData from './NewData';
class DialogForm extends Component {
    state = { newForm:{
        name:'',
        description:'',
    } }
    onChange=(event,type)=>{
        const {newForm}={...this.state}
        newForm[type]=event.target.value
        NewData({formData:newForm[type],type:type})
    }
    render() {
        const {newForm}={...this.state} 
        return ( 
            <div>
            <form noValidate autoComplete='off'>
                <div className="Dialogform">
                <TextField id="filled-basic" label='TITLE' variant="filled" style={{width:'40%'}} margin='normal' defaultValue={newForm.name}
                InputProps={{
                    disableUnderline:true
                }}
                onChange={(event)=>this.onChange(event,'name')}
                required={true}/>
                  
                <TextField 
                id='filled-basic'
                 label='Description' variant='filled' fullWidth={true} margin='normal'
                 defaultValue={newForm.description}
                  InputProps={{
                    disableUnderline:true
                }}
                onChange={(event)=>this.onChange(event,'description')}
                />
                </div>
            </form>
        </div>
         );
    }
}
 
export default DialogForm;