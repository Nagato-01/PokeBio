import { Component, OnInit } from '@angular/core';
import { AllMethodesService } from './../../../services/all-methodes.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  
  items:any[] ;  
  product = [
    {
      id: 1,
      nom: "Poke bowl au saumon et avocat",
      description: "Riz vinaigré, saumon frais, avocat, concombre, edamame, gingembre mariné et sauce teriyaki.",
      image: "assets/img/products/1.jpeg", 
      prix: 12.50
    },
    {
      id: 2,
      nom: "Poke bowl au thon épicé",
      description: "Riz vinaigré, thon frais, avocat, carottes, edamame, oignons rouges et sauce soja épicée.",
      image: "assets/img/products/2.jpeg",
      prix: 10.00
    },
    {
      id: 3,
      nom: "Poke bowl au tofu et légumes",
      description: "Riz vinaigré, tofu grillé, avocat, carottes, edamame, oignons rouges et sauce soja.",
      image: "assets/img/products/3.jpeg",
      prix: 11.50
    },
    {
      id: 4,
      nom: "Poke bowl au saumon et mangue",
      description: "Riz vinaigré, saumon frais, mangue, concombre, edamame, gingembre mariné et sauce teriyaki.",
      image: "assets/img/products/4.jpeg",
      prix: 12.50
    },
    {
      id: 5,
      nom: "Poke bowl végétarien",
      description: "Riz vinaigré, tofu grillé, avocat, carottes, edamame, oignons rouges et sauce soja.",
      image: "assets/img/products/5.jpeg",
      prix: 10.00
    },
    {
      id: 6,
      nom: "Poke bowl au poulet et légumes",
      description: "Riz vinaigré, poulet grillé, avocat, poivrons, oignons rouges, coriandre et sauce chili douce.",
      image: "assets/img/products/4.jpeg",
      prix: 11.50
    }
  ];
  

  constructor(private allMethodesService:AllMethodesService) { 
    this.items = this.allMethodesService.getItems() ;
  }

  ngOnInit(): void {
  }

  choisirItemAleatoire(items: any) {
    console.log(items);

    // const index = Math.floor(Math.random() * this.product.length);
    return this.product[items];
  }
  
  ajouterAuPanier(valeur: any){

    const value =  this.product[valeur] ;
    this.allMethodesService.ajouterAuPanier(value) ;
  }

  viderPanier(){
    this.allMethodesService.viderPanier();
    this.items = [] ;
  }

}
