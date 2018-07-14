/* global $ */

setInterval(function(){
  $.getJSON("/api/data")
  .then(findData);
},2000);



function findData(data){
 var analogObject = data.slice(-1)[0];
 var analogData = parseInt(analogObject.analogData,10);
 console.log(analogData);
 var percentValue =100 - Math.floor((analogData/27)*100);
 console.log(percentValue);
 svgAnimation(percentValue);
}

function svgAnimation(percentValue){
    	var a = document.getElementById("status-image");
	// Get the SVG document inside the Object tag
	var svgDoc = a.contentDocument;
	// Get one of the SVG items by ID;
	if(percentValue>=75 && percentValue<=100){
  document.getElementById("status").innerHTML = "Status CRITICAL!";
  document.getElementById("level").innerHTML = "Garbage Level: "+percentValue+"%";
  var svgItem = svgDoc.getElementById("path3853");
  svgItem.style.fill = "red";
  svgItem = svgDoc.getElementById("path3855");
  svgItem.style.fill = "red";
  svgItem = svgDoc.getElementById("path3857");
  svgItem.style.fill = "red";  
  svgItem = svgDoc.getElementById("path3859");
  svgItem.style.fill = "red";
	}
	
	else if(percentValue >=50 && percentValue<=75){
  document.getElementById("status").innerHTML = "Status: Warning!";
  document.getElementById("level").innerHTML = "Garbage Level: "+percentValue+"%";
  svgItem = svgDoc.getElementById("path3853");
  svgItem.style.fill = "orange";
  svgItem = svgDoc.getElementById("path3855");
  svgItem.style.fill = "orange";
  svgItem = svgDoc.getElementById("path3857");
  svgItem.style.fill = "orange";  
  svgItem = svgDoc.getElementById("path3859");
  svgItem.style.fill = "none";
	}		

	else if(percentValue>=25 && percentValue<=50){
  document.getElementById("status").innerHTML = "Status OK!";
  document.getElementById("level").innerHTML = "Garbage Level: "+percentValue+"%";
  svgItem = svgDoc.getElementById("path3853");
  svgItem.style.fill = "yellow";
  svgItem = svgDoc.getElementById("path3855");
  svgItem.style.fill = "yellow";
  svgItem = svgDoc.getElementById("path3857");
  svgItem.style.fill = "none";  
  svgItem = svgDoc.getElementById("path3859");
  svgItem.style.fill = "none";
	}
	
	else if(percentValue >0 && percentValue<=25){
  document.getElementById("status").innerHTML = "Status OK!";
  document.getElementById("level").innerHTML = "Garbage Level: "+percentValue+"%";
   svgItem = svgDoc.getElementById("path3853");
  svgItem.style.fill = "green";
    svgItem = svgDoc.getElementById("path3855");
  svgItem.style.fill = "none";
     svgItem = svgDoc.getElementById("path3857");
  svgItem.style.fill = "none";  
  svgItem = svgDoc.getElementById("path3859");
  svgItem.style.fill = "none";
	}
  
 /* else if(percentValue>=100  ){
  document.getElementById("status").innerHTML = "Status: StandBy!";
  document.getElementById("level").innerHTML = "Garbage Level: Calculating";
   svgItem = svgDoc.getElementById("path3853");
  svgItem.style.fill = "white";
    svgItem = svgDoc.getElementById("path3855");
  svgItem.style.fill = "white";
     svgItem = svgDoc.getElementById("path3857");
  svgItem.style.fill = "white";  
  svgItem = svgDoc.getElementById("path3859");
  svgItem.style.fill = "white";
	}*/
	else if(percentValue<=0){
	      document.getElementById("status").innerHTML = "Status: Empty!";
  document.getElementById("level").innerHTML = "Garbage Level: 0%";
   svgItem = svgDoc.getElementById("path3853");
  svgItem.style.fill = "white";
    svgItem = svgDoc.getElementById("path3855");
  svgItem.style.fill = "white";
     svgItem = svgDoc.getElementById("path3857");
  svgItem.style.fill = "white";  
  svgItem = svgDoc.getElementById("path3859");
  svgItem.style.fill = "white";
	}
	
}

