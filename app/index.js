import document from "document";

var blnBasicMode = true;
var intCurMode = 0;
var strBaseCol = "";
const COMP = 6;
const SPLITCOMP1 = 5;
const SPLITCOMP2 = 7;
const BASICMODEMAX = 4;
const ADVMODEMAX = 5;
const MODETEXT = document.getElementById("txtMode");

var arrCols = ["y", "yg", "g", "bg", "b", "bv", "v", "rv", "r", "ro", "o", "yo"];

const arrColsLen = arrCols.length

function hideAll() {                     
  document.getElementsByClassName("segment").forEach(function(e) {e.style.display="none";} );
  MODETEXT.text="";
}

function showBase(strGroup, strTitle) {
  hideAll();
  document.getElementsByClassName(strGroup).forEach(function(e) {e.style.display="inline";} );
  MODETEXT.text=strTitle; 
}

function showComp(strBaseCol) {
  hideAll();
  document.getElementsByClassName(strBaseCol).forEach(function(e) {e.style.display="inline";} );
  document.getElementsByClassName(arrCols[(arrCols.indexOf(strBaseCol) + COMP) % arrColsLen]).forEach(function(e) {e.style.display="inline";} );
  MODETEXT.text="Complimentary";
}

function showSplitComp(strBaseCol) {
  hideAll();
  document.getElementsByClassName(strBaseCol).forEach(function(e) {e.style.display="inline";} );
  document.getElementsByClassName(arrCols[(arrCols.indexOf(strBaseCol) + SPLITCOMP1) % arrColsLen]).forEach(function(e) {e.style.display="inline";} );
  document.getElementsByClassName(arrCols[(arrCols.indexOf(strBaseCol) + SPLITCOMP2) % arrColsLen]).forEach(function(e) {e.style.display="inline";} ); 
  MODETEXT.text="Split Complimentary";
}

function showAnalogousRight(strBaseCol) {
  hideAll();
  for(var i=0; i<4; i++) {
    document.getElementsByClassName(arrCols[(arrCols.indexOf(strBaseCol) + i) % arrColsLen]).forEach(function(e) {e.style.display="inline";} );
  }
  MODETEXT.text="Analogous R";
}

function showAnalogousLeft(strBaseCol) {
  hideAll();
  for(var i=0; i<4; i++) {
    document.getElementsByClassName(arrCols[(arrCols.indexOf(strBaseCol) - i + arrColsLen) % arrColsLen]).forEach(function(e) {e.style.display="inline";} );
  }
  MODETEXT.text="Analogous L";
}

function toggleMode(strBaseCol) {
  blnBasicMode = !blnBasicMode;
  intCurMode = 0;
  
  if (blnBasicMode) {
    showBase("segment", "All Colours");
  } else {
    showBase(strBaseCol, "Single");
  }
}

document.onkeypress = function(e) {
  if (blnBasicMode) {
    switch (e.key) {
      case "up":
        intCurMode = ++intCurMode % BASICMODEMAX;
        break;
      case "down":
        intCurMode = (--intCurMode + BASICMODEMAX) % BASICMODEMAX;
        break;
      case "back":
        break;
    }
       
    switch (intCurMode) {
      case 0:
        showBase("segment", "All Colours");
        break;
      case 1:
        showBase("pri", "Primary");
        break;
      case 2:
        showBase("sec", "Secondary");
        break;
      case 3:
        showBase("ter", "Tertiary");
        break;
    }
  } else {
    switch (e.key) {
      case "up":
        intCurMode = ++intCurMode % ADVMODEMAX;
        break;
      case "down":
        intCurMode = (--intCurMode + ADVMODEMAX) % ADVMODEMAX;
        break;
      case "back":
        break;
    }
        
    switch (intCurMode) {
      case 0:
        showBase(strBaseCol, "Single");
        break;
      case 1:
        showComp(strBaseCol);
        break;
      case 2:
        showSplitComp(strBaseCol);
        break;
      case 3:
        showAnalogousRight(strBaseCol);
        break;
      case 4:
        showAnalogousLeft(strBaseCol);
        break;
    }   
  }
}

function segment_click(strCol) {
  strBaseCol=strCol;
  toggleMode(strBaseCol);
}

document.getElementById("y").onclick = function(e) { segment_click("y"); }
document.getElementById("y1").onclick = function(e) { segment_click("y"); }
document.getElementById("yg").onclick = function(e) { segment_click("yg"); }
document.getElementById("yg1").onclick = function(e) { segment_click("yg"); }
document.getElementById("g").onclick = function(e) { segment_click("g"); }
document.getElementById("g1").onclick = function(e) { segment_click("g"); }
document.getElementById("bg").onclick = function(e) { segment_click("bg"); }
document.getElementById("bg1").onclick = function(e) { segment_click("bg"); }
document.getElementById("b").onclick = function(e) { segment_click("b"); }
document.getElementById("b1").onclick = function(e) { segment_click("b"); }
document.getElementById("bv").onclick = function(e) { segment_click("bv"); }
document.getElementById("bv1").onclick = function(e) { segment_click("bv"); }
document.getElementById("v").onclick = function(e) { segment_click("v"); }
document.getElementById("v1").onclick = function(e) { segment_click("v"); }
document.getElementById("rv").onclick = function(e) { segment_click("rv"); }
document.getElementById("rv1").onclick = function(e) { segment_click("rv"); }
document.getElementById("r").onclick = function(e) { segment_click("r"); }
document.getElementById("r1").onclick = function(e) { segment_click("r"); }
document.getElementById("ro").onclick = function(e) { segment_click("ro"); }
document.getElementById("ro1").onclick = function(e) { segment_click("ro"); }
document.getElementById("o").onclick = function(e) { segment_click("o"); }
document.getElementById("o1").onclick = function(e) { segment_click("o"); }
document.getElementById("yo").onclick = function(e) { segment_click("yo"); }
document.getElementById("yo1").onclick = function(e) { segment_click("yo"); }
