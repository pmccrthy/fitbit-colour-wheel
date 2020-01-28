/*
 * Entry point for the watch app
 */
import document from "document";

var blnBasicMode = true;
var intCurrentMode = 0;
var strBaseColour = "";
const intComplimentary = 6;
const intSplitComplimentary1 = 5;
const intSplitComplimentary2 = 7;
const intBasicModeMax = 4;
const intAdvModeMax = 5;

var arrAllColours = ["y", "yg", "g", "bg", "b", "bv", "v", "rv", "r", "ro", "o", "yo"];
var arrPriColours = ["y", "r", "b"];
var arrSecColours = ["g", "v", "o"];
var arrTerColours = ["yg", "bg", "bv", "rv", "ro", "yo"]

function hideAllColours() {
  arrAllColours.forEach((col, index) => { document.getElementById(col).style.display="none"; });                      
  document.getElementById("txtMode").text="";
}

function showAllColours() {
  arrAllColours.forEach((col, index) => { document.getElementById(col).style.display="inline"; }); 
  document.getElementById("txtMode").text="All Colours";
}

function showPrimaryColours() {
  hideAllColours();
  arrPriColours.forEach((col, index) => { document.getElementById(col).style.display="inline"; }); 
  document.getElementById("txtMode").text="Primary Colours";
}

function showSecondaryColours() {
  hideAllColours();
  arrSecColours.forEach((col, index) => { document.getElementById(col).style.display="inline"; }); 
  document.getElementById("txtMode").text="Secondary Colours";
}

function showTertiaryColours() {
  hideAllColours();
  arrTerColours.forEach((col, index) => { document.getElementById(col).style.display="inline"; }); 
  document.getElementById("txtMode").text="Tertiary Colours";
}

function showSingleColour(strBaseColour) {
  hideAllColours();
  document.getElementById(strBaseColour).style.display="inline";
  document.getElementById("txtMode").text="Single Colour";
}

function showComplimentaryColours(strBaseColour) {
  hideAllColours();
  document.getElementById(strBaseColour).style.display="inline";
  document.getElementById(arrAllColours[(arrAllColours.indexOf(strBaseColour) + intComplimentary) % arrAllColours.length]).style.display="inline";
  document.getElementById("txtMode").text="Complimentary";
}

function showSplitComplimentaryColours(strBaseColour) {
  hideAllColours();
  document.getElementById(strBaseColour).style.display="inline";
  document.getElementById(arrAllColours[(arrAllColours.indexOf(strBaseColour) + intSplitComplimentary1) % arrAllColours.length]).style.display="inline";
  document.getElementById(arrAllColours[(arrAllColours.indexOf(strBaseColour) + intSplitComplimentary2) % arrAllColours.length]).style.display="inline";
  document.getElementById("txtMode").text="Split Complimentary";
}

function showAnalgousColoursRight(strBaseColour) {
  hideAllColours();
  for(var i=0; i<4; i++) {
    document.getElementById(arrAllColours[(arrAllColours.indexOf(strBaseColour) + i) % arrAllColours.length]).style.display="inline";
  }
  document.getElementById("txtMode").text="Analgous R";
}

function showAnalgousColoursLeft(strBaseColour) {
  hideAllColours();
  for(var i=0; i<4; i++) {
    document.getElementById(arrAllColours[(arrAllColours.indexOf(strBaseColour) - i + arrAllColours.length) % arrAllColours.length]).style.display="inline";
  }
  document.getElementById("txtMode").text="Analgous L";
}

function toggleMode(strBaseColour) {
  blnBasicMode = !blnBasicMode;
  intCurrentMode = 0;
  
  if (blnBasicMode) {
    showAllColours();
  } else {
    showSingleColour(strBaseColour);
  }
}

// Physical buttons event handler
document.onkeypress = function(e) {
  if (blnBasicMode) {
    switch (e.key) {
      case "up":
        intCurrentMode = (++intCurrentMode) % intBasicModeMax;
        break;
      case "down":
        intCurrentMode = ((--intCurrentMode) + intBasicModeMax) % intBasicModeMax;
        break;
      case "back":
        break;
    }
       
    switch (intCurrentMode) {
      case 0:
        showAllColours();
        break;
      case 1:
        showPrimaryColours();
        break;
      case 2:
        showSecondaryColours();
        break;
      case 3:
        showTertiaryColours();
        break;
    }
  } else {
    switch (e.key) {
      case "up":
        intCurrentMode = (++intCurrentMode) % intAdvModeMax;
        break;
      case "down":
        intCurrentMode = ((--intCurrentMode) + intAdvModeMax) % intAdvModeMax;
        break;
      case "back":
        break;
    }
        
    switch (intCurrentMode) {
      case 0:
        showSingleColour(strBaseColour);
        break;
      case 1:
        showComplimentaryColours(strBaseColour);
        break;
      case 2:
        showSplitComplimentaryColours(strBaseColour);
        break;
      case 3:
        showAnalgousColoursRight(strBaseColour);
        break;
      case 4:
        showAnalgousColoursLeft(strBaseColour);
        break;
    }   
  }
}

document.getElementById("y").onclick = function(e) {
  strBaseColour="y";
  toggleMode(strBaseColour);
}

document.getElementById("yg").onclick = function(e) {
  strBaseColour="yg";
  toggleMode(strBaseColour);
}

document.getElementById("g").onclick = function(e) {
  strBaseColour="g";
  toggleMode(strBaseColour);
}

document.getElementById("bg").onclick = function(e) {
  strBaseColour="bg";
  toggleMode(strBaseColour);
}

document.getElementById("b").onclick = function(e) {
  strBaseColour="b";
  toggleMode(strBaseColour);
}

document.getElementById("bv").onclick = function(e) {
  strBaseColour="bv";
  toggleMode(strBaseColour);
}

document.getElementById("v").onclick = function(e) {
  strBaseColour="v";
  toggleMode(strBaseColour);
}

document.getElementById("rv").onclick = function(e) {
  strBaseColour="rv";
  toggleMode(strBaseColour);
}

document.getElementById("r").onclick = function(e) {
  strBaseColour="r";
  toggleMode(strBaseColour);
}

document.getElementById("ro").onclick = function(e) {
  strBaseColour="ro";
  toggleMode(strBaseColour);
}

document.getElementById("o").onclick = function(e) {
  strBaseColour="o";
  toggleMode(strBaseColour);
}

document.getElementById("yo").onclick = function(e) {
  strBaseColour="yo";
  toggleMode(strBaseColour);
}

console.log("App code started");
