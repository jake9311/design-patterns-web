import { DiscountStrategy } from "./discount-strategy";


export class FixedDiscount implements DiscountStrategy {
    private discountAmount: number = 50;

    getFinalPrice(originalPrice: number): number {
        return Math.max(0, originalPrice - this.discountAmount);
    }
}
