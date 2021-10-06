import React from 'react';
export let newTodo={
    date:{},
    agenda:[]
}
const NewData = ({formData,date,type,agenda}) => {
    const months=['January','Feburary','March','April','May','June','July','August','Setember','October','November','December']
    console.log("first-log-newData",date,type)
    console.log("date-of-day",date.getUTCDay())
    if(type==='date'){
        console.log(date,type)
        const newDateString=date.toISOString().substr(8,2)
        newTodo.date={day:newDateString,month:months[date.getMonth()],year:date.getFullYear()}
        console.log(newTodo)
    }
    if(type==='startTime'||type==='endTime'){
        newTodo[type]=date.getHours()+':'+date.getMinutes()
        console.log(newTodo)
    }
    if(type==='name'||type==='description'){
        newTodo[type]=formData
        console.log(newTodo)
    }
    if(type==='agenda'){
      newTodo.agenda=agenda
      console.log(newTodo)
    }

    return ( 
       newTodo 
     );
}
export default NewData;