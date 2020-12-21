class Villians {
    constructor(x,y,w,h) {
        this.x=x;
        this.y=y;
this.w=w;
this.h=h;
this.sprite=createSprite(x,y,w,h);
  this.image = loadImage("OIP(3).jpg");
   this.image.scale=2;   
      }
      display(){
     
    
        this.sprite.addImage(this.image);
       }

      
     
       
      
    }