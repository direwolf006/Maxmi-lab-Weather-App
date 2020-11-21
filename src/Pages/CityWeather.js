import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import WeatherCard from '../Components/WeatherCard';
import { FormLabel,FormControlLabel,FormGroup,Checkbox,FormControl, Card, CardContent,
  InputLabel,CardActions,Select, Button, Typography, Menu, MenuItem ,TextField,Avatar,
  FormHelperText,InputAdornment,CircularProgress ,Modal,CardHeader,Slide,Snackbar} from '@material-ui/core';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import CancelIcon from '@material-ui/icons/Cancel';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(2),
  },
  searchModal:{
    [theme.breakpoints.down('sm')]: {
      width:'80%',
      marginTop:"5%",
      marginLeft:"10%",
      marginRight:"10%",
      
    },
    [theme.breakpoints.up('md')]: {
      width:'60%',
      marginTop:"5%",
      marginLeft:"20%",
      marginRight:"20%",

    },
    [theme.breakpoints.up('lg')]: {
      width:'46%',
      marginTop:"15%",
      marginLeft:"28%",
      marginRight:"28%",

    }
  }
}));

const CityWeather=()=>{
  const [cityEntered, setCityEntered] = useState(2);
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const updatedCityEntered = (event) => {
    setCityEntered(event.target.value)
  };
  const [snackBarState,setSnackBarState]=React.useState(false)
  const [transition, setTransition] = React.useState(undefined);
  const TransitionUp= React.forwardRef((props, ref) => {
    return <Slide {...props} ref={ref} direction="up" />;
  })




  return (
    <div>
      <Grid container style={{position:'relative',marginLeft:-1,marginRight:-1,paddingTop:50}} direction='row'
    justify="center"
    alignItems="center"
    spacing={2}
    item={true}
    sm={12} md={12} lg={12} xl={12}>

          {[1,2,3,4,5,6,7,8,9].map((city) => (
              <Grid item key={city}>
                  <WeatherCard 
                    key={city}
                    searchCityToggle={()=>{setOpen(true)}}
                    cityName={cityEntered}
                    showError={()=>setSnackBarState(true)}
                    />
            </Grid>
          ))}
          
    </Grid>
      <Snackbar
                    open={snackBarState}
                    autoHideDuration={2000}
                    TransitionComponent={transition}
                    message={"Invalid City entered"}
                    onClose={()=>setSnackBarState(false)}
                    key={transition ? transition.name : ''}
                />
    </div>
    
  );
}
export default CityWeather;
