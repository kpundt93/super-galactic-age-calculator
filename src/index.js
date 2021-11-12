import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { AgeCalculator } from "./ageCalculator";

$("form#ageInput").submit(function(event){
  event.preventDefault();
  const age = $("#age").val();
  let calc = new AgeCalculator(age);
  $("p#mercury").text("You are " + calc.calculator("Mercury") + " years old on Mercury!");
  $("p#venus").text("You are " + calc.calculator("Venus") + " years old on Venus!");
  $("p#mars").text("You are " + calc.calculator("Mars") + " years old on Mars!");
  $("p#jupiter").text("You are " + calc.calculator("Jupiter") + " years old on Jupiter!");
  $("div#planets").show();
});
