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
      minHeight:250,
      maxWidth: 1000,
      backgroundColor:"#b3e5fc"
    },
    media: {
            height:200,
            width: "100%",
          marginBottom:"2%"
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
                temperature:Math.round(data.main.temp).toString()+" °C",
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
                <TextField  label="Enter City" variant="outlined" className={classes.textField} color="primary"
                    InputLabelProps={{color:"#01579b"}}
                    onChange={(event)=>{setCityEntered(event.target.value)}} />
                <IconButton aria-label="delete"  onClick={()=>setCityWeatherData()} >
                            <SearchIcon color="primary"/>
                </IconButton>
            </div>)
            :(<div style={{display:'flex',justifyContent:"space-between",margin:"3% 5%"}}>
                <Typography variant="h5" gutterBottom style={{marginTop:"3%",color:'#01579b'}}>
                    {cityData.name}
                </Typography>
                <IconButton aria-label="delete"  onClick={()=>{setEditMode(!editMode)}} >
                        <EditIcon color="primary"/>
                </IconButton>
                </div>)
            }

        <div style={{backgroundImage:`url(${fetchImage(cityData.id)})`}} className={classes.media} />

        <Typography variant="h5" gutterBottom style={{color:'#01579b',textAlign:'center'}}>
            {cityData.temperature}
        </Typography>
        <Typography variant="h5" gutterBottom style={{color:'#01579b',textAlign:'center'}}>
            {cityData.weather}
        </Typography>
      </Card>
    )

}

export default WeatherCard;