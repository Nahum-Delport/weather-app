import React from 'react';
import Display from './Components/Display';
import InputForm from './Components/InputForm';
import Weather from './Components/Weather';
import './App.css';


class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      temp_min: undefined,
      temp_max: undefined,
      city: undefined,
      country: undefined,
      humidity: undefined,
      description: undefined,
      condition: undefined,
      error: undefined
    }
  }
  
  getWeather = async(e) => {
    
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const Api_Key = "48732e909009a78d3134638ec4e3f949";
    const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${Api_Key}&units=metric`);
    const response = await api_call.json();
    console.log(response);
    try{
      if (response.weather[0].description === "clear sky"){
        console.log("clear sky")
        this.setState({
          condition: <i class="far fa-sun" style={{color:"yellow"}}/>,
          description: undefined
  
        })
      }else if (response.weather[0].description === "light rain"){
        console.log("light rain")
        this.setState({
          condition: <i class="fas fa-cloud-sun-rain" style={{color:"darkturqouise"}} />,
          description: undefined
        })
      }else if (response.weather[0].description === "few clouds"){
        console.log("few clouds")
        this.setState({
          condition: <i class="fas fa-cloud-sun" style={{color:"darkturqouise"}}/>,
          description: undefined
        })
      }else if(response.weather[0].description === "shower rain"){
        console.log("Shower rain")
        this.setState({
          condition: <i class="fas fa-cloud-showers-heavy" style={{color:"darkturqouise"}}/>,
          description: undefined
        })
      }else if(response.weather[0].description === "overcast clouds"){
        console.log("still working")
        this.setState({
          condition: <i class="fas fa-cloud" style={{color:"darkturqouise"}}/>,
          description: undefined
        })
      }else if(response.weather[0].description === "scattered clouds"){
        console.log("Scattered clouds")
        this.setState({
          condition: <i class="fa fa-clouds-sun" style={{color:"darkturqouise"}}/>,
          description: undefined
        })
      }
      else{
        this.setState({
          condition: undefined,
          description: "Condition: " + response.weather[0].description,
        })
      }
  
    }catch(err){
      this.setState({
        temp_min:undefined,
        temp_max:undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        condition: undefined,
        error: "The values you have entered do not match our database"
      })
    }

    
    try{
      if(city && country){
        
        this.setState({
          temp_min: "Min Temp: " + Math.round(response.main.temp_min) + "°C",
          temp_max: "Max Temp: " + Math.round(response.main.temp_max) + "°C",
          city: response.name + ",",
          country: response.sys.country,
          humidity: "Humidity: " + response.main.humidity + "%",
          error: ""
        })
        
      }
    }catch(err){
      this.setState({
        temp_min:undefined,
        temp_max:undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        condition: undefined,
        error: "The values you have entered do not match our database"
      })
    }
      
  }
  render(){
    return(
      <div className="App">
        <Display />
        <div style={{display:"flex"}}>
          <InputForm loadWeather={this.getWeather} />
          <br /><br />
          <Weather
            style={{marginLeft:"50%"}}
            temp_min={this.state.temp_min}
            temp_max={this.state.temp_max}
            city={this.state.city}
            country={this.state.country}
            humidity={this.state.humidity}
            description={this.state.description}
            condition={this.state.condition}
            error={this.state.error}
          />
        </div>
        
      </div>
    )
  }
}
export default App;
