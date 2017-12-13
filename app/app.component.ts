import { Component } from '@angular/core';


class Langage {
  id: number;
  nom: string;
  parleAnglais: boolean;
}

const LANGAGES : Langage[] = [

 {id: 1, nom: 'Francais', parleAnglais: false},
 {id: 2, nom: 'Portugais', parleAnglais: false},
 {id: 3, nom: 'Argentin', parleAnglais: false},
 {id: 4, nom: 'Espagnole', parleAnglais: false},
 {id: 5, nom: 'Italien', parleAnglais: false},
 {id: 6, nom: 'Belge', parleAnglais: false}

]
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
  texte2: string ;
  texte: string ;
  nombre: number = 1
  images: string[] = ['app/images/image10.jpeg','app/images/image11.jpg','app/images/image12.jpg','app/images/image13.jpg','app/images/image14.jpg','app/images/image15.jpg'];
  picture: string = this.images[0];
  index: number = 0;
  taches : string[] = ['Maj des infrastructures', 'Attirer les meilleurs jeune de la région', 'Construir une équipe compétitif'];
  actions: any[] = [
    {texte:'Acheter Neymar', realise: false},
    {texte:'Acheter Nbappé', realise: false},
    {texte:'Acheter Messi', realise: false},
  ];
  texteBouton: string = "cacher";
  visible: Boolean = true;
  langages = LANGAGES
  langagesSelectionnes: string [] = [];
   
 setStyles(langage:Langage) {
   let styles = {
     'color': langage.parleAnglais ? '#000' : '#ccc',
     'background-color': langage.parleAnglais ? 'yellow' : 'transparent'
   };
   return styles
 }


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
     this.texte2 = '';
   };

   ajouterAction(nouvelleAction:string) {
      this.actions.push(nouvelleAction);
      this.texte ="";
   };

   actionRealise(index:number){
    // console.log(this.actions[index] + " fait")
     

     if(this.actions[index].realise == false) {
       this.actions[index].realise = true
     }else {
       this.actions[index].realise = false
     }
   }
    surligner(index:number){
   
      this.langages[index].parleAnglais = (this.langages[index].parleAnglais == false? this.langages[index].parleAnglais =true : this.langages[index].parleAnglais = false)
    }
    marquerImportant(index:number) {
      let langage = this.langages[index];
      langage.parleAnglais = true;
    };
    marquerPasImportant(index:number) {
      let langage = this.langages[index];
      langage.parleAnglais = false;
    }
    cacherTexte() {
        if(this.visible == true) {
          this.visible =false
          this.texteBouton = "afficher"
        }else {
          this.visible = true
          this.texteBouton = "cacher"
        }
    }
    selectionnerListe(index:number) {
      let langage : string = this.langages[index];
      this.langagesSelectionnes.push(langage)
      console.log(langage)
    }
}
   