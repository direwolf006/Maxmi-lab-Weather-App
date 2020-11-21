import  thunderstorm from '../images/thunderstorm.jpg';
import  drizzle from '../images/drizzle.jpg';
import  rainy from '../images/rainy.jpg';
import  snowfall from '../images/snowfall.jpg';
import  mist from '../images/mist.jpg';
import  smoke from '../images/smoke.jpg';
import  haze from '../images/haze.png';
import  dust from '../images/dust.jpg';
import  fog from '../images/fog.jpg';
import  ash from '../images/ash.jpg';
import  tornado from '../images/tornado.jpg';
import  cloudy from '../images/cloudy.jpg';
import  broken_clouds from '../images/broken_clouds.jpg';
import clear_sky from '../images/clear_sky.jpg';


const fetchImage=(id)=>{
    if(id>=200 && id<=232 ){
        return thunderstorm;
    }else if(id>=300 && id<=321){
        return drizzle;
    }else if(id>=500 && id<=531){
        return rainy;
    }else if(id>=600 && id<=622){
        return snowfall;
    }else if(id>=700 && id<=781){
        if(id==701){
            return mist;
        }else if(id==711){
            return smoke;
        }else if(id==721){
            return haze;
        }else if(id==731|| id ==761){
            return dust;
        }else if(id==741){
            return fog;
        }else if(id==762){
            return ash;
        }else if(id==781){
            return tornado;
        }
    }else if(id>=801 && id<=804){
        if(id==803){
            return broken_clouds;
        }
        return cloudy;
    }
    return clear_sky;
}
export default fetchImage;