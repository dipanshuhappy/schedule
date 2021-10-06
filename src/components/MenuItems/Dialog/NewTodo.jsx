import 'date-fns'
import React,{Component} from 'react';
import { withStyles,makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import {Edit} from '@material-ui/icons'
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import { KeyboardDatePicker,MuiPickersUtilsProvider,KeyboardTimePicker} from '@material-ui/pickers';
import Picker from './Pickers.jsx'
import DateFnsUtils from '@date-io/date-fns'
import DialogForm from './Form'
import SubTask from './SubTask.jsx';
import { newTodo } from './NewData';
const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
    '--fontColor':'white',
    backgroundColor:'#053858'
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
  edit:{
    backgroundColor:'hsl(180, 70%, 91%)',
    borderRadius:'3px',
    fontSize:20,
}
});
const paperStyle=makeStyles({
  paper:{minWidth:'90%',backgroundColor:'#EBEFF5',maxWidth:"90%"}
})
const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});
const useStyles=makeStyles({
    root:{
        backgroundColor:'#03253a',
        "&:hover":{
          backgroundColor:'#03253a'
      },
        float:"right",
        borderRadius:'60px',
        paddingRight:'25px',
        paddingLeft:'25px',
        margin:'2%'
    },
    edit:{
      backgroundColor:'hsl(180, 70%, 91%)',
      borderRadius:'3px',
      fontSize:20,
  }
})
const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);
const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);
export default function CustomizedDialogs(props) {
  const [open, setOpen] = React.useState(false);
  const {handleOnCreate,handlePickerChange,isEditClicked,editItem}={...props}
  const handleClickOpen = () => {
    setOpen(true);
};
  const handleClose = () => {
    console.log(newTodo)
    handleOnCreate(newTodo)
    setOpen(false);
};
   const handleButton=()=>{
      if(isEditClicked){
        return ( <IconButton><Edit className={useStyles().edit} onClick={handleClickOpen}/></IconButton>)
      }
      else{
        return (<Button variant="outlined" className={useStyles().root} color="primary" onClick={handleClickOpen} color="secondary" style={{'--fontColor':'white'}}>
        Create a new todo
      </Button>);
      }
    }
return (
  <div>
      {handleButton()}
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open} classes={{paper:paperStyle().paper}} fullWidth='true' maxWidth="xl">
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
         Create New Meeting
        </DialogTitle>
        <DialogContent dividers>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <Picker  onPickerChange={handlePickerChange} isEditClicked={isEditClicked} editItem={editItem}/>
        </MuiPickersUtilsProvider>
        <DialogForm isEditClicked={isEditClicked} editItem={editItem}/>
        <SubTask/>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} color="primary">
            Save changes
          </Button>
        </DialogActions>
      </Dialog>
  </div>
  );
}
// const style=useStyles()
// class CustomizedDialogs extends Component {
//   state = { open:false }
//   handleClickOpen = () => {
//   this.setState({open:true})
//   };
//   constructor(props){
//     super(props);
//     if(this.props.isEditClicked){
//       this.state=({open:true})
//     }
//     else{
//       this.state=({open:false})
//     }
//   }
//   handleClose = () => {
//     const {handleOnCreate}={...this.props}
//     console.log(newTodo)
//     handleOnCreate(newTodo)
//     this.setState({open:false})
//   };
//   componentWillMount(){
    
//   }
//   render() {
//     let {open}={...this.state} 
//     const {handlePickerChange}={...this.props}
    
//     return ( 
//       <div>
//       <Button variant="outlined" className={style.root} color="primary" onClick={this.handleClickOpen} color="secondary" style={{'--fontColor':'white'}}>
//         Create a new todo
//       </Button>
//         <Dialog onClose={this.handleClose} aria-labelledby="customized-dialog-title" open={open} classes={{paper:paperStyle().paper}} fullWidth='true' maxWidth="xl">
//           <DialogTitle id="customized-dialog-title" onClose={this.handleClose}>
//            Create New Meeting
//           </DialogTitle>
//           <DialogContent dividers>
//             <MuiPickersUtilsProvider utils={DateFnsUtils}>
//             <Picker  onPickerChange={handlePickerChange}/>
//           </MuiPickersUtilsProvider>
//           <DialogForm/>
//           <SubTask/>
//           </DialogContent>
//           <DialogActions>
//             <Button autoFocus onClick={this.handleClose} color="primary">
//               Save changes
//             </Button>
//           </DialogActions>
//         </Dialog>
//     </div>
//      );
//   }
// }
 
// export default CustomizedDialogs;