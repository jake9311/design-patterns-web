export interface DiscountStrategy {
    getFinalPrice(originalPrice: number): number;
}