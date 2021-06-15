let weather = 
{

apiKey: '7a4d5e1d1339572f2a5ce07bc2e38c6f',

getWeather : function(city)
{

fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${this.apiKey}`)
.then((response) =>  response.json())
.then((data) => {
   
    this.displayWeather(data)
   
})




},


displayWeather:  function(data)
{
    const {temp,humidity,pressure,temp_min,temp_max} = data.main;
    const {description,main,icon} = data.weather[0];
    const {speed} = data.wind;
    const {name} = data;
  
    document.querySelector('.city-info').innerHTML=name;
    document.querySelector('.icon').src=`https://openweathermap.org/img/wn/${icon}.png`;

    document.querySelector('.temp').textContent=temp+' °C';
    document.querySelector('.description').innerHTML= description;
    document.querySelector('.humidity').innerHTML='Humidity : '+humidity+' %';
    document.querySelector('.wind-speed').innerHTML= 'Wind Speed : '+speed +' km/hr'
    document.querySelector('.low').innerHTML= "Today low : "+temp_min + ' °C';
    document.querySelector('.high').innerHTML="Today High : "+temp_max+' °C';
    document.querySelector('.pressure').innerHTML="Pressure : "+ pressure + " Pa";
    
   
    document.querySelector('.weather-info').hidden=false;
}


}

document.querySelector('.search-button').addEventListener('click', () =>
{
    let city = document.querySelector('.search').value;
    document.body.style.backgroundImage=`url('https://source.unsplash.com/1600x900/?${city}')`
    weather.getWeather(city);
   
})


document.querySelector('.search').addEventListener('keyup', (event) =>
{
    if(event.key=='Enter')
    {
        let city = document.querySelector('.search').value;
        document.body.style.backgroundImage=`url('https://source.unsplash.com/1600x900/?${city}')`

        weather.getWeather(city);
    }
  
   
})




