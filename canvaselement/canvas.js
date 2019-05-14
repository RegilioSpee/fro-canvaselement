let canvas = document.getElementById("myCanvas");
let context = canvas.getContext("2d");
let teller = 0;

function timer() {
  teller++;

  if (teller >= 1) {
    //volledig hoofd
    context.beginPath();
    context.arc(200, 200, 150, 0, 2 * Math.PI);
    context.stroke();
    context.fillStyle = "yellow";
    context.fill();
  }

  if (teller >= 2) {
    //oog rechts
    context.beginPath();
    context.arc(260, 140, 45, 0, 2 * Math.PI);
    context.closePath();
    context.stroke();
    context.fillStyle = "white";
    context.fill();
  }

  if (teller >= 3) {
    //oog links
    context.beginPath();
    context.arc(140, 140, 45, 0, 2 * Math.PI);
    context.closePath();
    context.stroke();
    context.fillStyle = "white";
    context.fill();
  }

  if (teller >= 4) {
    //pupil links
    context.beginPath();
    context.arc(140, 140, 10, 0, 2 * Math.PI);
    context.closePath();
    context.stroke();
    context.fillStyle = "black";
    context.fill();
  }

  if (teller >= 5) {
    //pupil rechts
    context.beginPath();
    context.arc(260, 140, 10, 0, 2 * Math.PI);
    context.closePath();
    context.stroke();
    context.fillStyle = "black";
    context.fill();
  }

  if (teller >= 6) {
    //mond
    context.beginPath();
    context.arc(200, 200, 75, 0, 3);
    context.closePath();
    context.stroke();
    context.fillStyle = "white";
    context.fill();
    context.stroke();
  }

  if (teller >= 7) {
    //neus
    context.beginPath();
    context.arc(200, 190, 10, 0, 2 * Math.PI);
    context.closePath();
    context.stroke();
    context.fillStyle = "black";
    context.fill();
  }

  if (teller >= 8) {
    //ooglid links
    context.beginPath();
    context.arc(140, 140, 45, 1.25 * Math.PI, 2 * Math.PI);
    context.closePath();
    context.stroke();
  }

  if (teller >= 9) {
    //ooglid rechts
    context.beginPath();
    context.arc(260, 140, 45, 1 * Math.PI, 1.75 * Math.PI);
    context.closePath();
    context.stroke();
  }

  if (teller >= 10) {
    // haar
    context.beginPath();
    context.arc(200, 47, 50, 0, 1);
    context.closePath();
    context.stroke();
    context.fillStyle = "black";
    context.fill();
  }

  if (teller >= 11) {
    // haar
    context.beginPath();
    context.arc(190, 47, 50, 0, 1);
    context.closePath();
    context.stroke();
    context.fillStyle = "black";
    context.fill();
  }

  if (teller >= 12) {
    // haar
    context.beginPath();
    context.arc(180, 47, 50, 0, 1);
    context.closePath();
    context.stroke();
    context.fillStyle = "black";
    context.fill();
  }

  if (teller >= 13) {
    // haar
    context.beginPath();
    context.arc(170, 47, 50, 0, 1);
    context.closePath();
    context.stroke();
    context.fillStyle = "black";
    context.fill();
  }

  if (teller >= 14) {
    // haar
    context.beginPath();
    context.arc(160, 47, 50, 0, 1);
    context.closePath();
    context.stroke();
    context.fillStyle = "black";
    context.fill();
  }

  if (teller >= 15) {
    // haar
    context.beginPath();
    context.arc(150, 47, 50, 0, 1);
    context.closePath();
    context.stroke();
    context.fillStyle = "black";
    context.fill();
  }

  if (teller >= 16) {
    // haar
    context.beginPath();
    context.arc(140, 47, 50, 0, 1);
    context.closePath();
    context.stroke();
    context.fillStyle = "black";
    context.fill();
  }

  if (teller >= 17) {
    // haar
    context.beginPath();
    context.arc(130, 47, 50, 0, 1);
    context.closePath();
    context.stroke();
    context.fillStyle = "black";
    context.fill();
  }
}
setInterval(timer, 500);
