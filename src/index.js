import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { AgeCalculator } from "./ageCalculator";

$("form#ageInput").submit(function(event){
  event.preventDefault();
  const age = $("#age").val();
  let calc = new AgeCalculator(age);
  
  // get planet age
  $("p#mercury-age").text("You are " + calc.calculator("Mercury") + " years old on Mercury!");
  $("p#venus-age").text("You are " + calc.calculator("Venus") + " years old on Venus!");
  $("p#mars-age").text("You are " + calc.calculator("Mars") + " years old on Mars!");
  $("p#jupiter-age").text("You are " + calc.calculator("Jupiter") + " years old on Jupiter!");

  // get planet life expectancy
  $("p#mercury-life-exp").text("The average life expectancy on Mercury is " + calc.calculatePlanetLifeExpectancy("Mercury") + " years.");
  $("p#venus-life-exp").text("The average life expectancy on Venus is " + calc.calculatePlanetLifeExpectancy("Venus") + " years.");
  $("p#mars-life-exp").text("The average life expectancy on Mars is " + calc.calculatePlanetLifeExpectancy("Mars") + " years.");
  $("p#jupiter-life-exp").text("The average life expectancy on Jupiter is " + calc.calculatePlanetLifeExpectancy("Jupiter") + " years.");

  // get years left
  if (calc.calculator("Mercury") > calc.calculatePlanetLifeExpectancy("Mercury")) {
    $("p#mercury-years-left").text("You've outlived your life expectancy on Mercury by " + calc.yearsLeft("Mercury") +" years!");
  } else {
    $("p#mercury-years-left").text("You have " + calc.yearsLeft("Mercury") + " years left to live on Mercury.");
  }

  if (calc.calculator("Venus") > calc.calculatePlanetLifeExpectancy("Venus")) {
    $("p#venus-years-left").text("You've outlived your life expectancy on Venus by " + calc.yearsLeft("Venus") +" years!");
  } else {
    $("p#venus-years-left").text("You have " + calc.yearsLeft("Venus") + " years left to live on Venus.");
  }

  if (calc.calculator("Mars") > calc.calculatePlanetLifeExpectancy("Mars")) {
    $("p#mars-years-left").text("You've outlived your life expectancy on Mars by " + calc.yearsLeft("Mars") +" years!");
  } else {
    $("p#mars-years-left").text("You have " + calc.yearsLeft("Mars") + " years left to live on Mars.");
  }

  if (calc.calculator("Jupiter") > calc.calculatePlanetLifeExpectancy("Jupiter")) {
    $("p#jupiter-years-left").text("You've outlived your life expectancy on Jupiter by " + calc.yearsLeft("Jupiter") +" years!");
  } else {
    $("p#jupiter-years-left").text("You have " + calc.yearsLeft("Jupiter") + " years left to live on Jupiter.");
  }

  $("div#planets").show();
});
