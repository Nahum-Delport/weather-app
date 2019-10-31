import React from 'react';
import App from '../App';
import renderer from 'react-test-renderer';
test('the data is humidity', async () => {
 const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=Lagos&appid=6e9c4d44e0cc64f81bcffccf748d4601&units=metric`);// we pass the variable into the api
//api call to fetch contents for our weather component
const response = await api_call.json();
  expect(response.name).toBe("Lagos");
});