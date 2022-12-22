var AR = require('js-aruco').AR;
var detector = new AR.Detector();

var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");
var imageData = context.getImageData(0, 0, width, height);
var markers = detector.detect(imageData);

var POS = require('js-aruco').POS1;
var posit = new POS.Posit(modelSize, canvas.width);

var pose = posit.pose(corners);

var corners = marker.corners;

for (var i = 0; i < corners.length; ++ i){
  var corner = corners[i];

  corner.x = corner.x - (canvas.width / 2);
  corner.y = (canvas.height / 2) - corner.y;
}
