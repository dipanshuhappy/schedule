import { MoreHoriz,MoreVert,DeleteForever,Edit} from '@material-ui/icons';
import React from 'react';
import { Icon, IconButton, makeStyles, SvgIcon } from '@material-ui/core';
import BasicTable from './SubTable';
import CustomizedDialogs from './Dialog/NewTodo';
const Style=makeStyles({
    root:{
        marginTop:'auto',
        marginLeft:'auto'
    },
    delete:{
        fill:'red',
    },
    deleteBack:{
        backgroundColor:'rgb(256, 200, 200)',
        borderRadius:'3px',
        fontSize:20,
        padding:0,
    },
    
})
const EditnRemove=(item,handleDelete)=>{
    return(
        <div className="edit">
            <CustomizedDialogs isEditClicked={true} editItem={item}/>
            <IconButton className={Style().deleteBack}  onClick={()=>handleDelete(item)}><DeleteForever  className={Style().delete}/></IconButton>
        </div>
    )
}
const Table = ({Todo,handleDuration,handleMoreClick,handleDelete}) => {
    return ( 
     <table>
         <thead>
             <tr>
                 <th></th>
                 <th></th>
                 <th>Start Time</th>
                 <th>End Time</th>
                <th></th>
             </tr>
         </thead>
         <tbody>
            {Todo.map((item)=>{
                const {date}=item
                const {isMoreClick}=item
                return(
                    <React.Fragment>
                    <tr id={item.id} key={item.id} className={item.id%2===0?'even':'odd'}>
                        <td colSpan='0'>
                            <IconButton onClick={()=>handleMoreClick(item)}>
                            <SvgIcon component={isMoreClick?MoreVert:MoreHoriz}/>
                            </IconButton>
                            
                        </td>
                        <td className="todo-info">
                            <div className="date">
                                <p>{date.day}</p>
                                <p style={{fontSize:'small'}}>{date.month.substr(0,3)}</p>
                            </div>
                            <div className="info">
                                <p>{item.name}</p>
                                <p>{item.description}</p>
                            </div>
                        </td>
                        <td>
                            <div className="startTime Time">
                            <p>{item.startTime}</p>
                            </div>
                        </td>
                        <td>
                            <div className="endTime Time">
                                <p>
                            {item.endTime}
                            </p>
                            </div>
                        </td>
                        <td>{EditnRemove(item,handleDelete)}</td>
                    </tr>
                   <tr className={isMoreClick?'subTable':'none'}>
                    <td></td>
                   <td colSpan='3' className="subTablePaper"><BasicTable agenda={item.agenda} handleDuration={handleDuration} Time={item}/></td>
                      <td></td>
                       <td></td>
                       <td></td>
                        
                    </tr> 
                  
                    </React.Fragment>

                
                )
                
            }
        )
    }
    </tbody>
     </table>
     );
}
export default Table;