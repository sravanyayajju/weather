
var inputvalue = document.querySelector('#cityinput')
var btn = document.querySelector('#add')
var city = document.querySelector('#cityoutput')
var description = document.querySelector('#description') // changed variable name to 'description'
var temp = document.querySelector('#temp')
var wind = document.querySelector('#wind')
var apik = "4ca40af982bb0b98350a12a89230385e"

function convertion(val){
    return (val - 273).toFixed(3)
}

btn.addEventListener('click', function(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + inputvalue.value + '&appid=' + apik)
    .then(res => res.json())
    .then(data => {
        var nameval = data['name']
        var descrip = data['weather'][0]['description'] // corrected indexing
        var temperature = data['main']['temp']
        var wndspeed = data['wind']['speed']
        city.innerHTML = 'Weather of <span>' + nameval + '</span>'
        temp.innerHTML = 'Temperature: <span>' + convertion(temperature) + ' C</span>'
        description.innerHTML = 'Sky Conditions: <span>' + descrip + '</span>' // corrected variable name
        wind.innerHTML = 'Wind Speed: <span>' + wndspeed + ' km/h</span>'
    })
    .catch(err => alert('You entered wrong city name')) // corrected typo in error message
})