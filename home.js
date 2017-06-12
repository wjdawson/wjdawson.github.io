var myStringArray = ["red","black"];
var arrayLength = myStringArray.length;
var i = 0;

$(document).ready(function () {
	var tid = setInterval(animate_bg, 5000);
	 $( "#animation" ).animate({
          height: "400px"
        }, 2000 );
});

function animate_bg() {
	i++;
	var array_index = i % arrayLength;
	var $color = myStringArray[array_index];
	$("#animation").animate({backgroundColor: $color}, 5000);
	console.log("i = " + i);
	console.log("array string = " + $color);
}
