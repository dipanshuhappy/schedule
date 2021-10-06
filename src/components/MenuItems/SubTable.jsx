import React from 'react';
import { makeStyles,styled } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import  Button  from '@material-ui/core/Button';

const useStyles = makeStyles({
  table: {
    float:'right',
    backgroundColor:'whitesmoke',
    borderSpacing:'0',
  },
  paper:{
    boxShadow:'none'
  },
  fontStyle:{
    fontSize:'large',
    color:'#053858',
    fontWeight:'bold'
  },
  '.MuiTableCell-root':{
    border:0,
  }
});
const DeleteButton = styled(Button)({
  backgroundColor:'hsl(0, 50%, 50%)',

})
export default function BasicTable(props) {
  const classes = useStyles();
  const {agenda,Time,handleDuration}={...props}
  return (
    <TableContainer className={classes.paper} component={Paper}>
      <Table className={classes.table} aria-label="simple table" align='center'>
        <TableHead>
          <TableRow>
            <TableCell align='center' className={classes.fontStyle}>Agenda</TableCell>
            <TableCell align="center"></TableCell>
            <TableCell align="center"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {agenda.map((item) => (
            <TableRow key={item.id} className={classes.tableRow}>
              <TableCell component="th" scope="row" align="center" className={classes.tableRow}>
                {item.name}
              </TableCell>
          <TableCell align="center" className={classes.tableRow}>{handleDuration(Time)}</TableCell>
              <TableCell align="center" className={classes.tableRow}>
                <DeleteButton>DELETE</DeleteButton> 
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}