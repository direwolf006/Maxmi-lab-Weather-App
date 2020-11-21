import React from 'react';
import { ThemeProvider,
    withStyles,
    makeStyles,
    createMuiTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import CardMedia from '@material-ui/core/CardMedia';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { grey  } from '@material-ui/core/colors';
import { fetchWeather } from '../OpenWeatherApi/fetchWeatherApi';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import EditIcon from '@material-ui/icons/Edit';
import SearchIcon from '@material-ui/icons/Search';
import fetchImage from './fetchImage';



const useStyles = makeStyles((theme) => ({
    root: {
      minWidth:350,
      maxWidth: 1000,
      backgroundColor:'#00695c',
      color:'#FFFFFF'
    },
    media: {
        [theme.breakpoints.down('sm')]: {
            height:150,
            width: "100%",
          },
          [theme.breakpoints.up('sm')]: {
            height:150,
            width: "100%",
          },
          [theme.breakpoints.up('md')]: {
            width: "100%",
            height:150,
          },
          [theme.breakpoints.up('lg')]: {
            height:200,
            width: "100%",
          },
    },
  }));

const WeatherCard=({showError})=>{
    const classes = useStyles();
    const [cityData,setCityData]=React.useState({
        id:0,
        name:"Search City",
        temperature:"_ _ °C",
        weather:"Hope its clear :-)",
    })
    const [editMode,setEditMode]=React.useState(false);
    const [cityEntered, setCityEntered] = React.useState(2);
    const setCityWeatherData=async()=>{
        const data = await fetchWeather(cityEntered);
        console.log(data);
        if(data!=404){
            setCityData({
                id:data.weather[0].id,
                name:data.name,
                temperature:Math.round(data.main.temp),
                weather:data.weather[0].description
            })
        }else{
            showError();
        }
        setEditMode(!editMode)
    }


    return (
        <Card className={classes.root} >
        {(editMode)?
            (<div style={{display:'flex',justifyContent:"space-between",margin:"3% 5%"}}>
                <TextField  label="Enter City" variant="outlined" className={classes.textField}
                    InputLabelProps={{color:"#FFFFFF"}}
                    onChange={(event)=>{setCityEntered(event.target.value)}} />
                <IconButton aria-label="delete"  onClick={()=>setCityWeatherData()} >
                            <SearchIcon style={{color:'#FFFFFF'}}/>
                </IconButton>
            </div>)
            :(<div style={{display:'flex',justifyContent:"space-between",margin:"3% 5%"}}>
                <Typography variant="h5" gutterBottom style={{marginTop:"3%"}}>
                    {cityData.name}
                </Typography>
                <IconButton aria-label="delete"  onClick={()=>{setEditMode(!editMode)}} >
                        <EditIcon style={{color:'#FFFFFF'}}/>
                </IconButton>
                </div>)
            }

        <div style={{backgroundImage:`url(${fetchImage(cityData.id)})`}} className={classes.media} />

        <Typography variant="h5" gutterBottom>
            {cityData.temperature}
        </Typography>
        <Typography variant="h5" gutterBottom>
            {cityData.weather}
        </Typography>
      </Card>
    )

}

export default WeatherCard;