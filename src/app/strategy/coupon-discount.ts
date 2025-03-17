import { DiscountStrategy } from "./discount-strategy";

export class CouponDiscount implements DiscountStrategy {
    constructor(private discountCode: string) {}
    getFinalPrice(originalPrice: number): number {
        if (this.discountCode === 'DISCOUNT30') {
            return Math.max(0, originalPrice - 30);
        }
        return originalPrice;
    }}