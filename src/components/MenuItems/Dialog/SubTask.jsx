import { FormControlLabel,Checkbox,TextField,Button } from '@material-ui/core';
import React,{Component} from 'react';
import {MuiThemeProvider,createMuiTheme} from '@material-ui/core'
import Sub from './Sub.jsx'
import NewData from './NewData';
import { sub } from 'date-fns';

const theme=createMuiTheme({
    palette:{
        primary:{
            main:'#000'
        }
    }
})
class SubTask extends Component {
    state = { 
        subs:[{id:1,name:''}],
        check:false,
        
        
    }
    onAgendaClick=()=>{
        let {subs}={...this.state}
        subs.push({
            id:subs[subs.length-1].id+1,
            name:''
        
        })
        this.setState({subs})
    }
    onChangeCheckBox=event=>{
        let {check}={...this.state}
        check=event.target.checked
        this.setState({check})
    }
    onSubTaskChange=(event,id)=>{
        let {subs}={...this.state}
        subs[id-1]={id:id,name:event.target.value}
        this.setState({subs})
        NewData({agenda:this.state.subs,type:'agenda'})
    }
    render() { 
        const {subs,check}={...this.state}
        return (  <div className="subForm">
        <div>
        <FormControlLabel
            control={<Checkbox checked={check} name='checkedA' onChange={this.onChangeCheckBox}/>}
            label='My total duration should be automatically calculated'
        />
        </div>
        {subs.map(sub=><Sub duration={!check} onChange={this.onSubTaskChange} id={sub.id}/>)}
        <MuiThemeProvider theme={theme}>
        <Button 
         variant="outlined" style={{border:'5px solid #053858',borderRadius:'20px',font:'',marginTop:'2%'}} onClick={this.onAgendaClick}>+ New Agenda</Button>
         </MuiThemeProvider>
    </div> );
    }
}
 
export default SubTask;