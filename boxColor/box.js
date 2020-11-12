
var square = document.querySelector(".square");
var color1 = 'rgb(2, 27, 79)'; // super grey
var color2 = 'rgb(173, 205, 227)';   // super red!

var theWidth = 8256;
var theFrames = 24;
var thatWidth = theWidth / theFrames
var mobileOrigin;
let totalHeight = 300;

var hand = document.querySelector( '.hand' );

function App() {

    this.init = function() {

		square.onmousemove = function( event ) {
            console.log("Movement detec");
            console.log(event.y, totalHeight);
			var percentage = 1 - ( event.y / totalHeight );
            var color = fadeToColor(color1, color2, percentage)
                console.log("Color",color);
			square.style.backgroundColor = color;
		}
        window.onresize = function() {
            totalHeight = window.innerHeight;
        }
    }
	function fadeToColor(rgbColor1, rgbColor2, ratio) {
        console.log("RGB1", rgbColor1, rgbColor2, ratio);
	    var color1 = rgbColor1.substring(4, rgbColor1.length - 1).split(','),
	        color2 = rgbColor2.substring(4, rgbColor2.length - 1).split(','),
	        difference,
	        newColor = [];

	    for (var i = 0; i < color1.length; i++) {
	        difference = color2[i] - color1[i];
	        newColor.push(Math.floor(parseInt(color1[i], 10) + difference * ratio));
	    }

	    return 'rgb(' + newColor + ')';
	}
}

var app = new App();
app.init();
