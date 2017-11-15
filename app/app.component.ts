import { Component } from '@angular/core';

@Component({
    selector: 'hello-world-app',
    templateUrl: 'app/app.component.html',
    styleUrls : ['app/app.component.css']
})
export class AppComponent { 

  titre = "projet Angular 2";
  image: string = "app/image.jpeg";
  width: string = "800";
  height: string = "400";

  onClick(){
    alert("vous avez cliquez sur le bouton");
  }
}
