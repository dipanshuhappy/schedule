import React from 'react';
import Table from './Table'
import {Button} from '@material-ui/core'
import {makeStyles} from '@material-ui/core'
import CustomizedDialogs from './Dialog/NewTodo';
const useStyles=makeStyles({
    root:{
        backgroundColor:'#03253a',
        "&:hover":{
            backgroundColor:'#03253a'
        },
        float:"right",
        borderRadius:'10px',
    },
})
const DashBoard = ({todo,onDuration,onMoreClick,onDelete,onCreate,onPickerChange,newTodo}) => {
    return ( 
        <div className="DASHBOARD">
            <span className="mainHeader">
                <div className="side"></div>
                <p>Here Are Your Tasks For Today</p>
            </span>
        <Table Todo={todo} handleDuration={onDuration} handleMoreClick={onMoreClick} handleDelete={onDelete}/>
        <CustomizedDialogs handleOnCreate={onCreate} handlePickerChange={onPickerChange} newTodo={newTodo}/>
        </div>
    );
} 
export default DashBoard;