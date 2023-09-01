const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '237eddb568msh0546cfdfb034ac3p1b652fjsn6421fdd0444e',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
function getTemperature(city){
	cityName.innerText = city;
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city, options).then(response => response.json())
	.then(response => {
		temp.innerText = response.temp
		min_temp.innerText = response.min_temp
		max_temp.innerText = response.max_temp
		feels_like.innerText = response.feels_like
		humidity.innerText = response.humidity
		wind_degree.innerText = response.wind_degrees
		wind_speed.innerText = response.wind_speed
		sunrise.innerText = response.sunrise
		sunset.innerText = response.sunset		
		temp2.innerText = response.temp
		humidity2.innerText = response.humidity
		wind_speed2.innerText = response.wind_speed
		console.log(response)
	})
	.catch(err => console.log(err));
}
submit.addEventListener("click", (e)=>{
	e.preventDefault()
	getTemperature(cityname.value)

})
getTemperature("Delhi")

