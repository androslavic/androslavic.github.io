var canvas;
var click1;
var click2;
var brojIgraca=2;
var start=0;
var count;
var colors = [0,"#000000","#FF0000","#00FF00","#0000FF","#FFFF00"];
var boja = [0,"#000000","#FF0000","#00FF00","#0000FF","#FFFF00"];
var time = [5,0,0,0,0,0];
var player = [0,1,0,0,0,0];
var bigPass = [0,0,0,0,0,0];
var pause = 0;

function colorRotate (num){
  
  var tmp;
  
  if (num==4)
  {
    tmp=colors[5];
    colors[5]=colors[4];
    colors[4]=tmp;
  }
  
  if (num==3)
  {
    tmp=colors[5];
    colors[5]=colors[4];
    colors[4]=colors[3];
    colors[3]=tmp;    
  }

  if (num==2)
  {
    tmp=colors[5];
    colors[5]=colors[4];
    colors[4]=colors[3];
    colors[3]=colors[2];
    colors[2]=tmp;    
  }  

  if (num==1)
  {
    tmp=colors[5];
    colors[5]=colors[4];
    colors[4]=colors[3];
    colors[3]=colors[2];
    colors[2]=colors[1];
    colors[1]=tmp;    
  }
  
    boja[1]=colors[1];
    boja[2]=colors[2];
    boja[3]=colors[3];
    boja[4]=colors[4];
    boja[5]=colors[5];
    
    click1.color=boja[1];
    click2.color=boja[2];
    click3.color=boja[3];
    click4.color=boja[4];
    click5.color=boja[5];


 return 0; 
}


function isOne(num) {

  if (num==1)
      return 1;
  else
  return 0;
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(30);
  count=0;

  clickBroj = new Clickable();
  clickBroj.locate(20, 20);
  clickBroj.onOutside = function () {
    this.color = "#EEEEEE";
    this.text = brojIgraca;
    this.textColor = "#000000";
  }
  clickBroj.onPress = function () {
    if (brojIgraca ==5) 
    brojIgraca=2;
    else
    brojIgraca+=1;
    this.text = brojIgraca;
  }
  
  



  clickTime = new Clickable();
  clickTime.locate(170, 20);
  clickTime.onOutside = function () {
    this.color = "#EEEEEE";
    this.text = time[0];
    this.textColor = "#000000";
  }  
  clickTime.onPress = function () {
    time[0] +=5;
    this.text = time[0];
  }
  clickStart = new Clickable();
  clickStart.cornerRadius = 0;
  clickStart.locate(10, 200);
  clickStart.textScaled = true;
  clickStart.text = "start";
  clickStart.resize(250, 100);
  clickStart.onOutside = function () {
    this.color = "#FFFFFF";
  }

  clickStart.onPress = function () {
    start=1;
    time[0]= 30 * 60 * time[0];
    time[1]=time[0];
    time[2]=time[0];
    time[3]=time[0];
    time[4]=time[0];
    time[5]=time[0];

  strokeWeight(4);      
  
  box0 = new Clickable();
  box0.locate(40, 200);
  box0.resize(brojIgraca*((40+windowWidth*0.9)/(brojIgraca+1)), windowHeight/2);
  box0.text = "";
  box0.stroke = "#000000";
  box0.onOutside = function () {
    this.color = "#EEEEEE";
    this.textColor = "#000000";
  }
    box0.onPress = function () {

    var ind=0;
    ind=player.findIndex(isOne);
    player[ind]=0;

  for (let i=0;i<brojIgraca;i++){
    if (ind==brojIgraca){
      if (bigPass[i+1]==0)
            {
            player[1+i]=1;
            console.log("prvi");
            break;
            }
    }
    else
    {
      if (bigPass[i+1+ind]==0)
      {
        player[(ind+1+i)]=1;
            console.log("drugi");
        break;
      }
    }  
  }
    }
  
  
  clickNextGen = new Clickable();
  clickNextGen.locate(90+brojIgraca*((40+windowWidth*0.9)/(brojIgraca+1)), 250);
  clickNextGen.resize(brojIgraca*((40+windowWidth*0.1)/(brojIgraca+1)),0.8*windowHeight/2);
  
  clickNextGen.onOutside = function () {
    this.color = "#EEEEEE";
    this.text = 'Next generation';
    this.textColor = "#000000";
  }
  
  clickNextGen.onPress = function () {
    for (let i=0; i<6; i++)
    bigPass[i]=0;
  }
  
  clickPause = new Clickable();
  clickPause.locate(40, 250+windowHeight/2);
  clickPause.resize(brojIgraca*((40+windowWidth*0.9)/(brojIgraca+1)),windowHeight/10);
  
  clickPause.onOutside = function () {
    this.color = "#EEEEEE";
    this.text = 'Pauza';
    this.textColor = "#000000";
  }
  
  clickPause.onPress = function () {
    if (pause==1) 
    {pause=0;}
    else
    {pause=1;}
  }
  
  
  
  box1 = new Clickable();
  box1.locate(40, 20);
  box1.text = "";
  box1.stroke = boja[1];
  box1.resize(0.9*windowWidth/(brojIgraca+1), windowHeight/10);


  box2 = new Clickable();
  box2.locate(40 + (windowWidth/(brojIgraca+1)) , 20);
  box2.text = "";
  box2.stroke = boja[2];
  box2.resize(0.9*windowWidth/(brojIgraca+1), windowHeight/10);
  
  box3 = new Clickable();
  box3.locate(40 + 2*(windowWidth/(brojIgraca+1)) , 20);
  box3.text = "";
  box3.stroke = boja[3];
  box3.resize(0.9*windowWidth/(brojIgraca+1), windowHeight/10);

  box4 = new Clickable();
  box4.locate(40 + 3*(windowWidth/(brojIgraca+1)) , 20);
  box4.text = "";
  box4.stroke = boja[4];
  box4.resize(0.9*windowWidth/(brojIgraca+1), windowHeight/10);
  
  box5 = new Clickable();
  box5.locate(40 + 4*(windowWidth/(brojIgraca+1)) , 20);
  box5.text = "";
  box5.stroke = boja[5];
  box5.resize(0.9*windowWidth/(brojIgraca+1), windowHeight/10);

 box1.onPress = function () {
    
    bigPass[1]=1;
  }
 box2.onPress = function () {
    
    bigPass[2]=1;
  }
 box3.onPress = function () {
    
    bigPass[3]=1;
  }
 box4.onPress = function () {
    
    bigPass[4]=1;
  }
 box5.onPress = function () {
    
    bigPass[5]=1;
  }

 }
  
  click1 = new Clickable();
  click1.locate(20, 100);
  click1.text = "";
  click1.color = "#000000";


  click2 = new Clickable();
  click2.locate(120, 100);
  click2.text = "";
  click2.color = "#FF0000";
  
  click3 = new Clickable();
  click3.locate(220, 100);
  click3.text = "";
  click3.color = "#00FF00";

  click4 = new Clickable();
  click4.locate(320, 100);
  click4.text = "";
  click4.color = "#0000FF";
  
  click5 = new Clickable();
  click5.locate(420, 100);
  click5.text = "";
  click5.color = "#FFFF00";
  
  
  
  click1.onPress = function () {

   colorRotate(1);

  }
  
  click2.onPress = function () {

    colorRotate(2);
  }
  
  click3.onPress = function () {

   colorRotate(3);
  }  

  click4.onPress = function () {

    colorRotate(4);


}
  
  

}


function draw() {
  background(192,192,192);
  if (start==0)
  {
  clickBroj.draw();
  clickStart.draw();
  clickTime.draw();
  
  switch (brojIgraca){
   
    case 2:
    click1.draw();
    click2.draw();
    break;
    
    case 3:
    click1.draw();
    click2.draw();
    click3.draw();
    break;
    
    case 4:
    click1.draw();
    click2.draw();
    click3.draw();
    click4.draw();
    break;  

    case 5:
    click1.draw();
    click2.draw();
    click3.draw();
    click4.draw();
    click5.draw();
    break;  }
  

  }
  else if (start==1)
  {
    box0.draw();
    clickPause.draw();
    clickNextGen.draw();
    
 switch (brojIgraca){
   
    case 2:
    box1.draw();
    box2.draw();
    break;
    
    case 3:
    box1.draw();
    box2.draw();
    box3.draw();
    break;
    
    case 4:
    box1.draw();
    box2.draw();
    box3.draw();
    box4.draw();
    break;  

    case 5:
    box1.draw();
    box2.draw();
    box3.draw();
    box4.draw();
    box5.draw();
    break;   
  }

    for (let i=1; i<=brojIgraca; i++)
    {
      stroke(boja[i]);
      strokeWeight(4);
      fill(255); 

      fill (0);
      stroke(0);
      strokeWeight(2);
      textSize(20);
      sati=Math.floor(time[i]/(30*60*60));
      minute=Math.floor(time[i]/(30*60))-60*sati;
      sekunde=Math.floor(time[i]/30)-60*minute - 3600*sati;
      mili = ((time[i]%60)*100/60).toFixed(0);
      text (sati.toString() + ' : ' + minute.toString() + ' : ' + sekunde.toString() + ' : ' + mili.toString(), 120+(windowWidth/(brojIgraca+1))*(i-1), 55); 
      if (player[i]==1 && pause==0 && bigPass[i]==0)
      {
        time[i] = time[i]-1;    
      fill(255); 
      stroke (boja[i]);
      strokeWeight(8);      
      strokeWeight(1);      
      textSize(70);
      fill (boja[i]);
      text (sati.toString() + ' : ' + minute.toString() + ' : ' + sekunde.toString() + ' : ' + mili.toString(), windowWidth/4, windowHeight/2); 
      }
  }
}

}
