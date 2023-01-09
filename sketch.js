function setup() {
	createCanvas(600,600); 
	c1 = "#9a7787";
	c2 = "#e4af80";
	c3 = "#fed7bf";
	c4 = "#301934";
	c5 = "#68507b";
	c6 = "#D4B4DA";
	textSize(32);
  }
  
  function draw() {
	print('Current minute is ' + minute());
	noStroke();
	background(c3);
	
	//signature(UNI)
	fill(c4);
	text('JA3569', 460, 565);
	
	//flower on back, denoting seconds
	push();
	translate(300, 300);
	for (var i = 0; i < 60; i++) {
	  push();
	  if (i < second()){
		  fill(c6);
		} else{
		  fill(c3);
		} 
	  rotate(TWO_PI * i / 60);
	  ellipse(120,0,300,70);
	  pop();
	  }
	pop();
	
	//flower on back, denoting minutes
	push();
	translate(300, 300);
	for (var i = 0; i < 60; i++) {
	  push();
	  if (i < minute()){
		  fill(c5);
		} else{
		  fill(c4);
		} 
	  rotate(TWO_PI * i / 60);
	  ellipse(100,0,300,40);
	  pop();
	  }
	pop();
	
	//ear
	fill(c1);
	ellipse(225,220,80,250);
	ellipse(375,220,80,250);
	fill(c2);
	ellipse(225,220,50,180);
	ellipse(375,220,50,180);
	
	//face
	fill(c1);
	ellipse(300,380,280,230);
	
	//eye, denoting seconds
	fill("black");
	ellipse(240,370,23,30-second()/2);
	ellipse(365,370,23,30-second()/2);
	
	//cheek
	fill(c3);
	ellipse(205,400,40,25);
	ellipse(395,400,40,25);
  
	//mouth
	fill(c2)  
	ellipse(300,420,20,mouseY/30);
	
	//flower on ear, denoting hours
	translate(400, 280);
	for (var i = 0; i < 12; i++) {
		push();
		if (i < hour() % 12){
		  fill(c6);
		} else{
		  fill(c3);
		} 
		rotate(TWO_PI * i / 12);
		ellipse(30,0,60,20);
		pop();
	  }
	fill(c4);
	text('H', -10, 10);
  }
