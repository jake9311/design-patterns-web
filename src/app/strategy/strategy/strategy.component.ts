import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { DiscountStrategy} from '../discount-strategy';
import { FixedDiscount } from '../fixed-discount';
import { PrecentageDiscount } from '../precentage-discount';
import { CouponDiscount } from '../coupon-discount';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-strategy',
  imports: [CommonModule,FormsModule,RouterLink],
  templateUrl: './strategy.component.html',
  styleUrl: './strategy.component.css'
})
export class StrategyComponent {
originalPrice:number=100;
selectedDiscount:string= 'precentage';
couponCode:string='';
finalPrice:number|null=null;

strategies:{[key:string]:DiscountStrategy}={
  'precentage':new PrecentageDiscount(),
  'fixed':new FixedDiscount(),
  
}



calculateFinalPrice() :void{
  let strategy:DiscountStrategy;
 
   if(this.selectedDiscount==='coupon'){
    strategy=new CouponDiscount(this.couponCode);
  }else{
    strategy=this.strategies[this.selectedDiscount];
    }
    this.finalPrice=strategy.getFinalPrice(this.originalPrice);
  }
}
