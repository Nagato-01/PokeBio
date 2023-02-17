import { Component, OnInit } from '@angular/core';
import { AllMethodesService } from './../../../services/all-methodes.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  items: any[];
  totals: number = 0 ;
  totalsAvecRemises: number = 0 ;
  coupon: string ;

  constructor(private allMethodesService: AllMethodesService) {
    this.items = this.allMethodesService.getItems();
    console.log(this.totals) ;
  }

  ngOnInit(): void {
    this.totals = this.allMethodesService.getTotals() ;
  }

  onSubmit() {
    // console.log(this.coupon)
    // const total = this.totals;
    // const discount = {type: 'percentage', value: 10};

    // const totalAvecRemise = this.allMethodesService.applyDiscount(total, discount);
    // this.totalsAvecRemises = totalAvecRemise ;
    // console.log(totalAvecRemise);
    
    this.totalsAvecRemises = this.allMethodesService.getTotal(this.coupon) ;

  }

  viderLocalStorage() {
    localStorage.clear();
    alert("La commande a bien été effectuée et le panier a été vidé !");
    location.reload();
  }
  

}
