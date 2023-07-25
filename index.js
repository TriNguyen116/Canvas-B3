window.onload = function () {
  var cxt = document.getElementById('a').getContext('2d');

  // Đầu
  cxt.beginPath();
  cxt.lineWidth = 1;
  cxt.strokeStyle = '#000';
  cxt.arc(700, 200, 175, 0.7 * Math.PI, 0.3 * Math.PI); // Tâm 700, 300, R: 175
  cxt.fillStyle = '#0bb0da';
  cxt.fill();
  cxt.stroke();

  // Mặt
  cxt.beginPath();
  cxt.fillStyle = '#fff';
  cxt.moveTo(620, 130); // Điểm vẽ đường cong từ măt xuống
  cxt.quadraticCurveTo(500, 200, 630, 340); // Điểm bắt đầu, điểm kết thúc
  cxt.lineTo(770, 340) // Vẽ tướng đường thẳng qua bên phải
  cxt.quadraticCurveTo(910, 200, 780, 130); // Vẽ đường cong lên
  cxt.lineTo(620, 130)
  cxt.fill();
  cxt.stroke();

  // Mắt
  cxt.beginPath();
  cxt.lineWidth = 1;
  cxt.fillStyle = '#fff';
  cxt.moveTo(620, 130); // di chuyển tới bắt đầu
  cxt.bezierCurveTo(620, 50, 700, 50, 700, 130);// Nữa elip trái 620, 50, nữa elip phải 700, 50 , kết thúc 700, 130
  cxt.bezierCurveTo(700, 200, 620, 200, 620, 130);// Nữa elip phải 700, 200 nữa elip trái 620 200, kết thúc 620, 130
  cxt.moveTo(700, 130)
  cxt.bezierCurveTo(700, 50, 780, 50, 780, 130);
  cxt.bezierCurveTo(780, 200, 700, 200, 700, 130);
  cxt.fill()
  cxt.stroke();

  // Mắt trái
  cxt.beginPath();
  cxt.fillStyle = '#000';
  cxt.arc(670, 160, 12, 0, 2 * Math.PI);
  cxt.fill();
  cxt.stroke();

  // Mắt phải
  cxt.beginPath();
  cxt.fillStyle = '#000';
  cxt.arc(730, 160, 12, 0, 2 * Math.PI);
  cxt.fill();
  cxt.stroke();

  // Mũi
  cxt.beginPath();
  cxt.arc(700, 195, 25, 0, 2 * Math.PI);
  cxt.fillStyle = '#d05823';
  cxt.fill();
  cxt.stroke();

  // Ria mép
  // Ria mép trái
  cxt.beginPath();
  cxt.moveTo(610, 220)
  cxt.lineTo(670, 240)
  cxt.moveTo(610, 250)
  cxt.lineTo(670, 250)
  cxt.moveTo(610, 270)
  cxt.lineTo(670, 260)
  cxt.stroke()

  // Ria mép phải
  cxt.beginPath();
  cxt.moveTo(730, 240)
  cxt.lineTo(790, 220)
  cxt.moveTo(730, 250)
  cxt.lineTo(790, 250)
  cxt.moveTo(730, 260)
  cxt.lineTo(790, 270)
  cxt.stroke()

  // Ria mép ở giữa
  cxt.beginPath();
  cxt.moveTo(700, 240)
  cxt.lineTo(700, 280)
  cxt.stroke()

  // Miệng
  cxt.beginPath();
  cxt.moveTo(610, 290)
  cxt.quadraticCurveTo(700, 350, 790, 290);
  cxt.lineTo(610, 290)
  cxt.moveTo(670, 316)
  cxt.quadraticCurveTo(700, 300, 730, 316);
  cxt.stroke()

  // Cổ áo
  cxt.beginPath();
  cxt.moveTo(570, 340);
  cxt.lineTo(830, 340);
  cxt.arcTo(830, 340, 830, 350, 10);
  cxt.lineTo(830, 360)
  cxt.lineTo(570, 360)
  cxt.arcTo(570, 360, 570, 360, 10);
  cxt.lineTo(570, 340)
  cxt.fillStyle = '#b13209';
  cxt.fill();
  cxt.stroke();
  // Thân Dưới
  cxt.beginPath();
  cxt.fillStyle = '#0bb0da';
  cxt.moveTo(580, 360);
  // Áo trái
  cxt.lineTo(520, 440);
  cxt.lineTo(550, 460);
  cxt.lineTo(575, 425);
  cxt.lineTo(575, 550);
  cxt.lineTo(825, 550);
  cxt.fill()
  cxt.stroke();

  
  // Áo phải
  // cxt.moveTo(720, 550);
  // cxt.lineTo(825, 550);
  cxt.lineTo(825, 425);
  cxt.lineTo(850, 460);
  cxt.lineTo(870, 445);
  cxt.lineTo(820, 360);
  cxt.lineTo(580,360);
  cxt.fill()
  cxt.stroke();
  // tay trái
  cxt.beginPath();
  cxt.fillStyle = '#fff';
  cxt.arc(535, 450, 25, 0, 2 * Math.PI);
  cxt.fill();
  cxt.stroke();
  // tay phải
  cxt.beginPath();
  cxt.fillStyle = '#fff';
  cxt.arc(860, 450, 25, 0, 2 * Math.PI);
  cxt.fill();
  cxt.stroke();
  
  // Phần khoảng cách giữa 2 chấn
  cxt.beginPath();
      cxt.fillStyle = '#fff';
      cxt.arc(700, 551, 20, Math.PI, 0);
      cxt.fill();
      cxt.stroke();
  // Chân trái
  cxt.beginPath();
  cxt.fillStyle = '#fff';
  cxt.moveTo(575, 550);
  cxt.lineTo(555, 550);
  cxt.bezierCurveTo(540, 550, 530, 575, 575, 570);
  cxt.lineTo(680, 570);
  cxt.bezierCurveTo(690, 565, 690, 550, 680, 550);
  cxt.stroke()
  // Chân trái
  cxt.beginPath();
  cxt.fillStyle = '#fff';
  cxt.moveTo(575, 550);
  cxt.lineTo(555, 550);
  cxt.bezierCurveTo(540, 550, 530, 575, 575, 570);
  cxt.lineTo(680, 570);
  cxt.bezierCurveTo(690, 565, 690, 550, 680, 550);
  cxt.stroke()
  // Chân phải
  cxt.beginPath();
  cxt.fillStyle = '#fff';
  cxt.moveTo(825, 550);
  cxt.lineTo(845, 550);
  cxt.bezierCurveTo(860, 550, 860, 570, 845, 570);
  cxt.lineTo(720, 570);
  cxt.bezierCurveTo(710, 565, 710, 550, 720, 550);
  cxt.stroke()
  // Quần
  cxt.beginPath();
  cxt.fillStyle = '#fff';
  cxt.moveTo(575, 460);
  cxt.lineTo(575,520)
  cxt.lineTo(825,520)
  cxt.lineTo(825,460)
  cxt.lineTo(575,460)
  cxt.fill()
  cxt.stroke()

  // Ngực
  //Trái
  cxt.beginPath();
  cxt.fillStyle = '#fff';
  cxt.arc(640, 410, 5, 0, 2 * Math.PI);
  cxt.fill();
  cxt.stroke();
  cxt.beginPath();
  // Phải
  cxt.fillStyle = '#fff';
  cxt.arc(770, 410, 5, 0, 2 * Math.PI);
  cxt.fill();
  cxt.stroke();
};



function showCoordinates(event) {
  var x = event.clientX;
  var y = event.clientY;
  var output = document.getElementById("adr");
  output.innerHTML = "x:" + x + " y:" + y;
}
