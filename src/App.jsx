import React,{Component} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header'
import Menu from './components/Menu'
import DashBoard from './components/MenuItems/DashBoard';
import AllToDO from './components/MenuItems/AllToDo';
import Profile from './components/MenuItems/Profile';
import Setting from './components/MenuItems/Settings';
import BasicTable from './components/MenuItems/SubTable';
import { DateFnsUtils } from '@date-io/date-fns';
const months=['.','January','Feburary','March','April','May','June','July','August','Setember','October','November','December']
// {
//     id:this.state.todo[this.state.todo.length-1].id + 1,
//     name:'',
//     description:'',
//     date:{day:newDate.getDate(),month:months[newDate.getMonth()],year:newDate.getYear()},
//     startTime:newDate,
//     endTime:newDate,
//     isMoreClick:false,
//     agenda:[
//     ]
// }
const todo=[
    {
        id:1,
        name:'Work on DashBoard UI',
        description:'Complete DashBoard UI for Todo Application',
        date:{day:'09',month:'October',year:'2020'},
        startTime:'12:34',
        endTime:'14:44',
        isMoreClick:false,

        agenda:[
            {
                id:1,
                name:'work like hell',
            },
            {
                id:2,
                name:'dude work'
            }
        ]
    },
    {
        id:2,
        name:'Work on Mosh\'s Video',
        description:'Finish chapter 7 of Moshz\'s React Video',
        date:{day:'23',month:'Feburary',year:'2019'},
        startTime:'11:54',
        endTime:'15:44',
        isMoreClick:false,
        agenda:[
            {
                id:1,
                name:'work like hell',
            },
            {
                id:2,
                name:'dude work'
            }
        ],
    },
    {   id:3,
        name:'Learn Redux',
    description:'Check Redux on Youtube',
    date:{day:'12',month:'May',year:'2019'},
    startTime:'00:54',
    endTime:'02:44',
    isMoreClick:false,
    agenda:[
        {
            id:1,
            name:'work like hell',
        },
        {
            id:2,
            name:'dude work'
        }
    ]
    },
    {
        id:4,
        name:'kd',
        description:'dk',
        date:{day:'12',month:'May',year:'2019'},
        startTime:'12:09',
        endTime:'13:01',
        isMoreClick:false,
        agenda:[
            {
                id:1,
                name:'work like hell',
            },
            {
                id:2,
                name:'dude work'
            }
        ]
    },
    {
        id:5,
        name:'kd',
        description:'dk',
        date:{day:'12',month:'May',year:'2019'},
        startTime:'00:40',
        endTime:'8:50',
        isMoreClick:false,
        agenda:[
            {
                id:1,
                name:'work like hell',
            },
            {
                id:2,
                name:'dude work'
            }
        ]
    }
   
]
const newDate=new Date()
class App extends Component {
    state={
        todo:todo,
       
          
    }
    
    handleDuration=(item)=>{
        let endHour=Number.parseInt(item.endTime.substr(0,2))
        let startHour=Number.parseFloat(item.startTime.substr(0,2))
        let endMinute=Number.parseInt(item.endTime.substr(3,5))
        let startMinute=Number.parseFloat(item.startTime.substr(3,5))
        let duration=(endHour*60+endMinute)-(startHour*60+startMinute)
        let durationHour=Math.floor(duration/60)
        let durationMinute=duration%60
        return (
            <p>
                {durationHour===0?'':durationHour+"hr"}
                {durationMinute===0?'':durationMinute+"min"}
            </p>
        );
    }
    handleDelete=item=>{
        console.log('ldkjfl')
        const newTodo=this.state.todo.filter(singleTodo=>singleTodo!==item);
        this.setState({todo:newTodo})
    }
    handleMoreClick=(item)=>{
        let {todo}={...this.state}
        item.isMoreClick?item.isMoreClick=false:item.isMoreClick=true
        todo[todo.indexOf(item)]=item
        this.setState({todo})
    }
    createNewTodo=(newTodo)=>{
        newTodo['id']=this.state.todo[this.state.todo.length-1].id+1
        newTodo['isMoreClick']=false
        console.log(newTodo)
        const {todo}={...this.state}
        todo.push(newTodo)
        this.setState({todo})
    }
    handlePickerChange=(date)=>{
        console.log(date)
        const newTodo=new Date(date)
        this.setState({newTodo})
    }
    render() {
        return(
        <React.Fragment>
            <Header/>
            <div className="main">
            <Menu />
            <main>
            <Switch>
                <Route path="/dashboard" component={(props)=><DashBoard todo={this.state.todo} onDuration={this.handleDuration}  onMoreClick={this.handleMoreClick} onDelete={this.handleDelete} onCreate={this.createNewTodo} onPickerChange={this.handlePickerChange} {...props}/>}/>
                <Route path="/alltodo" component={AllToDO}/>
                <Route path="/profile" component={Profile}/>
                <Route path="/setting" component={Setting}/>
                <Route path="/del1" component={BasicTable}/>
            </Switch>
            </main>
            </div>
        </React.Fragment>
        );
    }
}
export default App;