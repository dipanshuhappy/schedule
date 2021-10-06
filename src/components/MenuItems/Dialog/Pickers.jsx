import React,{Component} from 'react';
import { KeyboardDatePicker,MuiPickersUtilsProvider,KeyboardTimePicker,TimePicker} from '@material-ui/pickers';
import {AccessTime} from '@material-ui/icons'
import addHours from 'date-fns/addHours'
import addMinutes from 'date-fns/addMinutes'
// import DateFnsUtils from '@date-io/date-fns'
import DateFnsAdapter from '@date-io/date-fns'
import { makeStyles } from '@material-ui/core';
import NewData from './NewData';
const defaults={
  year:new Date().getFullYear(),
  months:['.','January','Feburary','March','April','May','June','July','August','Setember','October','November','December']
}
 const handleDuration=(item)=>{
  let endHour=Number.parseInt(item.endTime.substr(0,2))
  let startHour=Number.parseFloat(item.startTime.substr(0,2))
  let endMinute=Number.parseInt(item.endTime.substr(3,5))
  let startMinute=Number.parseFloat(item.startTime.substr(3,5))
  let duration=(endHour*60+endMinute)-(startHour*60+startMinute)
  let durationHour=Math.floor(duration/60)
  let durationMinute=duration%60
  return new Date(0,0,0,durationHour,durationMinute)
}
class Picker extends Component {
  state = { newTodo:{
    date:new Date(),
    startTime:new Date(),
    endTime:new Date(),
    duration:new Date(0,0),
    error:null,
  } }
  componentWillMount(){
    const {isEditClicked,editItem}={...this.props}
    if(isEditClicked){
      this.setState({newTodo:{
        date:new Date(
          defaults.year,
          defaults.months.indexOf(editItem.date.month),
          editItem.date.day),
        startTime:new Date(
          0,
          0,
          0,
          editItem.startTime.substr(0,2),
          editItem.startTime.substr(3,2)
        ),
        endTime:new Date(
          0,
          0,
          0,
          editItem.endTime.substr(0,2),
          editItem.endTime.substr(3,2)
        ),
        duration:handleDuration(editItem),
        error:null
      }})
    }
  }
  onStart=()=>{
  const fullDate=this.state.newTodo.date;
  const startTime=this.state.newTodo.startTime;
  const endTime=this.state.newTodo.endTime;
  NewData({date:fullDate,type:'date'})
  NewData({date:startTime,type:'startTime'})
  NewData({date:endTime,type:'endTime'})
  }
  onPickerChange =(pDate,type)=>{
    console.log(pDate,type)
    let newDate={...this.state.newTodo}
    newDate[type]=pDate
    console.log("fns-date",pDate)
    if(type==="duration" || type==="startTime"){
      console.log("m and h",newDate["duration"].getHours(),newDate["duration"].getMinutes())
     let updatedEndTimeDate=null;
     let finalEndTime=null;
     if(type==="duration"){ 
       updatedEndTimeDate=addHours(newDate.startTime,pDate.getHours())
       finalEndTime=addMinutes(updatedEndTimeDate,pDate.getMinutes())
    }
     else{
       updatedEndTimeDate=addHours(newDate.startTime,newDate.duration.getHours())
       finalEndTime=addMinutes(updatedEndTimeDate,newDate.duration.getMinutes())
    }
     console.log({updatedEndTimeDate})
     console.log({finalEndTime})
     this.isGreaterThan24()?newDate.endTime=new Date(0,0):newDate["endTime"]=finalEndTime
    }
    this.setState({newTodo:newDate});
    NewData({date:pDate,type:type})
  }
  onDuration=()=>{
    const {startTime,endTime,date}={...this.state.newTodo}
    let eTime=endTime.getHours()*60+endTime.getMinutes()
    let sTime=startTime.getHours()*60+startTime.getMinutes()
    let duration=eTime-sTime
    let durationHour=Math.floor(duration/60)
    let durationMinute=duration%60
    const DurationDate =new Date(date.getFullYear(),date.getMonth(),date.getDay(),durationHour,durationMinute,0)
    console.log(DurationDate)
    // Date(date.getFullYear,date.getMonth,date.getDay,durationHour,durationMinute,0,0)
    return DurationDate
  }
  isGreaterThan24=()=>{
      const {duration,startTime}=this.state.newTodo
      const total=Math.floor(
            (
                (startTime.getHours()*60+startTime.getMinutes())+(duration.getHours()*60+duration.getMinutes())
            )/60
        )
      return total>24
  }
  isPast=()=>{
      const {startTime}=this.state.newTodo
      const currentTime= new Date()
      return startTime.getHours()*60+startTime.getMinutes()>currentTime.getHours()*60+currentTime.getMinutes()
  }
  // componentDidMount(){
  //   this.onStart()
  // }
  render() {
   const {newTodo}={...this.state}
    return ( <div className="picker">
    <div className="datePicker">
    <KeyboardDatePicker
    margin="dense"
    variant="dialog"
    format='MM/dd/yyyy'
    id='date-picker-dialog'
    label='SELECT DATE'
    KeyboardButtonProps={{
      'aria-label':'change date'
  }}
    InputProps={{
      disableUnderline:true
  }}
    value={newTodo.date}
    onChange={(date)=>this.onPickerChange(date,'date')}
    disablePast
  />
  </div>
  <div>
  <KeyboardTimePicker
   margin="dense"
   variant='inline'
   id="time-picker"
   label='SELECT START TIME'
   value={newTodo.startTime}
   KeyboardButtonProps={{
     'aria-label':'change time'
}}
   InputProps={{
    disableUnderline:true
}}
  ampm={false}
  keyboardIcon={<AccessTime/>}
  onChange={(date)=>this.onPickerChange(date,'startTime')}
  error={this.isGreaterThan24()}
  label={this.isGreaterThan24()?"TIME SHOULD BE WITHIN 24HOURS":"SELECT START TIME"}
  />
  </div>
  <div>
  <KeyboardTimePicker
   margin="dense"
   id="time-picker"
   label='SELECT DURATION'
   value={newTodo.duration}
   onChange={(date)=>this.onPickerChange(date,'duration')}
   ampm={false}
   KeyboardButtonProps={{
     'aria-label':'change time',
    }}
   InputProps={{
    disableUnderline:true,

}}
  keyboardIcon={<AccessTime/>}
  
/>
  </div>
  <div>
  <KeyboardTimePicker
   margin="dense"
   id="time-picker"
   label='SEE ENDTIME'
  value={newTodo.endTime}
   KeyboardButtonProps={{
     'aria-label':'change time'
}}
   InputProps={{
    disableUnderline:true,
    readOnly:true,
}}
  open={false}
  keyboardIcon={<AccessTime/>}
  ampm={false}
  />
  </div>
</div> );
  }
}
export default Picker;