import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import WeatherCard from '../Components/WeatherCard';
import {Slide,Snackbar} from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },

  control: {
    padding: theme.spacing(2),
  },
}));

const CityWeather=()=>{
  const [cityEntered, setCityEntered] = useState(2);
  const classes = useStyles();
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
                    showError={()=>setSnackBarState(true)}
                    />
            </Grid>
          ))}
          
    </Grid>
      <Snackbar
            open={snackBarState}
            autoHideDuration={2000}
            TransitionComponent={transition}
            onClose={()=>setSnackBarState(false)}
            key={transition ? transition.name : ''}
        >
          <Alert  severity="error">
              Invalid City entered
          </Alert>
        </Snackbar>
    </div>
    
  );
}
export default CityWeather;
