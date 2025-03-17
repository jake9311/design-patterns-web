import { DiscountStrategy } from "./discount-strategy";

export class PrecentageDiscount implements DiscountStrategy {
    private discountPrecentage: number=10;

    getFinalPrice(originalPrice: number): number {
        return originalPrice * (1 - this.discountPrecentage / 100);
    }
}