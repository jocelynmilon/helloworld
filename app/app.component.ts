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
  texte: string ;
  nombre: number = 1
  images: string[] = ['app/images/image10.jpeg','app/images/image11.jpg','app/images/image12.jpg','app/images/image13.jpg','app/images/image14.jpg','app/images/image15.jpg'];
  picture: string = this.images[0];
  index: number = 0;
  taches : any[] = [
   {texte: 'Maj des infrastructures', realise: false},
   {texte: 'Attirer les meilleurs jeune de la région', realise: false},
   {texte: 'Construir une équipe compétitif', realise: false}
     ]


  onClick(){
    alert("vous avez cliquez sur le bouton");
  };
  changerImage(){

   if (this.image == "app/image.jpeg"){
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
   changerTexte(){
     this.texte ="Paris est magique"
   };
   incrementerNombre(){
     this.nombre ++
   };
   deincrementerNombre(){
     this.nombre --
   }
   defilerImage(){

    if(this.index == this.images.length -1){
      this.index = 0;
      this.picture = this.images[this.index]

    }else{
      this.index ++;
      this.picture = this.images[this.index]
    }


   };
   ajouterAListe(nouvelleTache:string) {
     this.taches.push(nouvelleTache);
     this.texte = '';
   };

   tacheRealise(index:number) {

   // console.log(this.taches[index] + " fait")
    
    if (this.taches[index].realise == false ) {
        this.taches[index].realise = true
    } else {
      this.taches[index].realise = false
    }
   }
  
}
