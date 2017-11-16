import { Component } from '@angular/core';

@Component({
    selector: 'hello-world-app',
    templateUrl: 'app/app.component.html',
    styleUrls : ['app/app.component.css']
})
export class AppComponent { 

  titre = "projet Angular 2";
  date: Date = new Date();
  alert: string = "tu as clique sur le bouton"
  image: string = "app/image.jpeg";
  width: string = "800";
  height: string = "400";

  onClick(){
    alert("vous avez cliquez sur le bouton");
  };
  changerImage(){
   
   if (this.image == "app/image.jpeg"){                     // pour simplifier on peu ecrire  this.image =(this.image == "app/image.jpeg" ? "app/image2.jpg" : "app/image.jpeg")
     this.image = "app/image2.jpg"
   } else {
     this.image = "app/image.jpeg"
   }
  };
  changerTaille(){
    if (this.width == "800" ){
      this.width = "1000"
      this.height = "600"
    }else {
      this.width = "800" 
      this.height = "400"
    };
   }
   onClickDate(){
     alert(this.date)
   };
}
