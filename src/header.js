import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
  }));

const Header=()=>{
    const classes = useStyles();

    return(
        <AppBar position="static">
        <Toolbar variant="dense" style={{justifyContent:'space-around',padding:7}}>
            <Typography variant="h6" color="inherit" >
                Maxmi labs Weather app - Rittesh.P.V (rv7685@srmist.edu.in)
            </Typography>
        </Toolbar>
        </AppBar>
    )
}

export default Header;