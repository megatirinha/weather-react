import React from "react";
import axios from "axios";
import { SpinnerDotted } from "spinners-react";

export default function Weather(props) {
  function handleResponse(response) {
    alert(
      `The weather in ${response.data.name} is ${response.data.main.temp}C`
    );
  }
  let apiKey = "90cee12215a13406c3973aa8314f74bc";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&unit=metric`;

  axios.get(apiUrl).then(handleResponse);
  return <SpinnerDotted />;
}
