const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var backg="sunrise1.png";

function preload() {

    getBackgroundImg();

}

    function setup(){
        createCanvas(950,700);
        engine = Engine.create();
        world = engine.world;

    }

    function draw(){
            
        if(backgroundImg){
        background(backgroundImg)
        }

        Engine.update(engine);

    }

    async function getBackgroundImg(){

            
    var response= await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata")
    
     var responseJson= await response.json()
     console.log("Time",responseJson)

     var datetime= responseJson.datetime
     var hour=datetime.slice(11,13)

    console.log(hour)

    if(hour>=04&&hour<=06){
         backg="sunrise1.png"
    }
    else if(hour>=06&&hour<=08){
        backg="sunrise2.png"
    }
    else if(hour>=08&&hour<=10){
        backg="sunrise3.png"
    }
    else if(hour>=10&&hour<=11){
        backg="sunrise4.png"
     }
     else if(hour>=11&&hour<=14){
        backg="sunrise5.png"
    }
      else if(hour>=14&&hour<=16){
         backg="sunrise6.png"
     }
      else if(hour>=16&&hour<=18){
          backg="sunset7.png"
      }
     else if(hour>=18&&hour<=20){
         backg="sunset8.png"
     }
      else if(hour>=20&&hour<=22){
          backg="sunset9.png"
      }
     else if(hour>=22&&hour<=24){
         backg="sunset10.png"
      }
      else if(hour>=00&&hour<=04){
          backg="sunset12.png"
       }

        

    

       backgroundImg = loadImage(backg);
       console.log(backgroundImg);
    

    } 
    //HI IF YOU ARE SEEING THIS XD
    //                 ~ Vishnu