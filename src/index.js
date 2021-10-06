import React from 'react';
import Render from 'react-dom'
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import {MuiThemeProvider,createMuiTheme} from '@material-ui/core'
const theme=createMuiTheme({
    palette:{
        secondary:{
            main:'#EBEFF5',
            contrastText:'#053858'
        },
        primary:{
            main:'#053858',
            contrastText:"#EBEFF5",
        }
    }
})
Render.render(
<BrowserRouter>
<MuiThemeProvider theme={theme}><App/>
</MuiThemeProvider>
</BrowserRouter>
,document.querySelector('#root'))